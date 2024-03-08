import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const UICheckbox = ({ label, onChange, checked, ...props }) => {
  return (
    <FormControlLabel
      onChange={onChange}
      checked={checked}
      control={<Checkbox {...props} />}
      label={label}
    />
  );
};

export default UICheckbox;
