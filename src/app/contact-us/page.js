"use client";
import UITypography from "@/components/UITypography/UITypography";
import { BannerWrapper } from "@/containers/AboutUs/ui";
import DefaultLayout from "@/layout/default-layout";
import { Box, Grid } from "@mui/material";
import React from "react";
import contactUsBanner from "../../assets/images/contact.jpg";
import ContactForm from "@/containers/ContactUs/ContactForm";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";

const ContactUs = () => {
  return (
    <DefaultLayout>
      <Grid container justifyContent="center" gap={3}>
        <Grid item xs={11}>
          <BannerWrapper bgImg={contactUsBanner}>
            <UITypography
              type="heading"
              title="Contact Us"
              sx={{
                color: "white",
                fontSize: "80px",
                mb: "13px",
                ml: { xs: "30px", md: "60px" },
              }}
            />
          </BannerWrapper>
        </Grid>
        <Grid item xs={11} display="flex" justifyContent="center">
          <Grid
            container
            mt={4}
            justifyContent={{ xs: "center", md: "space-between" }}
            alignItems="center"
            // spacing={3}
            gap={3}
          >
            <Grid item xs={11} md={5.5}>
              <UITypography
                type="heading"
                title="Have questions? We would love to hear from you!"
              />
              <UITypography title="Our team is here to provide answers and assistance in any way we can. Please feel free to reach out to us through the contact form below, and we'll be more than happy to assist you in any way we can. Form to be sent to " />
              <UITypography
                title="info@pictureperfectvirtualstaging.com"
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
              <Box display="flex" gap={1} mt={4}>
                <EmailIcon
                  sx={{ color: (theme) => theme.palette.primary.main }}
                />
                <Link
                  href="mailto:info@pictureperfectvirtualstaging.com"
                  style={{ color: "#3C828E" }}
                >
                  info@pictureperfectvirtualstaging.com
                </Link>
              </Box>
              <Box display="flex" gap={1} mt={2}>
                <LocalPhoneIcon
                  sx={{ color: (theme) => theme.palette.primary.main }}
                />
                <Link
                  href="tel:240-220-1010"
                  style={{
                    color: "#3C828E",
                    textDecoration: "none",
                  }}
                >
                  +1 240-220-1010
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              xs={11}
              md={5.5}
              px={3}
              py={3}
              sx={{
                backgroundColor: (theme) => theme.palette.primary.greyShade7,
                borderRadius: "20px",
              }}
            >
              <ContactForm />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default ContactUs;
