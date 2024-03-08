import React, { useState, useEffect } from "react";
import Image from "next/image";
import shade1 from "../../assets/images/shade1.svg";
import { UIStyledMovingImage } from "./ui";
import { Box } from "@mui/material";

const RandomizedImage = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  //   useEffect(() => {
  //     const getRandomValue = (min, max) =>
  //       Math.floor(Math.random() * (max - min + 1)) + min;

  //     const moveImage = () => {
  //       const newTop = getRandomValue(0, window.innerHeight);
  //       const newLeft = getRandomValue(0, window.innerWidth);

  //       setPosition({ top: newTop, left: newLeft });
  //     };

  //     moveImage(); // Set initial position

  //     const animationEndHandler = () => {
  //       moveImage(); // Move the image to a new random position after each animation completion
  //     };

  //     const imageElement = document.getQuerySelector(".randomizedImage");
  //     imageElement.addEventListener("animationiteration", animationEndHandler);

  //     return () => {
  //       imageElement.removeEventListener(
  //         "animationiteration",
  //         animationEndHandler
  //       );
  //     };
  //   }, []); // Run the effect once on mount

  const [transformStyle, setTransformStyle] = useState({});

  const transformBox = () => {
    const randomRotation = `rotate(${Math.random() * 360}deg)`;
    const randomScale = `scale(${Math.random() * 10})`;

    const randomTranslateX = `translateX(${Math.max(
      0,
      Math.random() * window.innerWidth
      // Math.min(0)
    )}px)`;

    const randomTranslateY = `translateY(${
      Math.random() * window.innerHeight - 100
    }px)`;

    const newTransformStyle = {
      position: "absolute",
      filter: "blur(29px)",
      top: "1200px",
      transform: `${randomRotation} ${randomTranslateX} ${randomTranslateY}`,
      transition: "transform 5s ease-in-out",
    };

    setTransformStyle(newTransformStyle);
  };

  useEffect(() => {
    const interval = setInterval(transformBox, 2000); // Change the interval duration as needed
    return () => clearInterval(interval);
  }, []);

  return (
    // <UIStyledRandomBox
    //   id="randomizedImage"
    // //   className={styles.randomizedImage}
    //   style={{ top: position.top, left: position.left, width: "100%" }}
    // >
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <UIStyledMovingImage
        //   style={{
        //     position: "absolute",
        //     filter: "blur(2px)",
        //     top: "1200px",
        //     right: "1000px",
        //   }}
        position={position}
        src={shade1}
        alt="shade1"
        height={480}
        className="shade1 randomizedImage box"
        style={transformStyle}
      />
    </Box>
    // </UIStyledRandomBox>
  );
};

export default RandomizedImage;
