import React from "react";
import { UIStyledContainedField } from "./ui";

const UISimpleTextField = ({
  value,
  label,
  handleChange,
  onChange,
  name,
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
      // error={errorMessage && true}
      {...props}
    />
  );
};

export default UISimpleTextField;
