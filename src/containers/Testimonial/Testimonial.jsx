import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import UITypography from "@/components/UITypography/UITypography";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import testimonialBg from "../../assets/images/testimonialBg.png";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  const arr = [
    {
      name: "Carlos Fuentes",
      rating: 5,
      date: "One day ago",
      description: `Outstanding service! I'll gladly suggest this company to my friends and family members.`,
    },
    {
      name: "John Rawlings",
      rating: 5,
      date: "One day ago",
      description: `I've used the virtual staging numerous times and I see an increase in my lead generation because of how well the homes look once the staging is added to the rooms. Virtual staging is a perfect complement to any marketing strategy`,
    },
    {
      name: "Carmen Murphy",
      rating: 5,
      date: "2 days ago",
      description: `A good alternative when real life staging doesn't work. Perfect for a condo building!`,
    },
    {
      name: "Georgette Calomeris",
      rating: 5,
      date: "2 days ago",
      description: `Picture Perfect always delivers the most professional services. We were happy with the drone photos as well as their virtual staging. They are our "go to" for all listing photos.`,
    },
    {
      name: "Kelly Malagari",
      rating: 5,
      date: "2 days ago",
      description: `Picture Perfect does an amazing job with virtual staging and I truly believe it helps sell the vacant homes quicker for top dollar! Highly recommend using this option for those vacant properties.`,
    },
    {
      name: "Ron Wolfe",
      rating: 5,
      date: "2 days ago",
      description: `We love the virtual staging option that Picture Perfect offers! We have used this service multiple times and are always thrilled with the virtual stages created for our listings.`,
    },
    {
      name: "Seth Shapero",
      rating: 5,
      date: "2 days ago",
      description: `Whenever I have needed virtual staging Picture Perfect is the one company that I trust. They do a great job and the turn around is fast!`,
    },
    {
      name: "Jenn Clark",
      rating: 5,
      date: "7 months ago",
      description: `I have to admit, I was a little skeptical about this service at first. I have a rental property that I wanted staged but didn't want to deal with people moving actual furniture in and out (that puts wear and tear on the house and takes a lot of time). I kind of held my breath until the photos came back and wow - it was amazing! The pictures speak for themselves. The customer service was great, their turn around time was exceptionally fast, and the quality of work was good. I highly recommend to everyone.`,
    },
    {
      name: "Bianca Reyes",
      rating: 5,
      date: "9 months ago",
      description: `I have used Chris for my listings and his virtual staging is top notch. He has great style, an eye for detail and even includes shadows on objects so it truly looks real. I've managed to sell quickly and for a higher price thanks to these visuals! Amazing work, highly recommended!`,
    },
    {
      name: "Antoinette Young",
      rating: 5,
      date: "1 years ago",
      description: `Picture Perfect Virtual Staging is truly perfect! Chris is beyond accommodating, extremely personable, and her passion for both photography and staging became quickly evident. What was most refreshing for me was how she let me design each detail. I never felt rushed. Her site selection is expansive and offers a wide array of options. I highly recommend using her services!`,
    },
    {
      name: "Christine Dick",
      rating: 5,
      date: "2 years ago",
      description: `Loved the ease of ordering and the fantastic virtual staging of my listing photos! Thank you Picture Perfect.`,
    },
    {
      name: "David Alexander",
      rating: 5,
      date: "2 years ago",
      description: `The property photos were high resolution and the virtual staging was amazing!`,
    },
    {
      name: "Kay Riddle",
      rating: 5,
      date: "2 years ago",
      description: `This service is a wonderful alternative to staging, my clients had beautiful furnishings and wanted to show with furniture but moving out of state and coordinating it all was daunting. Problem solved, Virtually staged. The flexibility to create rooms, spaces and show sizes to online shoppers without the frustrations. Clients happy, Realtor happy. Great service.`,
    },
    {
      name: "Tim Campbell",
      rating: 5,
      date: "2 years ago",
      description: `This is my new "go to" for staging. Chris is professional, helpful and my turn around was 24 hours which is so important. Most impressive though is the cost versus actual staging. My client was thrilled!`,
    },
    {
      name: "Chris Reeder",
      rating: 5,
      date: "3 years ago",
      description: `This service has been fantastic especially during the pandemic when sellers don't want used furnishings brought in and out of their homes. Virtual staging allows buyers to see what a room would look like if it had furnishings without all the work needed for regular staging. This company is superior to all others I have used and I don't know what I'd do without them!`,
    },
    {
      name: "Ann Holtz",
      rating: 5,
      date: "5 years ago",
      description: `This is my new "go to" for staging. Chris is professional, helpful and my turn around was 24 hours which is so important. Most impressive though is the cost versus actual staging. My client was thrilled!`,
    },
  ];

  return (
    <Box sx={{ position: "relative", my: 4 }}>
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
      />
      <Grid container justifyContent="center">
        <Grid
          item
          xs={11}
          md={12}
          pt={{ xs: 16, sm: 16, md: 14, lg: 12 }}
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
        <Grid item xs={12} mt={10}>
          <TestimonialSlider arr={arr} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonial;
