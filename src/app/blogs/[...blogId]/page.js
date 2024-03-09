"use client";

import UITypography from "@/components/UITypography/UITypography";
import DefaultLayout from "@/layout/default-layout";
import { blogData } from "@/utlils/data";
import {
  Avatar,
  Box,
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";

const BlogById = (props) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const id = pathname.split("/")[2];

  const filteredBlog = blogData.filter((item) => item.id == id);
  const [blog, setBlog] = useState({});
  useEffect(() => {
    setBlog(filteredBlog[0]);
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <DefaultLayout>
      {blog && !isLoading ? (
        <Grid container px={3} justifyContent="space-around">
          <Grid item xs={7}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <UITypography type="mainHeading" title={blog?.title} />
              </Grid>
              <Grid item xs={12}>
                <UITypography
                  title={blog?.description}
                  sx={{
                    color: (theme) => theme.palette.primary.blackShade1,
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ overflow: "hidden" }}>
                <Image src={blog?.image} alt="image" height={410} />
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  sx={{
                    borderLeftWidth: "1px",
                    borderLeftColor: (theme) => theme.palette.primary.main,
                    borderLeftStyle: "solid",
                    paddingLeft: "10px",
                  }}
                >
                  <Grid item xs={6} display="flex" alignItems="center">
                    <Avatar />
                    <Box pl={2}>
                      <UITypography
                        title="Author Name"
                        sx={{ fontWeight: "bold" }}
                      />
                      <UITypography title="Designation" />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <AccessTimeIcon />
                    <UITypography title={blog.date} />
                  </Grid>
                </Grid>
              </Grid>
              {blog?.listsDescription && (
                <Grid item xs={12}>
                  <UITypography title={blog?.listsDescription} />
                </Grid>
              )}
              {blog?.lists?.map((item, i) => {
                return (
                  <Grid item xs={12} key={`${item.heading}-${i}`}>
                    <UITypography
                      sx={{ fontWeight: "bold" }}
                      title={item?.heading}
                    />
                    <UITypography title={item?.description} />
                  </Grid>
                );
              })}
              {blog?.blogDesciptions?.map((item, i) => {
                return (
                  <Grid item xs={12} key={`${item.blogDescription}-${i}`}>
                    <UITypography title={item?.blogDescription} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container gap={3}>
              <Grid item xs={12}>
                <TextField
                  label="Search"
                  //   sx={{ m: 1, width: "25ch" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <UITypography
                  type="heading"
                  title="Recent Blogs"
                  sx={{ fontSize: "25px" }}
                />
              </Grid>
              {["", "", ""].map((item, i) => {
                return (
                  <Grid
                    item
                    xs={12}
                    key={i}
                    sx={{
                      borderLeftWidth: "4px",
                      borderLeftColor: (theme) => theme.palette.primary.main,
                      borderLeftStyle: "solid",
                      paddingLeft: "10px",
                    }}
                  >
                    <UITypography
                      title={blog.date}
                      sx={{ fontSize: "11px !important" }}
                    />
                    <UITypography
                      type="heading"
                      title="Recent blog 1"
                      sx={{ fontSize: "25px" }}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Box
          sx={{
            height: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </DefaultLayout>
  );
};

export default BlogById;
