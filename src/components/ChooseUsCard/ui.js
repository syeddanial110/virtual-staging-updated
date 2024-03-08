"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/system";
import cardBg from "../../assets/images/cardBg.png";

export const ChooseUsCardWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "rgb(23, 22, 21) !important",
  // border: '4px solid transparent',
  // borderImage: `url("${cardBg.src}") 21 stretch`,
  // margin: "20px 15px",
  height: "100%",
  maxHeight: '-webkit-fill-available',
  borderRadius: "20px",
  // width: "100%",
}));

export const GradientCardWrapper = styled(Box)(({ theme }) => ({
  background: "rgb(99,165,177)",
  background:
    "linear-gradient(221deg, rgba(99,165,177,1) 0%, rgba(191,178,161,1) 35%, rgba(60,130,142,1) 100%)",
  height: "100%",
  // width: "100%",
  padding: "4px",
  borderRadius: "20px",
}));
