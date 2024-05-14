"use client";

import React from "react";
import { UIStyledButton } from "./ui";

const UIButton = ({ isDark, label, variant, className, ...props }) => {
  return (
    <>
      {isDark ? (
        <UIStyledButton isDark={isDark} className={className} {...props}>
          {label}
        </UIStyledButton>
      ) : (
        <UIStyledButton isDark={isDark} className={className} {...props}>
          {label}
        </UIStyledButton>
      )}
    </>
  );
};

export default UIButton;
