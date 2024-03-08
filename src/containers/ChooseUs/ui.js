"use client";

import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import chooseBanner from "../../assets/images/chooseUsBanner.png";

export const ChooseWrapper = styled(Box)(({ theme, isDark }) => ({
  backgroundImage: `url('${chooseBanner.src}')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "30vh",
  width: "100%",
}));


