"use client";

import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CardWrapper = styled(Box)(({ theme, img }) => ({
  backgroundImage: `url('${img.src}')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  minHeight: "60vh",
  borderRadius: "20px",
}));
