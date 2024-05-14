"use client";
import UITypography from "@/components/UITypography/UITypography";
import { BannerWrapper } from "@/containers/AboutUs/ui";
import DefaultLayout from "@/layout/default-layout";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import privacyPolicyBanner from "../../assets/images/privacyPolicy.jpg";

const Policy = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <DefaultLayout>
      <Grid container justifyContent="center" gap={3}>
        <Grid item xs={12}>
          <BannerWrapper bgImg={privacyPolicyBanner} isGradient>
            <UITypography
              type="heading"
              title="Privacy Policy"
              sx={{
                color: "white",
                fontSize: "80px",
                mb: "13px",
                ml: { xs: "30px", md: "60px" },
              }}
            />
          </BannerWrapper>
        </Grid>
        <Grid item xs={11}>
          <div
            name="termly-embed"
            data-id="f9043712-e942-476e-97c2-980aeea1d7ab"
          ></div>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Policy;
