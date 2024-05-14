"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Box, Button, Grid, Stack } from "@mui/material";
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import Image from "next/image";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const TestimonialSlider = ({ arr }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { lg: "500px", xl: "400px", xxl: "450px" },
        my: 5,
      }}
    >
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        //   navigation={true}
        modules={[Pagination, Navigation]}
        navigation={{ nextEl: ".nextBtn", prevEl: ".prevBtn" }}
        // navigationComponent={{
        //   prevEl: <CustomPrevButton />,
        //   nextEl: <CustomNextButton />,
        // }}
        // onBeforeInit={(swiper) => {
        //   swiper.params.navigation.prevEl = navigationPrevRef.current;
        //   swiper.params.navigation.nextEl = navigationNextRef.current;
        // }}
        className="testimonialSliderSwiper"
        slidesPerView={3}
        spaceBetween={5}
        // centeredSlides={true}
        loopedSlides={1}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {arr.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Grid container justifyContent="space-around">
                <Grid item xs={11}>
                  <TestimonialCard
                    imageUrl={item.image}
                    heading={item.name}
                    authorName={item.date}
                    description={item.description}
                    ratingVal={item.rating}
                  />
                </Grid>
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Box
        // ref={navigationPrevRef}
        className="prevBtn"
        sx={{
          position: "absolute",
          bottom: -12,
          left: { xs: "38%", sm: "41%", md: "45%", lg: "48%" },
          zIndex: 9999,
        }}
        // onClick={() => swiper?.slideNext()}
      >
        <FiberManualRecordIcon
          sx={{ color: (theme) => theme.palette.primary.greyShade1 }}
          fontSize="small"
        />
      </Box>
      <Box
        // ref={navigationNextRef}
        className="nextBtn"
        sx={{
          position: "absolute",
          bottom: -12,
          left: { xs: "60%", sm: "59%", md: "58%", lg: "56%" },
          zIndex: 9999,
        }}
      >
        <FiberManualRecordIcon
          fontSize="small"
          sx={{ color: (theme) => theme.palette.primary.greyShade1 }}
        />
      </Box>
    </Box>
  );
};

export default TestimonialSlider;
