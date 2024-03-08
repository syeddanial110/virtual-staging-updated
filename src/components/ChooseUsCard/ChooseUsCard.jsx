import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import UITypography from "../UITypography/UITypography";
import { ChooseUsCardWrapper, GradientCardWrapper } from "./ui";

const ChooseUsCard = ({ img, heading, description }) => {
  return (
    <GradientCardWrapper>
      <ChooseUsCardWrapper>
        <Stack sx={{ padding: "10px 15px" }}>
          <Image src={img} alt="img" />
          <UITypography
            type="mainDescription"
            title={heading}
            sx={{ color: (theme) => theme.palette.primary.white }}
          />
          <UITypography
            title={description}
            sx={{ color: (theme) => theme.palette.primary.whiteShade1  }}
          />
        </Stack>
      </ChooseUsCardWrapper>
    </GradientCardWrapper>
  );
};

export default ChooseUsCard;
