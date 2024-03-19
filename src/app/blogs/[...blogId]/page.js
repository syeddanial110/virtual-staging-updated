"use client";

import UITypography from "@/components/UITypography/UITypography";
import DefaultLayout from "@/layout/default-layout";
import {
  Avatar,
  Box,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import { pathLocations } from "@/utlils/pathLocations";
import { ImageBASEURL, apiGet } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import authorImg from "../../../assets/images/headerlogo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UIButton from "@/components/UIButton/UIButton";

const BlogById = (props) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const id = pathname.split("/")[2];
  const router = useRouter();

  const [blog, setBlog] = useState({});

  const [recentBlogs, setRecentBlogs] = useState([]);

  const getBlogById = () => {
    apiGet(
      `${ApiEndpoints.getSingleBlog}${id}`,
      (res) => {
        console.log("res getBlogById", res);
        setIsLoading(false);
        setBlog(res.blog);
      },
      (err) => {
        console.log("err", err);
      }
    );
  };

  const getRecentBlogs = () => {
    apiGet(
      `${ApiEndpoints.recentBlogs}`,
      (res) => {
        console.log("res getRecentBlogs", res);
        setRecentBlogs(res.recentBlogs);
      },
      (err) => {
        console.log("err", err);
      }
    );
  };

  useEffect(() => {
    // setBlog(filteredBlog[0]);
    // setInterval(() => {
    //   setIsLoading(false);
    // }, 2000);
    getRecentBlogs();
    getBlogById();
  }, []);

  return (
    <DefaultLayout>
      {blog && !isLoading ? (
        <Grid container px={3} justifyContent="space-around">
          <Grid item xs={11} md={7}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <UIButton
                  onClick={() => router.push(pathLocations.blogs)}
                  label="Back"
                  startIcon={<ArrowBackIcon />}
                />
              </Grid>
              <Grid item xs={12}>
                <UITypography type="mainHeading" title={blog?.title} />
              </Grid>
              <Grid item xs={12}>
                <UITypography
                  title={blog?.short_description}
                  sx={{
                    color: (theme) => theme.palette.primary.blackShade1,
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ overflow: "hidden" }}>
                <img
                  src={`${ImageBASEURL}${blog?.image}`}
                  alt="image"
                  height={410}
                />
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
                  <Grid item xs={7} display="flex" alignItems="center">
                    <Image src={authorImg} width={70} height={70} />
                    <Box pl={2}>
                      <UITypography
                        title="Author Name: Picture Perfect Virtual Staging"
                        sx={{ fontWeight: "bold" }}
                      />
                      {/* <UITypography title="Designation" /> */}
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <AccessTimeIcon />
                    <UITypography title={blog.published_date} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <div
                  dangerouslySetInnerHTML={{ __html: blog.long_description }}
                />
              </Grid>
              {/* {blog?.listsDescription && (
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
              })} */}
            </Grid>
          </Grid>
          <Grid item xs={12} md={3} pt={5}>
            <Grid container gap={3}>
              {/* <Grid item xs={12}>
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
              </Grid> */}
              <Grid item xs={12}>
                <UITypography
                  type="heading"
                  title="Recent Blogs"
                  sx={{ fontSize: "25px" }}
                />
              </Grid>
              {recentBlogs.map((item, i) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={3.5}
                    md={12}
                    key={i}
                    sx={{
                      borderLeftWidth: "4px",
                      borderLeftColor: (theme) => theme.palette.primary.main,
                      borderLeftStyle: "solid",
                      paddingLeft: "10px",
                      display: "flex",
                      flexDirection: { xs: "row", sm: "column", md: "row" },
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={() =>
                      router.push(`${pathLocations.blogs}/${item.id}`)
                    }
                  >
                    <img
                      src={`${ImageBASEURL}${item.image}`}
                      alt={item.title}
                      height={60}
                      width={80}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <Box ml={{ xs: 3, sm: 0, md: 3 }}>
                      <UITypography
                        type="heading"
                        title={
                          item.title.length > 21
                            ? `${item.title.slice(0, 20)}...`
                            : item.title
                        }
                        sx={{ fontSize: "25px" }}
                      />
                      <UITypography
                        title={
                          item.short_description.length > 40
                            ? `${item.short_description.slice(0, 40)}...`
                            : item.short_description
                        }
                        sx={{ fontSize: "11px !important" }}
                      />
                    </Box>
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
