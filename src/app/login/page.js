"use client";

import UITypography from "@/components/UITypography/UITypography";
import { FormWrapper, LoginWrapper } from "@/containers/Login/ui";
import { Grid, InputAdornment } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import UITextField from "@/components/UITextField/UITextField";
import UIButton from "@/components/UIButton/UIButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schema/schema";
import { useRouter } from "next/navigation";
import { pathLocations } from "@/utlils/pathLocations";
import { apiPost } from "../../auth/ApiRequest";
import { ApiEndpoints } from "../../auth/apiEndpoints";
import { toast } from "react-toastify";
import { setToken, setUserId } from "@/auth/Auth";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const router = useRouter();

  const handleLogin = async (data) => {
    const dataObj = {
      email: data.email,
      password: data.password,
    };
    apiPost(
      `${ApiEndpoints.login}`,
      dataObj,
      (res) => {
        setToken(res.token);
        setUserId(res?.user?.id);
        toast.success("Successfully login");
        window.location.href = pathLocations.home;
        // router.push(pathLocations.home);
      },
      (err) => {
        toast.error(err?.response?.data?.error);
      }
    );
  };
  return (
    <LoginWrapper>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={11} sm={8} md={5.5}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <FormWrapper>
              <Grid container gap={4} justifyContent="center">
                <Grid item xs={12}>
                  <UITypography
                    type="heading"
                    title="Login"
                    textAlign="center"
                    sx={{ color: "white" }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <UITypography
                    title="Enter email:"
                    sx={{ color: (theme) => theme.palette.primary.greyShade7 }}
                  />
                  <UITextField
                    variant="outlined"
                    placeholder="Type your email"
                    control={control}
                    name="email"
                    fullWidth
                    sx={{ "& > div > input": { color: "black !important" } }}
                    errorMessage={errors?.email?.message}
                    autoFocus={false}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <UITypography
                    title="Enter Password:"
                    sx={{ color: (theme) => theme.palette.primary.greyShade7 }}
                  />
                  <UITextField
                    variant="outlined"
                    type="password"
                    placeholder="******"
                    control={control}
                    sx={{ "& > div > input": { color: "black !important" } }}
                    name="password"
                    fullWidth
                    errorMessage={errors?.password?.message}
                  />
                  <UITypography
                    title="Create an account?"
                    sx={{
                      color: (theme) => theme.palette.primary.greyShade7,
                      mt: 1,
                      textDecoration: "underline",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    textAlign="end"
                    onClick={() => router.push(pathLocations.signup)}
                  />
                </Grid>

                <Grid item xs={6} display="flex" justifyContent="center">
                  <UIButton
                    btnType="simple"
                    variant="contained"
                    label="Sign in"
                    type="submit"
                  />
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="center">
                  {/* <UITypography
                    title="Continue as guest?"
                    sx={{
                      color: (theme) => theme.palette.primary.greyShade7,
                      mt: 1,
                      textDecoration: "underline",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    textAlign="end"
                    onClick={() => router.push(pathLocations.home)}
                  /> */}
                </Grid>
              </Grid>
            </FormWrapper>
          </form>
        </Grid>
      </Grid>
    </LoginWrapper>
  );
};

export default Login;
