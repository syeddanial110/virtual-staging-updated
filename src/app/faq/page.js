"use client";
import { BannerWrapper } from "@/containers/AboutUs/ui";
import DefaultLayout from "@/layout/default-layout";
import { Box, Grid } from "@mui/material";
import React from "react";
import faqBanner from "../../assets/images/faqBanner.jpg";
import UITypography from "@/components/UITypography/UITypography";
import QuestionAnswer from "@/containers/FAQ/QuestionAnswer";

const FAQ = () => {
  const arr = [
    {
      question: "What kind of photos work best?",
      answer:
        "We prefer to work with the largest photo files that you have. Additionally, it would be ideal if the photos were taken horizontally rather than vertically. To capture the perfect shot, we recommend including a nice mix of floor and ceiling in the frame. This will provide a dynamic composition and add depth to the image. So, when selecting your photos, please prioritize those with high resolution, horizontal orientation, and a well-balanced inclusion of floor and ceiling.",
    },
    {
      question:
        "I'm not sure if I need virtual staging or virtual renovation. What's the difference?",
      answer:
        "If you're unsure about whether to go for virtual staging or virtual renovation, here's a helpful distinction. Virtual renovation is the ideal choice if you want to make alterations to the room itself. This includes changing paint colors, floor types, appliances, and other similar aspects. When you choose virtual renovation, we will not only modify the room but also add furniture to complete the transformed space. On the other hand, if you don't need any changes to the room itself but simply want to add furniture or accessories, virtual staging is the right option. With virtual staging, we enhance your space by incorporating furniture and other items to make it more appealing and visually attractive. So, if you're looking to transform your current space, virtual renovation is the way to go. But if you only need furniture or accessories to enhance the existing room, virtual staging is the perfect choice for you.",
    },
    {
      question: "Can I have one room staged multiple ways?",
      answer:
        "Yes, definitely! Many agents do. Just let us know what you need and we'll take care of the rest. Staging a room in different ways can provide potential buyers with multiple perspectives and help them visualize the space according to their preferences. Whether you want to showcase the room as a cozy reading nook, a functional home office, or a vibrant playroom, we can make it happen. Our team of professional stagers is skilled at transforming spaces to suit different purposes and aesthetics. We understand that each buyer has unique needs and tastes, so we are happy to accommodate multiple staging options. Simply let us know your vision, and we'll work together to create an inviting and versatile room that will appeal to a wide range of buyers.",
    },
    {
      question:
        "What if I want something changed after you give me back the photos?",
      answer:
        "At Picture Perfect Virtual Staging we understand that sometimes you may require a few adjustments to the photos we deliver. That's why we offer one free revision for each image. Our aim is to ensure your complete satisfaction with the final product, and we are more than happy to accommodate any requested changes. Whether it's minor tweaks to the composition, color enhancements, or alterations to any specific elements, we are here to make it happen. Simply let us know the details of the modifications you would like to see, and our dedicated team will work diligently to make the necessary adjustments. We are committed to providing a hassle-free and enjoyable experience, ensuring that you receive the perfect photos that meet your vision. Rest assured, your satisfaction is our top priority. Let us know how we can make your photos even better, and we'll take care of the rest!",
    },
    {
      question: "Can I use staged images on the MLS?",
      answer:
        "As far as we are aware, yes, but please check the rules of your local MLS system. However, MLS guidelines may vary depending on your location. It's always a good idea to review the rules and regulations set by your local MLS system.",
    },
    {
      question: "What's the turnaround time?",
      answer:
        "At our virtual staging and virtual twilight service, you can expect to receive your completed order within 24 hours from the moment you place it. We understand the importance of prompt delivery, and we strive to provide a quick turnaround time to meet your needs. However, if you have opted for virtual renovation, please allow us 48 hours to deliver your final product. This additional time is necessary as virtual renovations require meticulous attention to detail and might involve more intricate editing processes.",
    },
    {
      question:
        "Do I have to pick the furniture? What if I don't have a preference?",
      answer:
        "No, you don't have to worry about picking the furniture yourself. We understand that not everyone has a preference or the time to go through countless options. That's why we offer a convenient solution for you. Our dedicated team of professional stagers is ready to take care of all the furniture selection for you. With their expertise and understanding of design aesthetics, they will carefully curate a stunning collection of furniture that matches your space and enhances its overall appeal. You can sit back and relax while our stagers work their magic, transforming your space into a beautiful and inviting environment. So, rest assured that even if you don't have a preference, our team will ensure your home is furnished to perfection.",
    },
    {
      question: "Do you have an online furniture gallery I can look at?",
      answer:
        "Yes! We are proud to say we have one of the largest online furniture galleries. Currently, we have over 5,000 pieces of furniture, accessories, plants, lighting, flooring, and more. Our online gallery offers a wide range of options to choose from, catering to different styles and preferences. Whether you're looking for modern, contemporary, traditional, or eclectic pieces, we have something for everyone. You can browse through our extensive collection at your convenience So, if you're in search of inspiration or simply want to explore our vast inventory, visit our website and start exploring our online furniture gallery today!",
    },
  ];

  return (
    <DefaultLayout>
      <Grid container justifyContent="center" gap={2}>
        <Grid item xs={11}>
          <BannerWrapper bgImg={faqBanner} isGradient>
            <UITypography
              type="heading"
              title="FAQ's"
              sx={{
                color: "white",
                fontSize: "80px",
                mb: "13px",
                ml: { xs: "30px", md: "60px" },
              }}
            />
          </BannerWrapper>
        </Grid>
        <Grid item xs={11} md={8} mt={{ xs: 2, md: 4 }}>
          <UITypography
            type="heading"
            title="FREQUENTLY ASKED QUESTIONS"
            sx={{
              color: "black",
              fontSize: "60px",
              mb: { xs: 0, md: "13px" },
              ml: { xs: "30px", md: "60px" },
            }}
          />
        </Grid>
        <Grid item xs={11} md={6}>
          {arr.map((item, i) => {
            return (
              <QuestionAnswer
                question={item.question}
                answer={item.answer}
                key={i}
                index={i}
              />
            );
          })}
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default FAQ;
