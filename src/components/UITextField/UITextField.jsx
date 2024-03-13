import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormHelperText, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  UIStyledOutlinedField,
  CountryListWrapper,
  StyledDatePicker,
  UIStyledNewsLetterField,
  UIStyledContainedField,
} from "./ui";

const UITextField = ({
  name,
  type,
  label,
  value,
  control,
  variant,
  errorMessage,
  handleChange,
  isOtp,
  isNewsLetter,
  ...rest
}) => {
  const { control: fallbackControl } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  return variant == "outlined" && type !== "password" ? (
    <>
      <Controller
        name={name}
        control={control == null ? fallbackControl : control}
        render={({ field }) => (
          <>
            <UIStyledOutlinedField
              type={type}
              variant="outlined"
              label={label}
              value={value}
              className="bg-transparent"
              onChange={handleChange}
              error={errorMessage && true}
              // InputLabelProps={{ shrink: true }}

              {...rest}
              {...field}
            />
          </>
        )}
      />
      {errorMessage && (
        <FormHelperText
          sx={{ color: (theme) => theme.palette.secondary.error }}
        >
          {errorMessage}
        </FormHelperText>
      )}
    </>
  ) : variant == "outlined" && type === "password" ? (
    <>
      <Controller
        name={name}
        error={errorMessage && true}
        control={control == null ? fallbackControl : control}
        render={({ field }) => (
          <>
            <UIStyledOutlinedField
              type={showPassword ? "text" : "password"}
              variant="outlined"
              error={errorMessage && true}
              label={label}
              value={value}
              className="bg-transparent "
              onChange={handleChange}
              // InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      sx={{ padding: "10px !important" }}
                    >
                      {!showPassword ? (
                        <VisibilityOff
                          sx={{ color: (theme) => theme.palette.primary.grey6 }}
                        />
                      ) : (
                        <Visibility
                          sx={{ color: (theme) => theme.palette.primary.grey6 }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...field}
              {...rest}
            />
          </>
        )}
      />
      {errorMessage && (
        <FormHelperText
          sx={{ color: (theme) => theme.palette.secondary.error }}
        >
          {errorMessage}
        </FormHelperText>
      )}
    </>
  ) : type == "password" ? (
    <>
      <Controller
        name={name}
        error={errorMessage && true}
        control={control == null ? fallbackControl : control}
        render={({ field }) => (
          <>
            <UIStyledContainedField
              type={showPassword ? "text" : "password"}
              variant={variant}
              error={errorMessage && true}
              // helperText={errorMessage}
              label={label}
              value={value}
              className=" bg-transparent "
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? (
                        <VisibilityOff
                          sx={(theme) => ({
                            color: theme.palette.primary.main,
                          })}
                        />
                      ) : (
                        <Visibility
                          sx={(theme) => ({
                            color: theme.palette.primary.main,
                          })}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...field}
              {...rest}
            />
          </>
        )}
      />
      {errorMessage && (
        <FormHelperText
          sx={{ color: (theme) => theme.palette.secondary.error }}
        >
          {errorMessage}
        </FormHelperText>
      )}
    </>
  ) : (
    (variant = "contained" ? (
      <>
        <Controller
          name={name}
          control={control == null ? fallbackControl : control}
          render={({ field }) => (
            <>
              <UIStyledContainedField
                type={type}
                variant="outlined"
                label={label}
                value={value}
                className="bg-transparent"
                onChange={handleChange}
                error={errorMessage && true}
                // InputLabelProps={{ shrink: true }}

                {...rest}
                {...field}
              />
            </>
          )}
        />
        {errorMessage && (
          <FormHelperText
            sx={{ color: (theme) => theme.palette.secondary.error }}
          >
            {errorMessage}
          </FormHelperText>
        )}
      </>
    ) : variant == "simpleContained" ? (
      <UIStyledContainedField
        // type={type}
        value={value}
        variant="outlined"
        label={label}
        // onChange={handleChange}
        // error={errorMessage && true}
        {...rest}
      />
    ) : (
      <>
        <UIStyledOutlinedField
          type={type}
          variant="outlined"
          label={label}
          value={value}
          name={name}
          onChange={handleChange}
          error={errorMessage && true}
          {...rest}
        />
        {errorMessage && (
          <FormHelperText
            sx={{ color: (theme) => theme.palette.secondary.error }}
          >
            {errorMessage}
          </FormHelperText>
        )}
      </>
    ))
  );
};
// UITextField.propTypes = {
//   name: PropTypes.string,
//   label: PropTypes.string,
//   value: PropTypes.string,
//   control: PropTypes.object,
//   handleChange: PropTypes.func,
//   errorMessage: PropTypes.string,
//   type: PropTypes.oneOf(["text", "number", "password"]),
//   variant: PropTypes.oneOf(["outlined"]),
//   isOtp: PropTypes.bool,
// };
// UITextField.defaultProps = {
//   type: "text",
//   name: "fallback",
//   variant: "outlined",
// };
export default UITextField;
