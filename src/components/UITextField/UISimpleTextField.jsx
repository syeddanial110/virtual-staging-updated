import React from "react";
import { UIStyledContainedField } from "./ui";

const UISimpleTextField = ({
  value,
  label,
  handleChange,
  onChange,
  name,
  fullWidth,
  ...props
}) => {
  return (
    <UIStyledContainedField
      // type={type}
      value={value}
      variant="outlined"
      label={label}
      onChange={onChange}
      name={name}
      fullWidth={fullWidth}
      // error={errorMessage && true}
      {...props}
    />
  );
};

export default UISimpleTextField;
