"use client";
import UITypography from "@/components/UITypography/UITypography";
import { BannerWrapper } from "@/containers/AboutUs/ui";
import DefaultLayout from "@/layout/default-layout";
import { Grid } from "@mui/material";
import React from "react";
import virtualStagingImg from "../../../assets/images/virtualStagingBanner.jpg";
import UIButton from "@/components/UIButton/UIButton";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { pathLocations } from "@/utlils/pathLocations";
import { addOrderData } from "@/store/orderPlaceSlice";

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleServiceRedirect = () => {
    const dataObj = {
      serviceName: "Virtual Staging",
      servicePrice: "24",
    };
    dispatch(addOrderData(dataObj));
    router.push(pathLocations.placeOrder);
  };
  return (
    <DefaultLayout>
      <Grid container justifyContent="center" gap={3} my={3}>
        <Grid item xs={11}>
          <BannerWrapper bgImg={virtualStagingImg}>
            <UITypography
              type="mainHeading"
              title="Virtual Staging"
              sx={{
                color: "white",
                fontSize: { xs: "40px", md: "60px !important" },
                fontWeight: "regular",
                mb: "13px",
                ml: { xs: "30px", md: "60px" },
              }}
            />
          </BannerWrapper>
        </Grid>
        <Grid item xs={11}>
          <UITypography
            type="description"
            title={`Welcome to our virtual staging service! Transform your empty spaces into visually stunning masterpieces with our professional virtual staging solutions. For just $24 per image, we can enhance your photos to showcase the true potential of your property.`}
          />
        </Grid>
        <Grid item xs={11}>
          <UITypography
            type="description"
            title={`Our highly skilled team of designers use state-of-the-art technology to digitally furnish and decorate your empty rooms, creating inviting and realistic visuals. Whether you are a real estate agent looking to attract potential buyers or a homeowner wanting to showcase the possibilities of your space, our virtual staging service is the perfect solution.`}
          />
        </Grid>
        <Grid item xs={11}>
          <UITypography
            type="description"
            title={
              "By leveraging our expertise, you can save time and money compared to traditional staging methods. No need to spend hours moving furniture or investing in expensive rentals. With virtual staging, your property will stand out from the competition, capturing the attention of potential buyers and helping you sell faster."
            }
          />
        </Grid>
        <Grid item xs={11}>
          <UITypography
            type="description"
            title={`Don't miss out on the opportunity to make a lasting impression. Contact us today to get started with our affordable and professional virtual staging service.`}
          />
        </Grid>
        <Grid item xs={11}>
          <UIButton
            variant="contained"
            label="Order now"
            onClick={handleServiceRedirect}
          />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Index;
