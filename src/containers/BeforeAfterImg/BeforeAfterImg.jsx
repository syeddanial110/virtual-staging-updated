"use client";
import React from "react";
// import beforeImg from "../../assets/images/services/commercialReno/Commercial Reno 1 Before.jpg";
// import afterImg from "../../assets/images/services/commercialReno/Commercial Reno 1 after.jpg";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const BeforeAfterImg = ({ beforeImg, afterImg }) => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ width: "100%" }}>
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={beforeImg.src}
              alt="Image one"
              style={{
                objectFit: "cover",
                height: "100%",
                borderRadius: "20px",
                height: "455px",
                width: "3750px",
              }}
              className="beforeAfterSlider"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={afterImg.src}
              alt="Image two"
              style={{
                objectFit: "cover",
                height: "100%",
                borderRadius: "20px",
                height: "455px",
                width: "3750px",
              }}
            />
          }
          style={{ width: "100%", height: "50%" }}
          changePositionOnHover={true}
        />
      </div>
      <div style={{ position: "absolute", top: "15%", left: 10, zIndex: 9999 }}>
        <p
          style={{
            backgroundColor: "#F3F1F2",
            padding: "10px 20px",
            borderRadius: "20px",
            fontSize: "10px",
          }}
        >
          Before
        </p>
      </div>
      <div
        style={{ position: "absolute", top: "15%", right: 10, zIndex: 9999 }}
      >
        <p
          style={{
            backgroundColor: "#F3F1F2",
            padding: "10px 20px",
            borderRadius: "20px",
            fontSize: "10px",
          }}
        >
          After
        </p>
      </div>
    </div>
  );
};

export default BeforeAfterImg;
