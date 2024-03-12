import { Rating } from "@mui/material";
import React from "react";

const UIRating = ({ value, setValue, ...props }) => {
  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      readOnly
      sx={{ color: (theme) => theme.palette.primary.main }}
      {...props}
    />
  );
};

export default UIRating;
