"use client";

import UIButton from "@/components/UIButton/UIButton";
import UITypography from "@/components/UITypography/UITypography";
import { BannerWrapper } from "@/containers/AboutUs/ui";
import DefaultLayout from "@/layout/default-layout";
import { Grid } from "@mui/material";
import React from "react";
import virtualTwilightImg from "../../../assets/images/virtualTwilightBanner.jpg";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOrderData } from "@/store/orderPlaceSlice";
import { pathLocations } from "@/utlils/pathLocations";
import virtualTwilightGif2 from "../../../assets/images/virtualTwilightGif2.gif";
import Image from "next/image";

const VirtualTwilights = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleServiceRedirect = () => {
    const dataObj = {
      serviceName: "Virtual Twilights",
      servicePrice: "15",
    };
    dispatch(addOrderData(dataObj));
    router.push(pathLocations.placeOrder);
  };
  return (
    <DefaultLayout>
      <Grid container justifyContent="center" gap={3} mb={3}>
        <Grid item xs={12}>
          <BannerWrapper bgImg={virtualTwilightImg} borderRadius="0px">
            <UITypography
              type="mainHeading"
              title="Virtual Twilights"
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
        <Grid item xs={5.5} display="flex" alignItems="center">
          <Grid container gap={3}>
            <Grid item xs={12}>
              <UITypography
                type="description"
                title={`Looking to sell your real estate listing? Stand out from the crowd with virtual twilights for just $15 per image! In today's competitive housing market, catching a buyer's attention is crucial. With countless listings to scroll through, you need something extraordinary to make yours shine. Enter virtual twilights.`}
              />
            </Grid>
            <Grid item xs={12}>
              <UITypography
                type="description"
                title={`Not only are they breathtakingly beautiful, but they also possess the power to captivate any viewer. These stunning images make your listing pop and give your sellers a unique advantage. Stand apart from the competition and ensure your property gets noticed with virtual twilights. Don't miss out on the opportunity to make a lasting impression. Upgrade your real estate game today!`}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={5} mt={5}>
          <Image
            src={virtualTwilightGif2}
            style={{ height: "100%", width: "100%" }}
          />
        </Grid>
        <Grid item xs={11}>
          <Grid container justifyContent={{ xs: "center", md: "flex-start" }}>
            <Grid item xs={9} md={4} lg={2}>
              <UIButton
                variant="contained"
                label="Order now"
                fullWidth
                onClick={handleServiceRedirect}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default VirtualTwilights;
