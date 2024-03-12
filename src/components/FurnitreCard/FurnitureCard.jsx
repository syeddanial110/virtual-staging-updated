import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import UITypography from "../UITypography/UITypography";

const FurnitureCard = ({
  img,
  title,
  onClick,
  imgStyle,
  imgObjectFit,
  style,
  imgAlt,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        "&:hover": {
          cursor: "pointer",
        },
        // width: "350px",
        // height: "350px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          // borderRadius: "16px",
          width: "250px",
          height: "250px",
          overflow: "hidden",
          border: (theme) => `4px solid ${theme.palette.primary.main}`,
          "&:hover": {
            "& > img": {
              transform: "scale(1.2) rotate(-5deg)",
            },
          },
        }}
      >
        <img
          src={img}
          alt={imgAlt}
          height={260}
          width={150}
          style={{
            ...imgStyle,
            // width: "100%",
            width: "250px",
            height: "250px",
            objectFit: imgObjectFit ? imgObjectFit : "contain",
            aspectRatio: 1 / 2,
            // borderRadius: "16px",
            transition: "all 0.3s linear",
          }}
        />
      </Box>
      <UITypography
        type="heading"
        sx={{ fontSize: "22px", fontWeight: 600 }}
        title={title}
        textAlign="center"
      />
    </Box>
  );
};

export default FurnitureCard;
