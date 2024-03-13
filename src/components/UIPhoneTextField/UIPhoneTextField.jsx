import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { CountryListWrapper } from "./ui";

const UIPhoneTextField = ({ value, onChange, ...props }) => {
  return (
    <CountryListWrapper>
      <PhoneInput
        country={"us"}
        value={value}
        onChange={onChange}
        enableSearch={false}
        onlyCountries={["us"]}
        specialLabel=""
        {...props}
        inputStyle={{ borderRadius: "16px", width: "100%" }}
      />
    </CountryListWrapper>
  );
};

export default UIPhoneTextField;
