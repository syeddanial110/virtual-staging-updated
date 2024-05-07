"use client";

import { Avatar, Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

export const UIStyledButton = styled(Button)(({ theme, isDark }) => ({
  backgroundColor: isDark
    ? theme.palette.primary.main
    : theme.palette.primary.greenShade1,
  color: theme.palette.primary.white,
  borderRadius: "26px",
  fontSize: "16px",
  padding: "10px 30px",
  "&:hover": {
    backgroundColor: theme.palette.primary.greyShade1,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

export const Input = styled("input")({
  display: "none",
});

export const UIStyledInputButton = styled(Button)(({ theme, data }) => ({
  // width: "100%",
  border: "0px solid grey",
  borderRadius: "50%",
  justifyContent: "flex-start",
  "& :hover::after": {
    opacity: 0.75,
  },
  "&::after": {
    content: "''",
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    opacity: 1,
    // backgroundImage: `url('${data}')`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },

  "&:hover::after": {
    opacity: "0.65 !important",
  },
  "&:hover": {
    background: "transparent",
    opacity: "1 !important",
    "& > :first-child": {
      zIndex: 1,
    },
  },
  "& > span:focus-visible": {
    outline: "transparent",
  },
}));

export const UILoadingBox = styled(Box)(({ theme, data }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 100,
  height: 100,
}));

export const UIFileImg = styled(Image)(({ theme, data }) => ({
  objectFit: "cover",
  borderRadius: "50%",
  height: 100,
  width: 100,
}));

export const UIBoxInput = styled(Box)(({ theme, data }) => ({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  bottom: 0,
  right: 10,
}));

export const FileAvatar = styled(Avatar)(({ theme, data }) => ({
  height: 100,
  width: 100,
}));

export const UIFileMainBox = styled(Box)(({ theme, data }) => ({
  position: "relative",
  height: 100,
  width: 100,
}));
