import UITextField from "@/components/UITextField/UITextField";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./schema";
import { Grid } from "@mui/material";
import UIButton from "@/components/UIButton/UIButton";
import { toast } from "react-toastify";
import { apiPost } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      subject: "",
    },
  });
  const handleContact = (data) => {
    // router.push("/home");
    const dataObj = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };
    apiPost(
      `${ApiEndpoints.contactForm}`,
      dataObj,
      (res) => {
        reset();
        toast.success("Your email has been sent successfully");
      },
      (err) => {
        console.log("err", err);
      }
    );

    // setInterval(() => {
    //   location.reload();
    // }, 2000);
  };
  return (
    <form onSubmit={handleSubmit(handleContact)}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={11} md={5}>
          <UITextField
            variant="outlined"
            control={control}
            name="firstName"
            fullWidth
            placeholder="First Name"
            errorMessage={errors?.firstName?.message}
          />
        </Grid>
        <Grid item xs={11} md={5}>
          <UITextField
            variant="outlined"
            control={control}
            name="lastName"
            fullWidth
            placeholder="Last Name"
            errorMessage={errors?.lastName?.message}
          />
        </Grid>
        <Grid item xs={11} md={5}>
          <UITextField
            variant="outlined"
            control={control}
            name="email"
            fullWidth
            placeholder="Email"
            errorMessage={errors?.email?.message}
          />
        </Grid>
        <Grid item xs={11} md={5}>
          <UITextField
            variant="outlined"
            control={control}
            name="subject"
            fullWidth
            placeholder="Subject"
            errorMessage={errors?.subject?.message}
          />
        </Grid>
        <Grid item xs={11} md={10}>
          <UITextField
            variant="outlined"
            control={control}
            name="message"
            fullWidth
            placeholder="Message"
            errorMessage={errors?.message?.message}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={11} md={10}>
          <UIButton
            variant="contained"
            label="Submit"
            type="submit"
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
