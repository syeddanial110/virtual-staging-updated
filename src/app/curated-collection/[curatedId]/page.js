"use client";
import { ImageBASEURL, apiGet } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import FurnitureCard from "@/components/FurnitreCard/FurnitureCard";
import UILoader from "@/components/UILoader/UILoader";
import UITypography from "@/components/UITypography/UITypography";
import CuratedCollectionCard from "@/containers/CuratedCollection/CuratedCollectionCard";
import DefaultLayout from "@/layout/default-layout";
import { pathLocations } from "@/utlils/pathLocations";
import { Breadcrumbs, Grid, IconButton } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UIButton from "@/components/UIButton/UIButton";
import Link from "next/link";

const CuratedCollectionProducts = () => {
  const id = usePathname();
  const router = useRouter();

  const cur_id = id.split("/")[2];

  const [curatedChoices, setCuratedChoices] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getCuratedCollectionProducts = () => {
    apiGet(
      `${ApiEndpoints.curatedCollectionById}${cur_id}`,
      (res) => {
        setCuratedChoices(res);
        setIsLoading(false);
      },
      (err) => {
        console.log("err", err);
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    getCuratedCollectionProducts();
  }, []);

  return (
    <DefaultLayout>
      <Grid
        container
        justifyContent={{ xs: "center", md: "space-around" }}
        alignItems="center"
        mt={3}
      >
        <Grid item xs={11} md={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href={pathLocations?.curatedCollection}
              style={{ color: "#3C828E" }}
            >
              Curated Collections
            </Link>
            <UITypography
              // onClick={() =>
              //   router.push(`${pathLocations?.furnitureGallery}/${title}`)
              // }
              title={curatedChoices?.title}
            />
          </Breadcrumbs>
          <UIButton
            onClick={() => router.push(`${pathLocations?.curatedCollection}`)}
            label="Back"
            startIcon={<ArrowBackIcon />}
            sx={{ padding: "10px 14px", fontSize: "12px", mt: 1 }}
          />
        </Grid>
        <Grid item xs={11} md={6} mt={{ xs: 3, md: 5 }}>
          <UITypography
            type="heading"
            title={curatedChoices?.title}
            textAlign={{ xs: "center", md: "start" }}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={{ xs: 3, md: 8 }} gap={5}>
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
                {curatedChoices?.choices &&
                curatedChoices?.choices?.length > 0 ? (
                  curatedChoices?.choices.map((item, i) => {
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
                          <CuratedCollectionCard
                            img={`${ImageBASEURL}${item.image}`}
                            title={item.title}
                            onClick={() => {
                              router.push(
                                `${pathLocations.curatedCollection}/${cur_id}/${item.id}`
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

export default CuratedCollectionProducts;
