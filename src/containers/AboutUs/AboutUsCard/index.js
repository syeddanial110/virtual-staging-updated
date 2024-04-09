import React from "react";
import { AboutUsCardWrapper } from "../ui";
import { Grid } from "@mui/material";
import UITypography from "@/components/UITypography/UITypography";

const AboutUsCard = ({ title, description }) => {
  return (
    <AboutUsCardWrapper sx={{ height: { xs: "auto", md: "300px" } }}>
      <Grid container>
        <Grid item xs={12}>
          <UITypography
            type="heading"
            title={title}
            sx={{ fontWeight: 600, fontSize: "25px !important" }}
          />
        </Grid>
        <Grid item xs={12}>
          <UITypography
            sx={{
              color: (theme) => theme.palette.primary.greyShade1,
              fontSize: { xs: "12px", md: "16px !important" },
            }}
            title={description}
          />
        </Grid>
      </Grid>
    </AboutUsCardWrapper>
  );
};

export default AboutUsCard;
