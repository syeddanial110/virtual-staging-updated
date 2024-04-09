"use client";

import UITypography from "@/components/UITypography/UITypography";
import { BannerWrapper } from "@/containers/AboutUs/ui";
import DefaultLayout from "@/layout/default-layout";
import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useLayoutEffect } from "react";
import aboutusLine from "../../assets/images/aboutusLine.png";
import AboutUsCard from "@/containers/AboutUs/AboutUsCard";
import aboutImg from "../../assets/images/aboutus.png";

const AboutUs = () => {
  const arr = [
    {
      title: "We Believe...",
      description:
        "We believe that dreaming buyers need a little help imagining the possibilities, and that a picture is worth a thousand words. We also believe in the Real Estate industry, where first impressions matter, and that impressing your clients is the key to your success.",
    },
    {
      title: "Why We Do What We Do...",
      description:
        "We provide virtual staging and virtual renovation services because we believe in helping clients unlock the full potential of their properties through cost-effective and visually appealing solutions, ultimately maximizing their sales potential and customer satisfaction. Our passion lies in transforming vacant or outdated spaces into visually captivating and marketable ones, providing clients with a competitive edge in the real estate market.",
    },
    {
      title: "What Problems We Solve...",
      description:
        "At Picture Perfect Virtual Staging we understand the challenges of getting noticed in today's crowded marketplace. Our mission is to empower you with strategies that will captivate buyers, impress sellers, and elevate the perceived value of your services, resulting in exponential growth through word-of-mouth referrals. Trust us to deliver outstanding results that will generate a buzz among your clients, encouraging them to recommend your business to their network.",
    },
  ];

  // useEffect(() => {
  //   console.log("Use effect running");
  //   return () => {
  //     console.log("Useeffect clean running");
  //   };
  // }, []);
  // useLayoutEffect(() => {
  //   console.log("use layout effect running");
  // });

  return (
    <DefaultLayout>
      <Grid container justifyContent="center" spacing={{ xs: 3, md: 10 }}>
        <Grid item xs={11}>
          <BannerWrapper bgImg={aboutImg} isGradient={true}>
            <UITypography
              type="mainHeading"
              title="About Us"
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
        <Grid item xs={11}>
          <UITypography
            title="MEET THE OWNER"
            type="mainHeading"
            sx={{
              fontSize: { xs: "35px !important", lg: "48px !important" },
              fontWeight: "regular",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        gap={1}
        justifyContent="center"
        mt={{ xs: 0, md: 2 }}
        // px={{ xs: 2, md: 3 }}
      >
        <Grid item xs={12} md={1} lg={2}></Grid>
        <Grid item xs={11} md={5} lg={5}>
          <UITypography
            type="mainDescription"
            title="Chris Crummitt is the CEO and Owner of "
            sx={{ fontSize: { xs: "18px !important", md: "25px !important" } }}
          />
          <UITypography
            type="mainDescription"
            title="Picture Perfect Virtual Staging."
            sx={{ fontSize: { xs: "18px !important", md: "25px !important" } }}
          />
        </Grid>
        <Grid item xs={11} md={5} lg={4}>
          <UITypography
            type="mainDescription"
            sx={{
              color: (theme) => theme.palette.primary.main,
              fontSize: { xs: "18px !important", md: "25px !important" },
            }}
            title="27 YEARS IN THE "
          />
          <UITypography
            type="mainDescription"
            sx={{
              color: (theme) => theme.palette.primary.main,
              fontSize: { xs: "18px !important", md: "25px !important" },
            }}
            title="REAL ESTATE INDUSTRY"
          />
        </Grid>{" "}
      </Grid>
      <Grid
        container
        gap={2}
        justifyContent="center"
        mt={{ xs: 3, lg: 12 }}
        px={{ xs: 0, md: 3 }}
      >
        <Grid
          item
          xs={12}
          lg={2}
          display={{ xs: "none", md: "flex" }}
          justifyContent={{ xs: "center", lg: "flex-end" }}
        >
          <Image
            src={aboutusLine}
            alt="line"
            style={{ height: "6px", width: "150px" }}
          />
        </Grid>
        <Grid item xs={11} lg={5}>
          <UITypography
            type="mainDescription"
            title="With a wealth of firsthand experience working alongside top producing real estate agents, Chris understands the significance of presentation in the industry. Taking this understanding to heart, she personally oversees the selection of virtual furniture for our gallery, collaborating closely with talented designers to ensure the highest levels of realism, trendiness, and quality that distinguish us from the competition."
            sx={{
              fontSize: "16px !important",
              width: { xs: "100%", md: "90%" },
            }}
          />
        </Grid>
        <Grid item xs={11} lg={4}>
          <UITypography
            type="mainDescription"
            sx={{
              //   color: (theme) => theme.palette.primary.main,
              fontSize: "16px !important",
            }}
            title="At Picture Perfect Virtual Staging, we set ourselves apart by putting an emphasis on providing an excellent customer experience. Chris's commitment to her clients is clearly evident in her personal approach to communication, as she willingly takes the time to speak with them directly. This dedication translates into top-notch service and truly exceptional results. "
          />
          <UITypography
            type="mainDescription"
            sx={{
              //   color: (theme) => theme.palette.primary.main,
              fontSize: "16px !important",
            }}
            title="Choose Picture Perfect Virtual Staging for your real estate needs, and you can trust that Chris Crummitt's expertise and unwavering focus on customer satisfaction will ensure an outstanding experience every step of the way."
          />
        </Grid>{" "}
      </Grid>
      <Grid
        container
        justifyContent="space-evenly"
        gap={{ xs: 2, lg: 0 }}
        mt={{ xs: 6, md: 12 }}
      >
        {arr.map((item, i) => {
          return (
            <Grid item xs={11} md={5} lg={3.6} key={i}>
              <AboutUsCard title={item.title} description={item.description} />
            </Grid>
          );
        })}
      </Grid>
    </DefaultLayout>
  );
};

export default AboutUs;
