"use client";

import React from "react";
import { UIStyledButton } from "./ui";

const UIButton = ({ isDark, label, variant, ...props }) => {
  return (
    <>
      {isDark ? (
        <UIStyledButton isDark={isDark} {...props}>
          {label}
        </UIStyledButton>
      ) : (
        <UIStyledButton isDark={isDark} {...props}>
          {label}
        </UIStyledButton>
      )}
    </>
  );
};

export default UIButton;
