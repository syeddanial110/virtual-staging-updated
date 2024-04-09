import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import UITypography from "@/components/UITypography/UITypography";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import testimonialBg from "../../assets/images/testimonialBg.png";
import TestimonialSlider from "./TestimonialSlider";

import reviewImg1 from "../../assets/images/reviews/Ann Holtz.png";
import reviewImg2 from "../../assets/images/reviews/Antoinette Young.png";
import reviewImg3 from "../../assets/images/reviews/Bianca Reyes.png";
import reviewImg4 from "../../assets/images/reviews/carlos f.png";
import reviewImg5 from "../../assets/images/reviews/carmen murphy.png";
import reviewImg6 from "../../assets/images/reviews/Chris Reeder.png";
import reviewImg7 from "../../assets/images/reviews/christine dick.png";
import reviewImg8 from "../../assets/images/reviews/David Alexander.png";
import reviewImg9 from "../../assets/images/reviews/georgette c.png";
import reviewImg10 from "../../assets/images/reviews/jenn clark.png";
import reviewImg11 from "../../assets/images/reviews/john rawlings.png";
import reviewImg12 from "../../assets/images/reviews/Kay Riddle.png";
import reviewImg13 from "../../assets/images/reviews/kelly m.png";
import reviewImg14 from "../../assets/images/reviews/ron wolfe.png";
import reviewImg15 from "../../assets/images/reviews/seth shapiro.png";
import reviewImg16 from "../../assets/images/reviews/Tim Campbell.png";
import ReviewsSlider from "../Reviews/ReviewsSlider";

const Testimonial = () => {
  return (
    <Box sx={{ position: "relative", my: { xs: 0, md: 4 } }}>
      <Image
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
      />
      <Grid container justifyContent="center">
        <Grid
          item
          xs={11}
          md={12}
          pt={{ xs: 9, sm: 16, md: 14, lg: 12 }}
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
        <Grid item xs={11} mt={{ xs: 0, md: 10 }}>
          <ReviewsSlider />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonial;
