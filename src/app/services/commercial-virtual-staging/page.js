"use client";

import UIButton from "@/components/UIButton/UIButton";
import UITypography from "@/components/UITypography/UITypography";
import { BannerWrapper } from "@/containers/AboutUs/ui";
import DefaultLayout from "@/layout/default-layout";
import { Grid } from "@mui/material";
import React from "react";
import commercialStagingImg from "../../../assets/images/comercialStagingBanner.jpg";
import { addOrderData } from "@/store/orderPlaceSlice";
import { pathLocations } from "@/utlils/pathLocations";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import commercialVirtualStagingGif from "../../../assets/images/commercialVirtualStaginGif2.gif";

const CommercialVirtualStaging = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleServiceRedirect = () => {
    const dataObj = {
      serviceName: "Commercial Virtual Staging",
      servicePrice: "75",
    };
    dispatch(addOrderData(dataObj));
    router.push(pathLocations.placeOrder);
  };

  return (
    <DefaultLayout>
      <Grid container justifyContent="center" gap={3} mb={3}>
        <Grid item xs={12}>
          <BannerWrapper
            bgImg={commercialStagingImg}
            isGradient={true}
            borderRadius="0px"
          >
            <UITypography
              type="mainHeading"
              title="Commercial Virtual Staging"
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
        <Grid item xs={11} md={5.5} display="flex" alignItems="center">
          <Grid container gap={3}>
            <Grid item xs={12}>
              <UITypography
                type="description"
                title={`Create stunning virtual staging for your commercial spaces with our affordable and professional service. For just $75 per image, our expert team will transform your empty interiors into visually captivating and fully furnished environments. Whether you're a real estate agent, an interior designer, or a property developer, virtual staging is the perfect solution to showcase your commercial properties and attract potential buyers or tenants.`}
              />
            </Grid>
            <Grid item xs={12}>
              <UITypography
                type="description"
                title={`Our highly skilled designers use advanced software to place realistic-looking furniture, artwork, and decor elements into your photos, giving an accurate representation of the potential of the space.`}
              />
            </Grid>
            <Grid item xs={12}>
              <UITypography
                type="description"
                title={`With our cost-effective virtual staging service, you can save time and money by avoiding the hassle of physically staging a property. Boost your marketing efforts and enhance your listing presentation with our commercial virtual staging services today!`}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={11} md={5} mt={5}>
          <Image
            src={commercialVirtualStagingGif}
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
                className="pulse"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default CommercialVirtualStaging;
