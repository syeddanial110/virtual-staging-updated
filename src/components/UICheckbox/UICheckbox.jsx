import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const UICheckbox = ({ label, onChange, checked, defaultChecked, ...props }) => {
  return (
    <FormControlLabel
      onChange={onChange}
      checked={checked}
      sx={{ alignItems: "flex-start" }}
      defaultChecked={defaultChecked}
      control={<Checkbox sx={{ padding: "0px 12px 14px 12px" }} {...props} />}
      label={label}
    />
  );
};

export default UICheckbox;
