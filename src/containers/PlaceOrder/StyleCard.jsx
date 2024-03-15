"use client";
import UITypography from "@/components/UITypography/UITypography";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { useSelector } from "react-redux";
import LightBox from "@/components/LightBox/LightBox";
import { ImageBASEURL } from "@/auth/ApiRequest";

const StyleCard = ({ onClick, img, title, id, isSelected, imgArr = [] }) => {
  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

  const [open, setOpen] = useState(false);

  const [lightboxImgArr, setLightboxImgArr] = useState([]);

  useEffect(() => {
    const x =
      imgArr.length > 0 &&
      imgArr.map((elm) => {
        return {
          src: `${ImageBASEURL}${elm.image}`,
        };
      });
    setLightboxImgArr(x);
  }, [imgArr?.length]);

  return (
    <Box
      sx={{
        border: id == orderPlaceReducer.styleId && "1px solid #b1d775",
        borderRadius: "12px",

        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Grid container gap={2} onClick={onClick}>
        <Grid item xs={12} sx={{ position: "relative" }}>
          <img
            src={img}
            alt="img"
            height={180}
            style={{
              borderRadius: "12px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              objectFit: "cover",
              width: "100%",
              scale: id == orderPlaceReducer.styleId ? 0.9 : 1,
              transition: "all 0.5s ease",
            }}
          />
          {id == orderPlaceReducer.styleId && (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "48%",
              }}
            >
              <DoneIcon
                sx={{
                  color: "white",
                  background: "#1a1a1a",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={12}>
          <UITypography type="subheading" title={title} textAlign="center" />
        </Grid>
      </Grid>
      <UITypography
        title={"View Example"}
        textAlign="center"
        sx={{ color: (theme) => theme.palette.primary.main }}
        onClick={() => setOpen(true)}
      />
      <LightBox open={open} setOpen={setOpen} imgArr={lightboxImgArr} />
    </Box>
  );
};

export default StyleCard;
