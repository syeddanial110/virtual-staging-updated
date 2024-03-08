"use client";

import { Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const UIStyledTab = styled(Tab)(({ theme }) => ({
  color: `${theme.palette.primary.greyShade3} !important`,
  "& .Mui-selected": {
    backgroundColor: "red !important",
  },
  "& .css-1nn8zwz-MuiButtonBase-root-MuiTab-root.Mui-selected": {
    color: theme.palette.primary.white,
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
}));

export const UIStyledTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.palette.primary.greyShade2,
  borderRadius: "76px",
  width: "auto",
  ".myTabs > div > div > .Mui-selected": {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: `${theme.palette.primary.white} !important`,
    // borderRadius: "67px",
  },
  ".myTabs > .MuiTabScrollButton-root > svg": {
    fill: `${theme.palette.primary.white} !important`,
    color: `${theme.palette.primary.white} !important`,
  },
}));
