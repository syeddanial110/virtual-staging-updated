"use client";

import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CardWrapper = styled(Box)(({ theme, img }) => ({
  backgroundImage: `url('${img}')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  minHeight: "60vh",
  [theme.breakpoints.down("md")]: {
    minHeight: "40vh",
  },
  borderRadius: "12px",
  "&:hover": {
    cursor: "pointer",
  },
}));
