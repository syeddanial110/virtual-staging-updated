"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

export const UIStyledMovingImage = styled(Image)(({ theme, position }) => ({
    position: position
//   "@keyframes pulsate": {
//     "0%": {
//       top: position.top,
//       right: position.right,
//     },
//     "25%": {
//       top: position.top,
//       right: position.right,
//     },
//     "50%": {
//       top: position.top,
//       right: position.right,
//     },
//     "75%": {
//       top: position.top,
//       right: position.right,
//     },
//     "100%": {
//       top: position.top,
//       right: position.right,
//     },
//   },
//   animation: "pulsate 1s infinite ease",
}));
