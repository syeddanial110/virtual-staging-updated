"use client";

import DefaultLayout from "@/layout/default-layout";
import { Breadcrumbs, Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import UITypography from "@/components/UITypography/UITypography";
import { pathLocations } from "@/utlils/pathLocations";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { accesoriesArr } from "@/utlils/data";
import { ImageBASEURL, apiGet } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import UIButton from "@/components/UIButton/UIButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const FurnitureId = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [productsData, setProductsData] = useState({
    productName: "",
    image: "",
    categoryName: "",
    categoryId: "",
  });

  const getProduct = () => {
    const x = pathname.split("/");

    if (x.length > 0)
      apiGet(
        `${ApiEndpoints.getSingleFurnitureProduct}${x[3]}`,
        (res) => {
          setProductsData({
            productName: res.title,
            image: res.image,
            categoryName: res.category.title,
            categoryId: res.category.id,
          });
        },
        (err) => {}
      );
  };

  useEffect(() => {
    getProduct();
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
              href={pathLocations?.furnitureGallery}
              style={{ color: "#3C828E" }}
            >
              Furniture Gallery
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href={`${pathLocations?.furnitureGallery}/${productsData.categoryId}`}
              style={{ color: "#3C828E" }}
            >
              {productsData.categoryName}
            </Link>
            <UITypography
              // onClick={() =>
              //   router.push(`${pathLocations?.furnitureGallery}/${title}`)
              // }
              title={productsData.productName}
            />
          </Breadcrumbs>
          <UIButton
            onClick={() =>
              router.push(
                `${pathLocations?.furnitureGallery}/${productsData.categoryId}`
              )
            }
            label="Back"
            startIcon={<ArrowBackIcon />}
            sx={{ padding: "10px 14px", fontSize: "12px", mt: 1 }}
          />
        </Grid>
        <Grid item xs={11} md={4}>
          <img
            src={`${ImageBASEURL}${productsData?.image}`}
            alt="furniture-img"
            height={500}
            width={500}
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={11} md={5}>
          <UITypography
            title={`${productsData.categoryName} - ${productsData?.productName}`}
            // textAlign="center"
            sx={{ color: (theme) => theme.palette.primary.main }}
          />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default FurnitureId;
