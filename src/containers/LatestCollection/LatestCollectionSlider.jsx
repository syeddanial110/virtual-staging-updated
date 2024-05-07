"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import LatestCollectionCard from "@/components/LatestCollectionCard/LatestCollectionCard";
import { Box, Grid } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { ImageBASEURL } from "@/auth/ApiRequest";
import { useRouter } from "next/navigation";
import { pathLocations } from "@/utlils/pathLocations";

const LatestCollectionSlider = ({ arr }) => {
  const router = useRouter();

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        navigation={{ nextEl: ".nextBtn", prevEl: ".prevBtn" }}
        modules={[Autoplay, Navigation]}
        className="latestSliderSwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={5}
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
                  <LatestCollectionCard
                    heading={item.title}
                    img={`${ImageBASEURL}${item.choices[0]?.image}`}
                    handleClick={() =>
                      router.push(
                        `${pathLocations.curatedCollection}/${item.id}`
                      )
                    }
                  />
                </Grid>
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Box
        sx={{
          position: "absolute",
          top: "-90px",
          right: { xs: "22px", md: 0 },
          zIndex: 999,
        }}
      >
        <div className="nextBtn">
          <ArrowRightAltIcon
            sx={{
              color: (theme) => theme.palette.primary.white,
              backgroundColor: (theme) => theme.palette.primary.main,
              borderRadius: "50%",
              fontSize: { xs: "20px !important", md: "40px !important" },
              padding: "5px",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          />
        </div>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "-90px",
          right: { xs: "55px", md: "90px" },
          zIndex: 999,
        }}
      >
        <div className="prevBtn">
          <ArrowRightAltIcon
            sx={{
              color: (theme) => theme.palette.primary.white,
              backgroundColor: (theme) => theme.palette.primary.main,
              borderRadius: "50%",
              fontSize: { xs: "20px !important", md: "40px !important" },
              padding: "5px",
              transform: "rotate(180deg)",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          />
        </div>
      </Box>
    </div>
  );
};

export default LatestCollectionSlider;
