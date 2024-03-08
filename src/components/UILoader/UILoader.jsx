import React from "react";
import Lottie from "lottie-react";
import loaderAnim from "../../assets/animation/chris-loader.json";
import { Box } from "@mui/material";

const UILoader = () => {
  return (
    <Box display="flex" justifyContent="center">
      <div
        style={{
          width: "20%",
        }}
      >
        <Lottie animationData={loaderAnim} loop={true} />
      </div>
    </Box>
  );
};

export default UILoader;
