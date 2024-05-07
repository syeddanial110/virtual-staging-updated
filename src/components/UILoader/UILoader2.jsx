import React from "react";
import Lottie from "lottie-react";
import loaderAnim from "../../assets/animation/chris-loader-2.json";
import { Box } from "@mui/material";

const UILoader2 = () => {
  return (
    <Box display="flex" justifyContent="center">
      <div
        style={{
          width: "60%",
        }}
      >
        <Lottie animationData={loaderAnim} loop={true} />
      </div>
    </Box>
  );
};

export default UILoader2;
