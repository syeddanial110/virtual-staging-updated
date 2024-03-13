"use client";

import HeroSection from "@/containers/HeroSection/HeroSection";
import TabSection from "@/containers/TabSection/TabSection";
import LatestCollection from "@/containers/LatestCollection/LatestCollection";
import StepProcess from "@/containers/StepProcess/StepProcess";
import Testimonial from "@/containers/Testimonial/Testimonial";
import DefaultLayout from "@/layout/default-layout";
import BeforeAfterImg from "@/containers/BeforeAfterImg/BeforeAfterImg";
import ReviewsSlider from "@/containers/Reviews/ReviewsSlider";
import { Grid } from "@mui/material";

export default function Home() {
  // useEffect(() => {
  //   const getRandomValue = (min, max) =>
  //     Math.floor(Math.random() * (max - min + 1)) + min;

  //   const initialTop = `${getRandomValue(0, window.innerHeight)}px`;
  //   const initialRight = `${getRandomValue(0, window.innerWidth)}px`;

  //   document.documentElement.style.setProperty("--initial-top", initialTop);
  //   document.documentElement.style.setProperty("--initial-right", initialRight);
  // }, []);

  return (
    <>
      {/* <Box sx={{ position: "relative" }}> */}
      {/* <Header /> */}
      <DefaultLayout>
        <HeroSection />

        {/* <VirtualSection /> */}
        <TabSection />
        {/* <ChooseUsSection /> */}
        <LatestCollection />
        <StepProcess />
        <Testimonial />
        {/* <Grid container justifyContent="center">
          <Grid item xs={11}>
            <ReviewsSlider />
          </Grid>
        </Grid> */}
      </DefaultLayout>
      {/* <Footer /> */}
      {/* <RandomizedImage /> */}
      {/* </Box> */}
    </>
  );
}
