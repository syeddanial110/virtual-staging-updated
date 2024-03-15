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
  borderRadius: "35px",
}));

export const BlogWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "35px",
  minHeight: "460px",
  [theme.breakpoints.down("md")]: {
    minHeight: "500px",
  },
  "&:hover": {
    cursor: "pointer",
  },
}));
