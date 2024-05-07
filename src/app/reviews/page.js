"use client";
import UITypography from "@/components/UITypography/UITypography";
import { BannerWrapper } from "@/containers/AboutUs/ui";
import DefaultLayout from "@/layout/default-layout";
import { Grid } from "@mui/material";
import React from "react";
import reviewsBanner from "../../assets/images/reviewsBanner.jpg";
import ReviewsSlider from "@/containers/Reviews/ReviewsSlider";

const Reviews = () => {
  return (
    <DefaultLayout>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <BannerWrapper bgImg={reviewsBanner} isGradient borderRadius="0px">
            <UITypography
              type="heading"
              title="Reviews"
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
          <ReviewsSlider />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Reviews;
