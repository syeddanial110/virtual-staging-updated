import UITextField from "@/components/UITextField/UITextField";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./schema";
import { Grid } from "@mui/material";
import UIButton from "@/components/UIButton/UIButton";

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      company: "",
    },
  });
  const handleContact = (data) => {
    router.push("/home");
    toast.success("Successfully Login");
  };
  return (
    <form onSubmit={handleSubmit(handleContact)}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={5}>
          <UITextField
            variant="outlined"
            control={control}
            name="firstName"
            fullWidth
            placeholder="First Name"
            errorMessage={errors?.firstName?.message}
          />
        </Grid>
        <Grid item xs={5}>
          <UITextField
            variant="outlined"
            control={control}
            name="lastName"
            fullWidth
            placeholder="Last Name"
            errorMessage={errors?.lastName?.message}
          />
        </Grid>
        <Grid item xs={5}>
          <UITextField
            variant="outlined"
            control={control}
            name="email"
            fullWidth
            placeholder="Email"
            errorMessage={errors?.email?.message}
          />
        </Grid>
        <Grid item xs={5}>
          <UITextField
            variant="outlined"
            control={control}
            name="company"
            fullWidth
            placeholder="Company"
            errorMessage={errors?.company?.message}
          />
        </Grid>
        <Grid item xs={10}>
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
        <Grid item xs={10}>
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
