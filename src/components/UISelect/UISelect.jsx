import React from "react";
import { UIStyledSelect } from "./ui";

const UISelect = ({ value, onChange, children, defaultValue, ...props }) => {
  return (
    <UIStyledSelect
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label=""
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      {...props}
    >
      {/* <MenuItem value={"Browse Animals"}>Browse Animals</MenuItem> */}
      {children}
    </UIStyledSelect>
  );
};

export default UISelect;
