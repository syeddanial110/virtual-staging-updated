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
import { BeforeAfter } from "@/components/BeforeAndAfter/BeforeAfter";

const VirtualSlider = ({ arr }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { lg: "400px", xl: "400px", xxl: "450px" },
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

        className="virtualSliderSwiper"
        slidesPerView={1}
        spaceBetween={5}
        // centeredSlides={true}
        loopedSlides={1}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
      >
        {arr.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Grid container justifyContent="space-around">
                <Grid item xs={11}>
                  <BeforeAfter
                    // pointerMove
                    beforeImage={item.beforeImg.src}
                    afterImage={item.afterImg.src}
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
          left: { xs: "35%", sm: "47%", md: "45%", lg: "46%" },
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
          left: { xs: "59%", sm: "60%", md: "65%", lg: "62%" },
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

export default VirtualSlider;
