import UITypography from "@/components/UITypography/UITypography";
import { Box, Grid } from "@mui/material";
import React from "react";
import StepProcessCard from "./StepProcessCard";
import uploadImage from "../../assets/images/uploadImage.png";
import chooseFurniture from "../../assets/images/chooseFurniture.png";
import download from "../../assets/images/download.png";
import placeOrder from "../../assets/images/placeOrder.png";

const StepProcess = () => {
  const arr = [
    {
      heading: "Upload Your Images",
      description:
        "Remember to choose angles that show the size and flow of the space and provide us with the highest resolution images you have!",
      img: uploadImage,
      objectFit: "contain",
      width: "105px",
      height: "104px",
    },
    {
      heading: "Choose Your Furniture",
      description:
        "Choose from any of our pre-designed sets, Design It Yourself (DIY), or have our designers choose the furniture for you.",
      img: chooseFurniture,
      height: "86px",
    },
    {
      heading: "Place Your Order",
      description:
        "Once you check out you will receive a confirmation email, and your images will be delivered to you within 24 hours.",
      img: placeOrder,
      marginBottom: "18px",
      marginTop: "13px",
    },
    {
      heading: "Effortless Download",
      description:
        "Once you check out you will receive a confirmation email, and your images will be delivered to you within 24 hours.",
      img: download,
      objectFit: "contain",
      width: "105px",
      height: "99px",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#242424",
        paddingTop: { xs: "30px", md: "80px" },
        paddingBottom: { xs: "45px", md: "80px" },
        mt: { xs: 5, lg: 3 },
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={11}>
          <UITypography
            type="mainHeading"
            title="Our Easy 4-Step Process"
            sx={{ color: "white" }}
          />
        </Grid>
        <Grid item xs={11} mt={4}>
          <Grid container justifyContent="space-around" gap={3}>
            {arr.map((item, i) => {
              return (
                <Grid item key={i} xs={12} sm={5.5} md={5.8} lg={2.8}>
                  <StepProcessCard
                    heading={item.heading}
                    description={item.description}
                    img={item.img}
                    objectFit={item.objectFit}
                    width={item.width}
                    height={item.height}
                    marginBottom={item.marginBottom}
                    marginTop={item.marginTop}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StepProcess;
