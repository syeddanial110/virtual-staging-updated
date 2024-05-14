"use client"
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReviewCard from "./ReviewCard";
import { Box, Grid } from "@mui/material";

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
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import Image from "next/image";

const ReviewsSlider = () => {
  const arr = [
    {
      image: reviewImg4,
      name: "Carlos Fuentes",
      rating: 5,
      date: "One day ago",
      description: `Outstanding service! I'll gladly suggest this company to my friends and family members.`,
    },
    {
      image: reviewImg11,
      name: "John Rawlings",
      rating: 5,
      date: "One day ago",
      description: `I've used the virtual staging numerous times and I see an increase in my lead generation because of how well the homes look once the staging is added to the rooms. Virtual staging is a perfect complement to any marketing strategy`,
    },
    {
      image: reviewImg5,
      name: "Carmen Murphy",
      rating: 5,
      date: "2 days ago",
      description: `A good alternative when real life staging doesn't work. Perfect for a condo building!`,
    },
    {
      image: reviewImg9,
      name: "Georgette Calomeris",
      rating: 5,
      date: "2 days ago",
      description: `Picture Perfect always delivers the most professional services. We were happy with the drone photos as well as their virtual staging. They are our "go to" for all listing photos.`,
    },
    {
      image: reviewImg13,
      name: "Kelly Malagari",
      rating: 5,
      date: "2 days ago",
      description: `Picture Perfect does an amazing job with virtual staging and I truly believe it helps sell the vacant homes quicker for top dollar! Highly recommend using this option for those vacant properties.`,
    },
    {
      image: reviewImg14,
      name: "Ron Wolfe",
      rating: 5,
      date: "2 days ago",
      description: `We love the virtual staging option that Picture Perfect offers! We have used this service multiple times and are always thrilled with the virtual stages created for our listings.`,
    },
    {
      image: reviewImg15,
      name: "Seth Shapero",
      rating: 5,
      date: "2 days ago",
      description: `Whenever I have needed virtual staging Picture Perfect is the one company that I trust. They do a great job and the turn around is fast!`,
    },
    {
      image: reviewImg10,
      name: "Jenn Clark",
      rating: 5,
      date: "7 months ago",
      description: `I have to admit, I was a little skeptical about this service at first. I have a rental property that I wanted staged but didn't want to deal with people moving actual furniture in and out (that puts wear and tear on the house and takes a lot of time). I kind of held my breath until the photos came back and wow - it was amazing! The pictures speak for themselves. The customer service was great, their turn around time was exceptionally fast, and the quality of work was good. I highly recommend to everyone.`,
    },
    {
      image: reviewImg3,
      name: "Bianca Reyes",
      rating: 5,
      date: "9 months ago",
      description: `I have used Chris for my listings and his virtual staging is top notch. He has great style, an eye for detail and even includes shadows on objects so it truly looks real. I've managed to sell quickly and for a higher price thanks to these visuals! Amazing work, highly recommended!`,
    },
    {
      image: reviewImg2,
      name: "Antoinette Young",
      rating: 5,
      date: "1 years ago",
      description: `Picture Perfect Virtual Staging is truly perfect! Chris is beyond accommodating, extremely personable, and her passion for both photography and staging became quickly evident. What was most refreshing for me was how she let me design each detail. I never felt rushed. Her site selection is expansive and offers a wide array of options. I highly recommend using her services!`,
    },
    {
      image: reviewImg7,
      name: "Christine Dick",
      rating: 5,
      date: "2 years ago",
      description: `Loved the ease of ordering and the fantastic virtual staging of my listing photos! Thank you Picture Perfect.`,
    },
    {
      image: reviewImg8,
      name: "David Alexander",
      rating: 5,
      date: "2 years ago",
      description: `The property photos were high resolution and the virtual staging was amazing!`,
    },
    {
      image: reviewImg12,
      name: "Kay Riddle",
      rating: 5,
      date: "2 years ago",
      description: `This service is a wonderful alternative to staging, my clients had beautiful furnishings and wanted to show with furniture but moving out of state and coordinating it all was daunting. Problem solved, Virtually staged. The flexibility to create rooms, spaces and show sizes to online shoppers without the frustrations. Clients happy, Realtor happy. Great service.`,
    },
    {
      image: reviewImg16,
      name: "Tim Campbell",
      rating: 5,
      date: "2 years ago",
      description: `This is my new "go to" for staging. Chris is professional, helpful and my turn around was 24 hours which is so important. Most impressive though is the cost versus actual staging. My client was thrilled!`,
    },
    {
      image: reviewImg6,
      name: "Chris Reeder",
      rating: 5,
      date: "3 years ago",
      description: `This service has been fantastic especially during the pandemic when sellers don't want used furnishings brought in and out of their homes. Virtual staging allows buyers to see what a room would look like if it had furnishings without all the work needed for regular staging. This company is superior to all others I have used and I don't know what I'd do without them!`,
    },
    {
      image: reviewImg1,
      name: "Ann Holtz",
      rating: 5,
      date: "5 years ago",
      description: `This is my new "go to" for staging. Chris is professional, helpful and my turn around was 24 hours which is so important. Most impressive though is the cost versus actual staging. My client was thrilled!`,
    },
  ];

  return (
    <Box sx={{ position: "relative" }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        navigation={{ nextEl: ".nextBtn", prevEl: ".prevBtn" }}
        className="reviewSwiper"
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {arr.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Grid container pt={3} justifyContent="center">
                <Grid item xs={11}>
                  <ReviewCard
                    img={item.image}
                    name={item.name}
                    rating={item.rating}
                    date={item.date}
                    description={item.description}
                  />
                </Grid>
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Box
        sx={{
          // width: "90%",
          position: "absolute",
          left: { xs: 60, sm: 10, lg: -20 },
          top: "50%",
          display: { xs: "none", lg: "flex" },
        }}
        className="arrowBtn"
      >
        <Box
          // ref={navigationPrevRef}
          className="prevBtn"
          sx={{
            // position: "absolute",
            // bottom: { xs: 40, md: 0 },
            // left: {
            //   xs: "0px",
            //   md: "440px",
            //   lg: "600px",
            //   xl: "640px",
            //   xxl: "820px",
            //   xxxl: "1200px",
            // },
            zIndex: 9999,
          }}
          // onClick={() => swiper?.slideNext()}
        >
          <Image src={leftArrow} alt="left" height={10} />
        </Box>
      </Box>
      <Box
        sx={{
          // width: "90%",
          position: "absolute",
          right: { xs: 60, sm: 10, lg: -20 },
          top: "50%",
          display: { xs: "none", lg: "flex" },
        }}
        className="arrowBtn"
      >
        <Box
          // ref={navigationNextRef}
          className="nextBtn"
          sx={{
            // position: "absolute",
            // bottom: { xs: 40, md: 0 },
            // left: {
            //   xs: "40px",
            //   md: "470px",
            //   lg: "640px",
            //   xl: "680px",
            //   xxl: "860px",
            //   xxl: "900px",
            // },
            zIndex: 9999,
            ml: 2,
          }}
        >
          <Image src={rightArrow} alt="left" height={10} />
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewsSlider;
