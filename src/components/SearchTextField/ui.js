"use client";

import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const UIStyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.primary.white,
  borderRadius: "62px",

  "& > div": {
    paddingRight: "0px",
  },
  "& > div > input": {
    paddingTop: "11px",
    paddingBottom: "11px",
  },

  "& > div > fieldset": {
    border: "0px solid red",
  },
  "& > div > fieldset:focus-visible": {
    outline: "none",
  },
  "&:focus-visible": {
    outline: "none",
  },
  "& > .MuiInputBase-root:focus-visible": {
    outline: "none",
  },
  "& > .Mui-focused": {
    "& > fieldset": {
      border: "0px solid red !important",
    },
  },
}));

export const UIStyledSearchButton = styled(Button)(({ theme }) => ({
  height: "100%",
  borderRadius: "60px !important",
  padding: "7px 39px",
  textTransform: "capitalize",
}));
