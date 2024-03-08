import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must Contain 8 characters long"),
});

export const signupSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must Contain 8 characters long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const profileSchema = yup.object({
  name: yup.string(),
  phoneNumber: yup.string(),
  // password: yup
  //   .string()
  //   .required("Password is required")
  //   .min(8, "Password must Contain 8 characters long"),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref("password"), null], "Passwords must match")
  //   .required("Confirm Password is required"),
});
