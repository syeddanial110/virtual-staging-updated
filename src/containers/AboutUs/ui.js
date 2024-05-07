"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const BannerWrapper = styled(Box)(
  ({ theme, bgImg, isGradient, borderRadius }) => ({
    backgroundImage: isGradient
      ? `linear-gradient(to bottom, rgb(245 246 252 / 0%), rgb(0 0 0 / 0%)), url("${bgImg.src}")`
      : `url("${bgImg.src}")`,

    height: "60vh",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "30vh",
      backgroundImage: isGradient
        ? `linear-gradient(to bottom, rgb(245 246 252 / 0%), rgb(0 0 0 / 30%)), url("${bgImg.src}")`
        : `url("${bgImg.src}")`,
    },
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "flex-end",
    borderRadius: borderRadius ? borderRadius : "35px",
    // background: 'rgba(0,0,0,0.4)',
  })
);

export const AboutUsCardWrapper = styled(Box)(({ theme, isDark }) => ({
  backgroundColor: "white",
  paddingTop: "50px",
  paddingRight: "35px",
  paddingLeft: "35px",
  padding: "30px",
  // width: "100%",
  borderRadius: "35px",
}));
