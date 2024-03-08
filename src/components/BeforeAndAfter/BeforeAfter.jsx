import Image from "next/image";
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "change":
      return {
        rangeValue: action.payload,
      };
    case "move":
      return {
        rangeValue: Math.round(action.payload),
      };
    default:
      return state;
  }
}

export function BeforeAfter({
  beforeImage,
  afterImage,
  onChange,
  onPointerMove,
  onPointerEnter,
  onPointerLeave,
  pointerMove = false,
  className = "before-after-slider",
  beforeClassName = "before",
  afterClassName = "after",
  buttonClassName = "resize-button",
  style,
  beforeStyle,
  afterStyle,
  buttonStyle,
  height,
  width,
  mainDivWidth,
  mainDivBoxShaow
}) {
  const [{ rangeValue }, dispatch] = useReducer(reducer, {
    rangeValue: 50,
  });

  const handleChange = (event) => {
    dispatch({ type: "change", payload: Number(event.target.value) });

    if (onChange) onChange(event);
  };

  const handlePointerMove = (event) => {
    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    const positionX = clientX - left;

    if (positionX >= 0)
      dispatch({ type: "move", payload: (positionX / width) * 100 });

    if (onPointerMove) onPointerMove(event);
  };

  const handlePointerEnter = (event) => {
    if (!onPointerEnter) return;

    onPointerEnter(event);
  };

  const handlePointerLeave = (event) => {
    if (!onPointerLeave) return;

    onPointerLeave(event);
  };

  return (
    <div
      className={className}
      style={{
        position: `relative`,
        overflow: `hidden`,
        width: mainDivWidth ? mainDivWidth : "fit-content",
        cursor: "e-resize",
        userSelect: "none",
        borderRadius: "20px",
        // boxShadow: mainDivBoxShaow && mainDivBoxShaow,
        ...style,
      }}
      onPointerMove={pointerMove ? handlePointerMove : undefined}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className={beforeClassName}
        style={{
          position: "absolute",
          overflow: "hidden",
          width: `${rangeValue}%`,
          height: "100%",
          top: 0,
          left: 0,
          borderRight: "2px solid #eee",
          ...beforeStyle,
        }}
      >
        <Image
          src={beforeImage}
          alt="before"
          width={width ? width : 900}
          height={height ? height : 500}
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className={afterClassName} style={afterStyle}>
        <Image
          src={afterImage}
          alt="after"
          width={width ? width : 900}
          height={height ? height : 500}
          style={{ maxWidth: "100%", display: "block", objectFit: "cover" }}
        />
      </div>

      {!pointerMove && (
        <>
          <input
            type="range"
            min={0}
            max={100}
            value={rangeValue}
            name="slider"
            onChange={handleChange}
            style={{
              appearance: "none",
              backgroundColor: "transparent",
              width: "100%",
              height: " 100%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              cursor: "inherit",
            }}
          />
          <div
            className={buttonClassName}
            style={{
              backgroundColor: "#fff",
              pointerEvents: "none",
              position: "absolute",
              top: "50%",
              left: `${rangeValue}%`,
              transform: `translate(-50%,-50%)`,
              borderRadius: "50%",
              width: 30,
              height: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ...buttonStyle,
            }}
          >
            <svg
              fill="#333"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M24,12l-5.7-5.7V11c-3.7,0-9,0-12.6,0V6.3L0,12l5.8,5.7V13c3.6,0,8.9,0,12.5,0v4.7L24,12z" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}
