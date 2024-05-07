"use client";

import UITypography from "@/components/UITypography/UITypography";
import DefaultLayout from "@/layout/default-layout";
import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import aboutusLine from "../../assets/images/aboutusLine.png";
import Image from "next/image";
import UIDivider from "@/components/UIDivider";
import SearchTextField from "@/components/SearchTextField/SearchTextField";
import FurnitureCard from "@/components/FurnitreCard/FurnitureCard";
import { furnitureArr } from "@/utlils/data";
import UIButton from "@/components/UIButton/UIButton";
import { pathLocations } from "@/utlils/pathLocations";
import { useRouter } from "next/navigation";
import { ImageBASEURL, apiGet } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import UILoader from "@/components/UILoader/UILoader";
import { FurnitureBoxWrapper } from "@/containers/FurnitureGallery/ui";

const FutureGallery = () => {
  const router = useRouter();

  const [categoryData, setCategoryData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [filteredCategory, setFilteredCategory] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getCategory = () => {
    apiGet(
      `${ApiEndpoints.getFurnitureCategory}`,
      (res) => {
        setIsLoading(false);
        setCategoryData(res);
        setFilteredCategory(res);
      },
      (err) => {
        setIsLoading(false);
      }
    );
  };

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
    const x = categoryData.filter((elm) =>
      elm.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCategory(x);
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    if (searchVal.length < 0) {
      setFilteredCategory(categoryData);
    }
  }, [searchVal]);

  return (
    <DefaultLayout>
      <FurnitureBoxWrapper className="funitureBanner">
        <Grid
          container
          alignItems="center"
          justifyContent={{ xs: "center", md: "flex-end" }}
        >
          <Grid
            item
            xs={11}
            md={9}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <UITypography
              type="mainHeading"
              title="ELEVATE YOUR SPACE WITH "
              sx={{ color: (theme) => theme.palette.primary.white }}
            />
            <UITypography
              type="mainHeading"
              title="DESIGNER FURNITURE FOR "
              sx={{ color: (theme) => theme.palette.primary.white }}
            />
            <UITypography
              type="mainHeading"
              title="EVERY ROOM"
              sx={{ color: (theme) => theme.palette.primary.white }}
            />
          </Grid>
          <Grid
            item
            xs={11}
            md={9}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <UITypography
              type="mainHeading"
              title="ELEVATE YOUR SPACE WITH DESIGNER FURNITURE FOR EVERY ROOM"
              sx={{ color: (theme) => theme.palette.primary.main }}
            />
          </Grid>
          <Grid item xs={11} md={9}>
            <Grid
              container
              gap={2}
              // justifyContent="center"
              mt={{ xs: 2, lg: 12 }}
              // px={3}
            >
              <Grid
                item
                xs={12}
                md={6}
                lg={3}
                display={{ xs: "none", md: "flex" }}
                justifyContent={{ xs: "center", lg: "flex-end" }}
              >
                <Image
                  src={aboutusLine}
                  alt="line"
                  style={{ height: "6px", width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} lg={8}>
                <UITypography
                  type="mainDescription"
                  title="With a wealth of firsthand experience working alongside top producing real estate agents, Chris understands the significance of presentation in the industry. Taking this understanding to heart, she personally oversees the selection of virtual furniture for our gallery, collaborating closely with talented designers to ensure the highest levels of realism, trendiness, and quality that distinguish us from the competition."
                  sx={{
                    fontSize: "16px !important",
                    width: { xs: "100%", md: "90%" },
                    color: (theme) => theme.palette.primary.white,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FurnitureBoxWrapper>
      <Grid container justifyContent="center" mt={{ xs: 5, md: 8 }}>
        <Grid item xs={11} md={6}>
          <SearchTextField
            fullWidth
            placeholder="Search"
            onChange={handleSearch}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={8} gap={5}>
        <Grid item xs={11}>
          {isLoading && (
            <Grid container display="flex" justifyContent="center">
              <Grid item xs={3}>
                <UILoader />
              </Grid>
            </Grid>
          )}

          <Grid container gap={3} justifyContent="center">
            {!isLoading && (
              <>
                {filteredCategory.length > 0 ? (
                  filteredCategory.map((item, i) => {
                    return (
                      <>
                        <Grid
                          item
                          // xs={11}
                          // sm={5}
                          // md={3.5}
                          // lg={3.5}
                          // xl={3.5}
                          // xxl={3.5}
                          // xxxl={1.5}
                          key={`${item.title}-${i}`}
                          display="flex"
                          // justifyContent="center"
                          flexWrap="wrap"
                        >
                          <FurnitureCard
                            img={`${ImageBASEURL}${item.image}`}
                            title={item.title}
                            onClick={() => {
                              router.push(
                                `${pathLocations.furnitureGallery}/${item.id}`
                              );
                            }}
                            imgObjectFit="cover"
                            imgAlt={item.title}
                          />
                        </Grid>
                      </>
                    );
                  })
                ) : (
                  <Grid item xs={12}>
                    <UITypography title="No record found" textAlign="center" />
                  </Grid>
                )}
              </>
            )}
          </Grid>
        </Grid>
        {/* <Grid item xs={8} md={4}>
          <UIButton variant="contained" label="View all Products" fullWidth />
        </Grid> */}
      </Grid>
    </DefaultLayout>
  );
};

export default FutureGallery;
