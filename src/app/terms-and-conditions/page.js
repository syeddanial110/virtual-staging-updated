"use client";
import UITypography from "@/components/UITypography/UITypography";
import { BannerWrapper } from "@/containers/AboutUs/ui";
import DefaultLayout from "@/layout/default-layout";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import termsAndCondition from "../../assets/images/termsCondition.jpg";

const TermsAndPolicy = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <DefaultLayout>
      <Grid container justifyContent="center">
        <Grid item xs={11}>
          <BannerWrapper bgImg={termsAndCondition} isGradient>
            <UITypography
              type="heading"
              title="Privacy and Policy"
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
            data-id="6c0bb56d-fc43-4bf3-bbdf-a6114b61d638"
          ></div>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default TermsAndPolicy;
