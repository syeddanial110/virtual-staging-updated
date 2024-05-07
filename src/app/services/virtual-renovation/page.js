"use client";

import { BannerWrapper } from "@/containers/AboutUs/ui";
import DefaultLayout from "@/layout/default-layout";
import React from "react";
import virtualRenovationImg from "../../../assets/images/virtualRenovationBanner.jpg";
import UITypography from "@/components/UITypography/UITypography";
import { Grid } from "@mui/material";
import UIButton from "@/components/UIButton/UIButton";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOrderData } from "@/store/orderPlaceSlice";
import { pathLocations } from "@/utlils/pathLocations";
import Image from "next/image";
import virtualRenovationGif from "../../../assets/images/virtualRenovationGif.gif";

const VirtualRenovation = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleServiceRedirect = () => {
    const dataObj = {
      serviceName: "Virtual Renovation",
      servicePrice: "69",
    };
    dispatch(addOrderData(dataObj));
    router.push(pathLocations.placeOrder);
  };
  return (
    <DefaultLayout>
      <Grid container justifyContent="center" gap={5} mb={3}>
        <Grid item xs={12}>
          <BannerWrapper bgImg={virtualRenovationImg}  borderRadius="0px">
            <UITypography
              type="mainHeading"
              title="Virtual Renovation"
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
                title={`Introducing our virtual renovation services at an unbeatable price of just $69 per image! Enhance your property's selling potential by offering potential buyers a fresh perspective on outdated kitchens, bathrooms, and unfinished lower levels. With our advanced technology, we can help reimagine these spaces, giving them a modern and appealing makeover that will captivate your audience.`}
              />
            </Grid>
            <Grid item xs={12}>
              <UITypography
                type="description"
                title={`Our experienced team of designers will seamlessly add patios and decks to unfinished outdoor areas, transforming them into inviting spaces for relaxation and entertainment. Utilizing state-of-the-art virtual rendering, we ensure utmost accuracy and attention to detail in every image, allowing interested buyers to visualize the full potential of your property.`}
              />
            </Grid>
            <Grid item xs={12}>
              <UITypography
                type="description"
                title={`Don't let outdated or unfinished spaces deter potential buyers. Let our virtual renovation services bring new life and excitement to your listing, helping you sell faster and at a higher price. Contact us today to take advantage of this incredible opportunity to transform your property into a buyer's dream!`}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5} mt={5}>
          <Image
            src={virtualRenovationGif}
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

export default VirtualRenovation;
