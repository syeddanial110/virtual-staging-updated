"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const [swiper, setSwiper] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
      if (swiper) {
        swiper.allowTouchMove = !isMobile;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [swiper, isMobile]);

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
        draggable={true}
        navigation={{ nextEl: ".tabnextBtn", prevEl: ".tabprevBtn" }}
        className="tabSwiper"
        noSwipingClass="swiper-no-swiping"
        // spaceBetween={10}
        allowTouchMove={!isMobile}
        breakpoints={
          {
            // 700: {
            //   allowTouchMove: false,
            // },
            // 800: {
            //   allowTouchMove: true,
            // },
            // 1100: {
            //   slidesPerView: 3,
            // },
          }
        }
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
          left: { xs: "38%", sm: 60, lg: 80 },
          top: { xs: "104%", md: "50%" },
          display: { xs: "flex", lg: "flex" },
        }}
        className="arrowBtn"
      >
        <Box
          // ref={navigationPrevRef}
          className="tabprevBtn"
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
          right: { xs: "38%", sm: 60, lg: 80 },
          top: { xs: "104%", md: "50%" },
          display: { xs: "flex", lg: "flex" },
        }}
        className="arrowBtn"
      >
        <Box
          // ref={navigationNextRef}
          className="tabnextBtn"
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
