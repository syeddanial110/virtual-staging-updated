import UITextField from "@/components/UITextField/UITextField";
import UITypography from "@/components/UITypography/UITypography";
import { Grid, InputAdornment } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { changePasswordSchema, profileSchema } from "@/schema/schema";
import UIPhoneTextField from "@/components/UIPhoneTextField/UIPhoneTextField";
import UIButton from "@/components/UIButton/UIButton";
import { useSelector } from "react-redux";
import { apiPost } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import { getUserId } from "@/auth/Auth";
import { toast } from "react-toastify";

const ChangePasswordForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const handleChangePassword = (data) => {

    const id = getUserId();
    const dataobj = {
      password: data.newPassword,
    };
    apiPost(
      `${ApiEndpoints.updatePassword}${id}`,
      dataobj,
      (res) => {
        toast.success(res.message);
        reset();
      },
      (err) => {
      }
    );
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={8}>
        <form onSubmit={handleSubmit(handleChangePassword)}>
          <Grid container gap={2}>
            <Grid item xs={10}>
              <UITypography
                title="Old Password:"
                sx={{
                  color: (theme) => theme.palette.primary.greyShade4,
                  my: 1,
                }}
              />
              <UITextField
                type="password"
                placeholder="Type your old password"
                control={control}
                name="oldPassword"
                fullWidth
                errorMessage={errors?.oldPassword?.message}
                autoFocus={false}
              />
            </Grid>
            <Grid item xs={10}>
              <UITypography
                title="New Password:"
                sx={{
                  color: (theme) => theme.palette.primary.greyShade4,
                  my: 1,
                }}
              />
              <UITextField
                type="password"
                placeholder="Type your new password"
                control={control}
                name="newPassword"
                fullWidth
                errorMessage={errors?.newPassword?.message}
                autoFocus={false}
              />
            </Grid>
            <Grid item xs={10}>
              <UITypography
                title="Confirm Password:"
                sx={{
                  color: (theme) => theme.palette.primary.greyShade4,
                  my: 1,
                }}
              />
              <UITextField
                type="password"
                placeholder="Type your new password"
                control={control}
                name="confirmPassword"
                fullWidth
                errorMessage={errors?.confirmPassword?.message}
                autoFocus={false}
              />
            </Grid>
            <Grid item xs={10} mt={2}>
              <UIButton variant="contained" label="Save" type="submit" />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ChangePasswordForm;
