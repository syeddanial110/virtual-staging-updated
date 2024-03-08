import {
  ChooseUsCardWrapper,
  GradientCardWrapper,
} from "@/components/ChooseUsCard/ui";
import UITypography from "@/components/UITypography/UITypography";
import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const StepProcessCard = ({
  img,
  heading,
  description,
  width,
  objectFit,
  height,
  marginBottom,
  marginTop,
}) => {
  return (
    <GradientCardWrapper>
      <ChooseUsCardWrapper sx={{ padding: "20px 20px" }}>
        <Stack
          // justifyContent="center"
          alignItems="center"
          // sx={{ height: "100%" }}
          gap={2}
        >
          <Image
            src={img}
            alt="img"
            height={height ? height : 80}
            style={{
              objectFit: objectFit ? objectFit : "cover",
              width: width && width,
              marginBottom: marginBottom ? marginBottom : "0px",
              marginTop: marginTop ? marginTop : "0px",
            }}
          />
          <UITypography
            type="heading"
            title={heading}
            sx={{
              color: "white",
              fontSize: { xs: "16px", md: "22px", lg: "28px" },
            }}
            textAlign="center"
          />
          <UITypography
            title={description}
            sx={{
              color: (theme) => theme.palette.primary.greyShade1,
              fontSize: { xs: "14px", md: "16px" },
            }}
            textAlign="center"
          />
        </Stack>
      </ChooseUsCardWrapper>
    </GradientCardWrapper>
  );
};

export default StepProcessCard;
