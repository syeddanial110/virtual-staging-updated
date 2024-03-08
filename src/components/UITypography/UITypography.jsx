"use client";
import { Typography } from "@mui/material";
import React from "react";
import {
  UIDescriptionTypography,
  UIHeadingTypography,
  UIMainDescriptionTypography,
  UIMainHeadingTypography,
  UISubHeadingTypography,
} from "./ui";

const UITypography = ({ title, type, isWhite, sx, ...props }) => {
  return (
    <>
      {type == "mainHeading" ? (
        <UIMainHeadingTypography sx={sx} {...props}>
          {title}
        </UIMainHeadingTypography>
      ) : type == "heading" ? (
        <UIHeadingTypography isWhite={isWhite} sx={sx} {...props}>
          {title}
        </UIHeadingTypography>
      ) : type == "subheading" ? (
        <UISubHeadingTypography
          isWhite={isWhite}
          sx={{ ...sx }}
          {...props}
        >
          {title}
        </UISubHeadingTypography>
      ) : type == "mainDescription" ? (
        <UIMainDescriptionTypography
          isWhite={isWhite}
          sx={{ ...sx }}
          {...props}
        >
          {title}
        </UIMainDescriptionTypography>
      ) : (
        <UIDescriptionTypography isWhite={isWhite} sx={sx} {...props}>
          {title}
        </UIDescriptionTypography>
      )}
    </>
  );
};

export default UITypography;
