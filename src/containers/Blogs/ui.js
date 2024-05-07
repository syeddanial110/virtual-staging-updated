"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/system";
import blogBanner from "../../assets/images/blogBanner.jpeg";

export const BlogBanner = styled(Box)(({ theme }) => ({
  backgroundImage: `url("${blogBanner.src}")`,
  height: "60vh",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    height: "30vh",
  },
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "flex-end",
  borderBottomLeftRadius: "20px",
  borderBottomRightRadius: "20px",
}));

export const BlogWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "15px",
  minHeight: "460px",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    minHeight: "500px",
  },
  "&:hover": {
    cursor: "pointer",
  },
}));
