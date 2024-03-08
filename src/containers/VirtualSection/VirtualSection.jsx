"use client";

import UITypography from "@/components/UITypography/UITypography";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { BeforeAfter } from "@/components/BeforeAndAfter/BeforeAfter";
import beforeImg from "../../assets/images/before.png";
import afterImg from "../../assets/images/after.png";
import beforeImg1 from "../../assets/images/bedroom1.jpg";
import afterImg1 from "../../assets/images/bedroom2.jpg";
import VirtualSlider from "./VirtualSlider";

const VirtualSection = () => {
  const arr = [
    {
      beforeImg: beforeImg,
      afterImg: afterImg,
    },
    {
      beforeImg: beforeImg1,
      afterImg: afterImg1,
    },
    {
      beforeImg: beforeImg,
      afterImg: afterImg,
    },
    {
      beforeImg: beforeImg1,
      afterImg: afterImg1,
    },
    {
      beforeImg: beforeImg,
      afterImg: afterImg,
    },
  ];

  return (
    <Grid
      container
      justifyContent="center"
      mt={{ xs: 0, lg: 14 }}
      gap={{ xs: 2, md: 9 }}
    >
      <Grid item xs={9}>
        {/* <p style={{ textAlign: "center" }}> */}
        <UITypography
          type="mainHeading"
          title={`Elevate your spaces with the industry's finest `}
          textAlign="center"
          sx={{
            // color: (theme) => `${theme.palette.primary.white} !important`,
            display: "inline",
          }}
        />
        <UITypography
          type="mainHeading"
          title={`virtual staging `}
          textAlign="center"
          className="virtualStaging"
          sx={{
            // color: (theme) => `${theme.palette.primary.white} !important`,
            display: "inline",
          }}
        />
        <UITypography
          type="mainHeading"
          title={`— let's make your vision a stunning reality.`}
          textAlign="center"
          sx={{
            // color: (theme) => `${theme.palette.primary.white} !important`,
            display: "inline",
            fontWeight: "regular",
          }}
        />
        {/* </p> */}
      </Grid>
      <Grid item xs={12} display="flex" mt={{ xs: 5, md: 0 }}>
        <Grid container justifyContent="space-around">
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <UITypography
              type="heading"
              title="Unveil the Stunning Potential of Your Listings"
              // sx={{ paddingTop: "200px" }}
              textAlign={{ xs: "center", md: "left" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <VirtualSlider arr={arr} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VirtualSection;
