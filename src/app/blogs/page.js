"use client";

import UITypography from "@/components/UITypography/UITypography";
import { BlogBanner } from "@/containers/Blogs/ui";
import DefaultLayout from "@/layout/default-layout";
import { Box, Grid, Pagination } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import aboutusLine from "../../assets/images/aboutusLine.png";
import BlogsCard from "@/containers/Blogs/BlogsCard";
import { blogData } from "@/utlils/data";
import { pathLocations } from "@/utlils/pathLocations";
import { useRouter } from "next/navigation";

const Blogs = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const handlePagination = (e, val) => {
  };

  return (
    <DefaultLayout>
      <Grid container justifyContent="center" spacing={{ xs: 5, md: 10 }}>
        <Grid item xs={11.5}>
          <BlogBanner>
            <UITypography
              type="mainHeading"
              title="Blog"
              sx={{
                color: "white",
                fontSize: { xs: "40px", md: "60px !important" },
                fontWeight: "regular",
                mb: "13px",
                ml: { xs: "30px", md: "60px" },
              }}
            />
          </BlogBanner>
        </Grid>
        <Grid item xs={11.5}>
          <UITypography
            title="WELCOME TO OUR BLOG"
            type="mainHeading"
            sx={{
              fontSize: { xs: "25px !important", lg: "48px !important" },
              fontWeight: "regular",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        gap={2}
        justifyContent="center"
        mt={{ xs: 10, lg: 12 }}
        px={3}
      >
        <Grid
          item
          xs={12}
          lg={2}
          display="flex"
          justifyContent={{ xs: "center", lg: "flex-end" }}
        >
          <Image
            src={aboutusLine}
            alt="line"
            style={{ height: "6px", width: "150px" }}
          />
        </Grid>
        <Grid item xs={12} lg={5}>
          <UITypography
            type="mainDescription"
            title="Here, you will find a treasure trove of information and inspiration for all things related to interior design and staging. Whether you're a homeowner looking to revamp your living space or a professional stager aiming to create stunning visuals, our blog has got you covered. "
            sx={{
              fontSize: "16px !important",
              width: { xs: "100%", md: "90%" },
            }}
          />
          <UITypography
            type="mainDescription"
            title="Delve into the world of interior design with our expertly curated articles that explore the latest trends, tips, and tricks. From color palettes and furniture selection to space optimization and lighting techniques, we will guide you through the intricacies of creating a harmonious and visually appealing environment."
            sx={{
              fontSize: "16px !important",
              width: { xs: "100%", md: "90%" },
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <UITypography
            type="mainDescription"
            sx={{
              fontSize: "16px !important",
            }}
            title="Looking to sell your home or showcase a property for sale? Our blog offers invaluable insights into the art of staging. Discover how to transform any space into a magnet for potential buyers, highlighting its best features while maintaining a warm and inviting atmosphere. Stay updated with our regular blog posts, featuring before-and-after transformations, and real-life case studies that showcase the magic of interior design and staging. We are committed to providing valuable content that enriches your knowledge and ignites your creativity. "
          />
          <UITypography
            type="mainDescription"
            sx={{
              fontSize: "16px !important",
            }}
            title="Bookmark our blog now and embark on a journey of endless possibilities in the world of interior design and staging."
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={10}>
        <Grid item xs={11}>
          <Grid container spacing={3}>
            {blogData.map((item) => {
              return (
                <Grid item xs={12} md={4} key={`${item.title}-${item.id}`}>
                  <BlogsCard
                    imgSrc={item.image}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    tag={item.tag}
                    handleCardClick={() =>
                      router.push(`${pathLocations.blogs}/${item.id}`)
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item mt={5}>
          <Pagination
            // page={page}
            // onChange={handlePagination}
            count={blogData.length}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Blogs;
