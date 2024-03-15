import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const UICheckbox = ({ label, onChange, checked, defaultChecked, ...props }) => {
  return (
    <FormControlLabel
      onChange={onChange}
      checked={checked}
      defaultChecked={defaultChecked}
      control={<Checkbox {...props} />}
      label={label}
    />
  );
};

export default UICheckbox;
