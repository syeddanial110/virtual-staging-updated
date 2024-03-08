import { Box, Grid } from "@mui/material";
import React from "react";
import UITypography from "../UITypography/UITypography";
import { CardWrapper } from "./ui";

const LatestCollectionCard = ({ img, heading }) => {
  return (
    <CardWrapper img={img}>
      <Box
        sx={{
          background: "rgb(59,64,65)",
          background:
            "linear-gradient(360deg, rgba(59,64,65,1) 0%, rgba(246,246,246,0) 33%)",
          zIndex: 999999,
          borderRadius: "20px",
          width: "100%",
          height: "100%",
          position: "absolute"
        }}
      >
        <UITypography
          sx={{
            fontSize: "24px",
            position: "absolute",
            bottom: 30,
            color: (theme) => theme.palette.primary.white,
            left: 20,
          }}
          title={heading}
        />
      </Box>
    </CardWrapper>
  );
};

export default LatestCollectionCard;
