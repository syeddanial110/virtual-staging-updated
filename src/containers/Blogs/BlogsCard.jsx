"use client";

import React, { useState } from "react";
import { BlogWrapper } from "./ui";
import { Chip, Grid } from "@mui/material";
import Image from "next/image";
import UITypography from "@/components/UITypography/UITypography";
import UIDivider from "@/components/UIDivider";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useEffect } from "react";

const BlogsCard = ({ imgSrc, title, description, date, tag, handleCardClick }) => {
  const [shortTitle, setShortTitle] = useState("");
  const [shortDescription, setShortDescription] = useState(description);

  useEffect(() => {
    if (description.length > 150) {
      let tempDesc = description.slice(0, 150);
      setShortDescription(`${tempDesc}...`);
    }
    if (title.length > 60) {
      let tempTitle = title.slice(0, 60);
      setShortTitle(`${tempTitle}...`);
    } else {
      setShortTitle(title);
    }
  }, []);

  return (
    <BlogWrapper
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      onClick={handleCardClick}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            overflow: "hidden",
            "&:hover": {
              "& > img": {
                transform: "scale(1.2) rotate(-5deg)",
              },
            },
          }}
        >
          <Image
            src={imgSrc}
            alt="img-blog"
            style={{
              objectFit: "cover",
              width: "100%",
              height: 220,
              borderRadius: "35px",
              //   transform: "scale(1)",
              transition: "all 0.3s linear",
            }}
          />
        </Grid>
      </Grid>
      <Grid container gap={2} px={3} py={3}>
        <Grid item xs={12}>
          <UITypography
            type="heading"
            title={`${shortTitle}`}
            sx={{
              color: (theme) => theme.palette.primary.main,
              fontSize: "28px",
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <UITypography
            title={shortDescription}
            sx={{
              color: (theme) => theme.palette.primary.blackShade1,
              // fontSize: {}
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} px={3} pb={3} alignItems='center'>
        <Grid item xs={12} pb={1}>
          <UIDivider />
        </Grid>
        <Grid item xs={3.5} sm={2} md={3.3}>
          <Chip
            label={date}
            variant="outlined"
            sx={{
              color: (theme) => theme.palette.primary.main,
              fontSize: { xs: "10px", md: "11px" },
            }}
          />
        </Grid>
        <Grid item xs={6} sm={7} md={7}>
          <Chip
            label={tag}
            variant="outlined"
            sx={{
              color: (theme) => theme.palette.primary.main,
              fontSize: { xs: "10px", md: "11px" },
            }}
          />
        </Grid>
        <Grid item xs={2} sm={3} md={1.2} display="flex" justifyContent="flex-end">
          <ArrowCircleRightIcon
            sx={{ color: (theme) => theme.palette.primary.main }}
          />
        </Grid>
      </Grid>
    </BlogWrapper>
  );
};

export default BlogsCard;
