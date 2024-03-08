import * as yup from "yup";

export const step1Schema = yup.object({
  name: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  email: yup.string().required("Password is required"),
});