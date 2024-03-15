"use client";
import { ImageBASEURL, apiGet } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import UITypography from "@/components/UITypography/UITypography";
import DefaultLayout from "@/layout/default-layout";
import { pathLocations } from "@/utlils/pathLocations";
import { Breadcrumbs, Grid } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ChoiceDetail = () => {
  const id = usePathname();
  const router = useRouter();

  const [choiceData, setChoiceData] = useState({
    title: "",
    image: "",
    curatedCollectionId: "",
    curatedCollectionTitle: "",
  });

  const choiceId = id.split("/")[3];

  const getCollectionById = () => {
    apiGet(
      `${ApiEndpoints.choiceById}${choiceId}`,
      (res) => {
        setChoiceData({
          title: res.title,
          image: res.image,
          curatedCollectionId: res.curated_collection.id,
          curatedCollectionTitle: res.curated_collection.title,
        });
      },
      (err) => {
        console.log("err", err);
      }
    );
  };

  useEffect(() => {
    getCollectionById();
  }, []);


  return (
    <DefaultLayout>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        my={3}
        gap={4}
      >
        <Grid item xs={11} mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href={`${pathLocations?.curatedCollection}/${parseInt(
                choiceData.curatedCollectionId
              )}`}
              style={{ color: "#3C828E" }}
            >
              Curated Collection
            </Link>
            <UITypography
              // onClick={() =>
              //   router.push(`${pathLocations?.furnitureGallery}/${title}`)
              // }
              title={choiceData.title}
            />
          </Breadcrumbs>
        </Grid>
        <Grid item xs={11} md={4}>
          <img
            src={`${ImageBASEURL}${choiceData?.image}`}
            alt="furniture-img"
            height={500}
            width={500}
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={11} md={5}>
          <UITypography
            title={`${choiceData.curatedCollectionTitle} - ${choiceData.title}`}
            // textAlign="center"
            sx={{ color: (theme) => theme.palette.primary.main }}
          />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default ChoiceDetail;
