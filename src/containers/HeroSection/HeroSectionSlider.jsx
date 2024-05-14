"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Box, Button, Stack } from "@mui/material";
import { UIBgBox, UISliderBox } from "./ui";
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import Image from "next/image";
import UITypography from "@/components/UITypography/UITypography";
import UIButton from "@/components/UIButton/UIButton";
import bed from "../../assets/images/Bed.jpg";
import console from "../../assets/images/Console.jpg";
import server from "../../assets/images/Server.jpg";
import sofa from "../../assets/images/Sofa.jpg";
import table from "../../assets/images/table.jpg";
import { useRouter } from "next/navigation";
import { pathLocations } from "@/utlils/pathLocations";
import { addOrderData } from "@/store/orderPlaceSlice";
import { useDispatch } from "react-redux";

const HeroSectionSlider = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const arr = [
    {
      heading1: "Welcome ",
      heading2: "to Picture Perfect ",
      heading3: "Virtual Staging",
      description:
        "Transform your environment into a captivating masterpiece with our virtual staging solutions starting at just $24 per image. Explore our curated furniture gallery, delivering high-quality, name-brand options for every style and project.",
      image: bed,
    },
    {
      heading1: "Welcome ",
      heading2: "to Picture Perfect ",
      heading3: "Virtual Staging",
      description:
        "Transform your environment into a captivating masterpiece with our virtual staging solutions starting at just $24 per image. Explore our curated furniture gallery, delivering high-quality, name-brand options for every style and project.",
      image: console,
    },
    {
      heading1: "Welcome ",
      heading2: "to Picture Perfect ",
      heading3: "Virtual Staging",
      description:
        "Transform your environment into a captivating masterpiece with our virtual staging solutions starting at just $24 per image. Explore our curated furniture gallery, delivering high-quality, name-brand options for every style and project.",
      image: server,
    },
    {
      heading1: "Welcome ",
      heading2: "to Picture Perfect ",
      heading3: "Virtual Staging",
      description:
        "Transform your environment into a captivating masterpiece with our virtual staging solutions starting at just $24 per image. Explore our curated furniture gallery, delivering high-quality, name-brand options for every style and project.",
      image: sofa,
    },
    {
      heading1: "Welcome ",
      heading2: "to Picture Perfect ",
      heading3: "Virtual Staging",
      description:
        "Transform your environment into a captivating masterpiece with our virtual staging solutions starting at just $24 per image. Explore our curated furniture gallery, delivering high-quality, name-brand options for every style and project.",
      image: table,
    },
  ];

  return (
    <Box sx={{ position: "relative" }}>
      <Swiper
        pagination={{
          type: "progressbar",
          progressBarClass: "custom-pagination-progress",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        //   navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="headerSlider"
        // navigation={{
        //   prevEl: navigationPrevRef.current,
        //   nextEl: navigationNextRef.current,
        // }}
        navigation={{ nextEl: ".nextBtn", prevEl: ".prevBtn" }}
        // navigationComponent={{
        //   prevEl: <CustomPrevButton />,
        //   nextEl: <CustomNextButton />,
        // }}
        // onBeforeInit={(swiper) => {
        //   swiper.params.navigation.prevEl = navigationPrevRef.current;
        //   swiper.params.navigation.nextEl = navigationNextRef.current;
        // }}
      >
        {arr.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <UIBgBox>
                <UISliderBox img={item.image} className="sliderBox">
                  <Image
                    src={item.image}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      bottom: "21px",
                      position: "absolute",
                    }}
                    className="sliderBoxImg"
                  />
                  <Box
                    sx={{
                      width: { xs: "65%", md: "50%" },
                      paddingLeft: { xs: "14px", md: "60px" },
                      display: "flex",
                      alignItems: "center",
                      // height: { xs: "80vh", sm: "90vh", md: "90vh" },
                      position: "absolute",
                      top: 50,
                      height: "65%",
                    }}
                  >
                    <Stack
                      sx={{ height: "100%" }}
                      justifyContent="center"
                      // alignItems={{ xs: "center", md: "flex-start" }}
                    >
                      <Box>
                        <UITypography
                          type="mainHeading"
                          title={item.heading1}
                          sx={{
                            display: "inline",
                            color: (theme) =>
                              `${theme.palette.primary.main} !important`,
                            fontWeight: "bold !important",
                            fontSize: { xs: "22px", md: "35px", lg: "66px" },
                          }}
                        />
                        <UITypography
                          type="mainHeading"
                          title={item.heading2}
                          sx={{
                            display: "inline",
                            fontSize: { xs: "22px", md: "35px", lg: "66px" },
                            fontWeight: "regular",
                          }}
                        />
                        <UITypography
                          type="mainHeading"
                          title={item.heading3}
                          sx={{
                            display: "block",
                            color: (theme) =>
                              `${theme.palette.primary.main} !important`,
                            fontWeight: "bold !important",
                            fontSize: { xs: "22px", md: "35px", lg: "66px" },
                          }}
                        />
                      </Box>
                      <Box>
                        <UITypography
                          title={item.description}
                          // sx={{ fontSize: { xs: "12px !important" } }}
                        />
                      </Box>
                      <Box
                        mt={3}
                        display={{ xs: "flex", sm: "block" }}
                        flexDirection={{ xs: "column", sm: "row" }}
                        sx={{ width: "100%" }}
                      >
                        <UIButton
                          isDark={true}
                          label="Place Order"
                          // fullWidth={{ xs: true, md: false }}
                          onClick={() => {
                            const dataObj = {
                              serviceName: "",
                              servicePrice: "",
                            };
                            dispatch(addOrderData(dataObj));
                            router.push(pathLocations.placeOrder);
                          }}
                          className="pulse"
                        />
                        <UIButton
                          label="Explore Gallery"
                          // fullWidth={{ xs: true, md: false }}
                          onClick={() =>
                            router.push(pathLocations.furnitureGallery)
                          }
                          sx={{
                            marginLeft: { xs: "0px", sm: "10px" },
                            marginTop: { xs: "10px", sm: "0px" },
                          }}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </UISliderBox>
              </UIBgBox>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Box
        sx={{
          width: "50%",
          position: "absolute",
          right: { xs: 60, sm: 60, lg: 120 },
          bottom: "80px",
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

export default HeroSectionSlider;
