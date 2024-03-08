import * as yup from "yup";

export const contactSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  company: yup.string().required("Company is required"),
  message: yup.string().required("Message is required"),
});
