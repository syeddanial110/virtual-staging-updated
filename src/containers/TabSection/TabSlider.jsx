"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import SliderBox from "./SliderBox";
import beforeImg from "../../assets/images/before.png";
import afterImg from "../../assets/images/after.png";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";

const TabSlider = ({ item }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Swiper
        // effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        pagination={false}
        modules={[Navigation]}
        navigation={{ nextEl: ".nextBtn", prevEl: ".prevBtn" }}
        className="tabSwiper"
        // spaceBetween={10}
        // breakpoints={{
        //   200: {
        //     slidesPerView: 1,
        //   },
        //   700: {
        //     slidesPerView: 1,
        //   },
        //   1100: {
        //     slidesPerView: 3,
        //   },
        // }}
      >
        {item.imagesArr.map((elm, i) => {
          return (
            <SwiperSlide>
              <SliderBox
                afterImg={elm.afterImg}
                beforeImg={elm.beforeImg}
                price={elm.price}
                title={elm.title}
                // height={"450px"}
              />
              {/* <Image
                src={elm.beforeImg}
                alt="beforeImg"
                className="inActiveBefore"
                height={250}
                style={{ width: "80% !important" }}
              /> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Box
        sx={{
          // width: "100%",
          position: "absolute",
          left: { xs: 60, sm: 60, lg: 80 },
          top: "50%",
          display: { xs: "none", lg: "flex" },
        }}
        className="arrowBtn"
      >
        <Box
          // ref={navigationPrevRef}
          className="prevBtn"
          sx={{
            // position: "absolute",
            // bottom: { xs: 40, md: 0 },
            // left: {
            //   xs: "0px",
            //   md: "440px",
            //   lg: "600px",
            //   xl: "640px",
            //   xxl: "820px",
            //   xxxl: "1200px",
            // },
            zIndex: 9999,
          }}
          // onClick={() => swiper?.slideNext()}
        >
          <Image src={leftArrow} alt="left" height={10} />
        </Box>
      </Box>
      <Box
        sx={{
          // width: "100%",
          position: "absolute",
          right: { xs: 60, sm: 60, lg: 80 },
          top: "50%",
          display: { xs: "none", lg: "flex" },
        }}
        className="arrowBtn"
      >
        <Box
          // ref={navigationNextRef}
          className="nextBtn"
          sx={{
            // position: "absolute",
            // bottom: { xs: 40, md: 0 },
            // left: {
            //   xs: "40px",
            //   md: "470px",
            //   lg: "640px",
            //   xl: "680px",
            //   xxl: "860px",
            //   xxl: "900px",
            // },
            zIndex: 9999,
            ml: 2,
          }}
        >
          <Image src={rightArrow} alt="left" height={10} />
        </Box>
      </Box>
    </Box>
  );
};

export default TabSlider;
