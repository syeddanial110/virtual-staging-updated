"use client";

import React from "react";
import { FooterWrapper } from "./ui";
import { Grid, IconButton } from "@mui/material";
import UITypography from "@/components/UITypography/UITypography";
import FacebookIcon from "../../assets/images/facebook.png";
import InstagramIcon from "../../assets/images/instagram.png";
import Image from "next/image";
import ThreadsLogo from "../../assets/images/threads.png";
import logo from "../../assets/images/footerlogo.png";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import UIDivider from "@/components/UIDivider";
import Link from "next/link";
import YouTubeIcon from "../../assets/images/youTube.png";
import LinkedInIcon from "../../assets/images/linkedIn.png";
import PinterestIcon from "../../assets/images/pinterest.png";
import TiktokIcon from "../../assets/images/tikTok.png";
import { useRouter } from "next/navigation";
import { pathLocations } from "@/utlils/pathLocations";

const Footer = () => {
  const router = useRouter();
  return (
    <FooterWrapper>
      <Grid
        container
        justifyContent="space-around"
        gap={3}
        sx={{ padding: "50px 30px" }}
      >
        <Grid item xs={12} sm={5.5} lg={2.9}>
          <Grid container spacing={3}>
            <Grid item xs={12} pb={5}>
              <Image
                src={logo}
                alt="logo"
                height={100}
                onClick={() => router.push("/")}
              />
            </Grid>
            <Grid item xs={1.5} display="flex" alignItems="center">
              <Link
                href="https://www.facebook.com/pictureperfectvirtualstaging/"
                target="_blank"
              >
                <Image
                  src={FacebookIcon}
                  alt="FacebookIcon"
                  height={22}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Link>
            </Grid>
            <Grid item xs={1.5} display="flex" alignItems="center">
              <Link
                href="https://www.threads.net/@pictureperfectvirtualstaging"
                target="_blank"
              >
                <Image
                  src={ThreadsLogo}
                  alt="socialTiktok"
                  height={22}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Link>
            </Grid>
            <Grid item xs={1.5} display="flex" alignItems="center">
              <Link
                href="https://www.youtube.com/@pictureperfectvirtualstaging"
                target="_blank"
                // sx={{ p: 0 }}
              >
                <Image
                  src={YouTubeIcon}
                  alt="socialTiktok"
                  height={22}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Link>
            </Grid>

            <Grid item xs={1.5} display="flex" alignItems="center">
              <Link
                href="https://www.instagram.com/pictureperfectvirtualstaging/"
                target="_blank"
                // sx={{ p: 0 }}
              >
                <Image
                  src={InstagramIcon}
                  alt="socialTiktok"
                  height={22}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Link>
            </Grid>
            <Grid item xs={1.5} display="flex" alignItems="center">
              <Link
                href="https://www.linkedin.com/company/66204311/admin/feed/posts/"
                target="_blank"
                // sx={{ p: 0 }}
              >
                <Image
                  src={LinkedInIcon}
                  alt="socialTiktok"
                  height={22}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Link>
            </Grid>
            <Grid item xs={1.5} display="flex" alignItems="center">
              <Link href="https://www.tiktok.com/en/" target="_blank">
                <Image
                  src={TiktokIcon}
                  alt="socialTiktok"
                  height={22}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Link>
            </Grid>
            <Grid item xs={1.5} display="flex" alignItems="center">
              <Link
                href="https://www.pinterest.com/pictureperfectvirtualstaging/"
                target="_blank"
              >
                <Image
                  src={PinterestIcon}
                  alt="socialTiktok"
                  height={22}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5.5} lg={2.5}>
          <UITypography
            type="heading"
            title="Services"
            sx={{ fontWeight: "bold" }}
            isWhite={true}
          />
          <UITypography
            title={`Virtual Staging`}
            sx={{
              color: (theme) => theme.palette.primary.whiteShade1,
              mt: 3,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => router.push(pathLocations.virtualStaging)}
          />
          <UITypography
            title={`Virtual Renovation`}
            sx={{
              color: (theme) => theme.palette.primary.whiteShade1,
              mt: 3,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => router.push(pathLocations.virtualRenovation)}
          />
          <UITypography
            title={`Virtual Twilights`}
            sx={{
              color: (theme) => theme.palette.primary.whiteShade1,
              mt: 3,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => router.push(pathLocations.virtualTwilight)}
          />
          <UITypography
            title={`Commercial Virtual Staging`}
            sx={{
              color: (theme) => theme.palette.primary.whiteShade1,
              mt: 3,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => router.push(pathLocations.commercialVirtualStaging)}
          />
          <UITypography
            title={`Commercial Virtual Renovation`}
            sx={{
              color: (theme) => theme.palette.primary.whiteShade1,
              mt: 3,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() =>
              router.push(pathLocations.commercialVirtualRenovation)
            }
          />
        </Grid>
        <Grid item xs={12} sm={5.5} lg={2.5}>
          <UITypography
            type="heading"
            title="Legal Information"
            sx={{ fontWeight: "bold" }}
            isWhite={true}
          />
          <UITypography
            title={`Privacy Policy`}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
              color: (theme) => theme.palette.primary.whiteShade1,
              mt: 3,
            }}
            onClick={() => router.push(pathLocations.privacyPolicy)}
          />
          <UITypography
            title={`Terms and Conditions`}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
              color: (theme) => theme.palette.primary.whiteShade1,
              mt: 3,
            }}
            onClick={() => router.push(pathLocations.termsAndCondition)}
          />

          <UITypography
            title={`Faq's`}
            sx={{
              color: (theme) => theme.palette.primary.whiteShade1,
              mt: 3,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => router.push(pathLocations.faq)}
          />
        </Grid>
        <Grid item xs={12} sm={5.5} lg={2.5}>
          <UITypography
            type="heading"
            title="Contact Us"
            sx={{ fontWeight: "bold" }}
            isWhite={true}
          />
          <Grid container spacing={2} mt={1}>
            <Grid item xs={1}>
              <EmailIcon sx={{ color: "#63A5B1" }} />
            </Grid>
            <Grid item xs={11}>
              <Link
                href="mailto:info@pictureperfectvirtualstaging.com"
                style={{
                  color: "white",
                  textDecoration: "none",
                  marginLeft: 5,
                  wordWrap: "break-word",
                }}
              >
                info@pictureperfectvirtualstaging.com
              </Link>
            </Grid>
            <Grid item xs={1}>
              <LocalPhoneIcon sx={{ color: "#63A5B1" }} />
            </Grid>
            <Grid item xs={11}>
              <Link
                href="tel:240-220-1010"
                style={{
                  color: "white",
                  textDecoration: "none",
                  marginLeft: 10,
                }}
              >
                +1 240-220-1010
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <UIDivider />
        </Grid>
        <Grid item xs={12} p={3}>
          <UITypography
            title="Copyright © 2024 Picture Perfect Virtual Staging. All Rights Reserved."
            sx={{ color: (theme) => theme.palette.primary.greyShade1 }}
          />
        </Grid>
      </Grid>
    </FooterWrapper>
  );
};

export default Footer;
