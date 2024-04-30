"use client";

import UITypography from "@/components/UITypography/UITypography";
import DefaultLayout from "@/layout/default-layout";
import { Box, Grid, InputAdornment } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import ProfileForm from "@/containers/Profile/ProfileForm";
import ChangePasswordForm from "@/containers/Profile/ChangePasswordForm";
import { handleCheckToken } from "@/utlils/middlewear";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
  useLayoutEffect(() => {
    handleCheckToken();
  }, []);

  return (
    <DefaultLayout>
      <Grid container justifyContent="center" gap={3}>
        <Grid item xs={10}>
          <UITypography
            type="heading"
            title="Change password"
            textAlign="center"
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            border: `1px solid #b5b5b5`,
            borderRadius: "15px",
            padding: "10px",
          }}
        >
          <ChangePasswordForm />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default ChangePassword;
