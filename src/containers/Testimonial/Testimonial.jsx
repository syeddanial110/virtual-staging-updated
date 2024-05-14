import UITypography from "@/components/UITypography/UITypography";
import { Box, Grid } from "@mui/material";
import React from "react";

import ReviewsSlider from "../Reviews/ReviewsSlider";

const Testimonial = () => {
  return (
    <Box sx={{ position: "relative", my: { xs: 2, md: 4 } }}>
      {/* <Image
        src={testimonialBg}
        alt="testimonialBg"
        style={{
          position: "absolute",
          top: "0px",
          width: "100%",
          mixBlendMode: "exclusion",
        }}
        height={290}
        className="testimonialBgImg"
      /> */}
      <Grid container justifyContent="center">
        <Grid
          item
          xs={11}
          md={12}
          // pt={{ xs: 9, sm: 16, md: 14, lg: 12 }}
          display="flex"
          justifyContent="center"
        >
          <Box>
            <UITypography
              type="mainHeading"
              title="Our "
              sx={{
                display: "inline",
                // color: "white",
                fontSize: {
                  xs: "30px",
                  sm: "33px",
                  md: "40px",
                  lg: "55px",
                  xl: "66px",
                },
              }}
            />
            <UITypography
              type="mainHeading"
              title="Happy "
              className="virtualStaging"
              sx={{
                display: "inline",
                fontSize: {
                  xs: "30px",
                  sm: "33px",
                  md: "40px",
                  lg: "55px",
                  xl: "66px",
                },
                color: "black !important",
              }}
            />
            <UITypography
              type="mainHeading"
              title="Clients"
              sx={{
                display: "inline",
                // color: "white",
                fontSize: {
                  xs: "30px !important",
                  sm: "33px !important",
                  md: "40px !important",
                  lg: "55px !important",
                  xl: "66px !important",
                },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={11} mt={{ xs: 0 }}>
          <ReviewsSlider />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonial;
