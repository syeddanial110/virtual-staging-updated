import UITypography from "@/components/UITypography/UITypography";
import { Box, Grid } from "@mui/material";
import React from "react";
import { ChooseWrapper } from "./ui";
import ChooseUsCard from "@/components/ChooseUsCard/ChooseUsCard";
import realism from "../../assets/images/realism.png";
import selection from "../../assets/images/selection.png";

const ChooseUsSection = () => {
  const arr = [
    {
      heading: "Impeccable Realism",
      description: "We handpick every piece for lifelike perfection.",
      img: realism,
    },
    {
      heading: "Extensive Selection",
      description: "We handpick every piece for lifelike perfection.",
      img: selection,
    },
    {
      heading: "Swift Services",
      description: "We handpick every piece for lifelike perfection.",
      img: realism,
    },
    {
      heading: "Personalized Attention",
      description: "We handpick every piece for lifelike perfection.",
      img: selection,
    },
    {
      heading: "Industry Standard",
      description: "We handpick every piece for lifelike perfection.",
      img: realism,
    },
  ];
  return (
    <ChooseWrapper mt={5}>
      <Grid
        container
        justifyContent="center"
        sx={{ padding: "102px 0px" }}
        gap={3}
      >
        <Grid item xs={11} md={7}>
          <UITypography
            type="mainDescription"
            title="Why Choose us"
            sx={{
              // color: (theme) => theme.palette.primary.blackShade1,
              fontWeight: "bold",
            }}
            className="virtualStaging"
          />
          <UITypography
            type="mainHeading"
            title="Unrivaled Excellence: Handpicked Trends, "
            sx={{ color: "white", display: "inline" }}
          />
          <UITypography
            type="mainHeading"
            title={`Swift Services `}
            textAlign="center"
            className="virtualStaging"
            sx={{
              color: (theme) => `${theme.palette.primary.white} !important`,
              display: "inline",
            }}
          />
          <UITypography
            type="mainHeading"
            title="Woman-Owned Assurance – Your Premier Choice."
            sx={{ color: "white", display: "inline" }}
          />
        </Grid>
        <Grid item xs={11} md={4}>
          <Box
            sx={{
              maxHeight: "450px",
              overflowY: "scroll",
              // overflowX: "hidden",
            }}
            className="chooseUsBox"
          >
            <Grid container spacing={4}>
              {arr.map((item, i) => {
                return (
                  <Grid item xs={12} key={i}>
                    <ChooseUsCard
                      description={item.description}
                      heading={item.heading}
                      img={item.img}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ChooseWrapper>
  );
};

export default ChooseUsSection;
