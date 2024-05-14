import { Rating } from "@mui/material";
import React from "react";

const UIRating = ({ value, onChange, readOnly, ...props }) => {
  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      sx={{ color: (theme) => theme.palette.primary.main }}
      {...props}
    />
  );
};

export default UIRating;
