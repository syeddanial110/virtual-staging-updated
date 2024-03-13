"use client";

import { ImageBASEURL, apiGet } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import FurnitureCard from "@/components/FurnitreCard/FurnitureCard";
import UIButton from "@/components/UIButton/UIButton";
import UILoader from "@/components/UILoader/UILoader";
import UITypography from "@/components/UITypography/UITypography";
import DefaultLayout from "@/layout/default-layout";
import { pathLocations } from "@/utlils/pathLocations";
import { Grid } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";

const FurnitureCategory = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [categoryData, setCategoryData] = useState({
    title: "",
  });

  const [productsData, setProductsData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getProductsByCategory = () => {
    const id = pathname.split("/");
    apiGet(
      `${ApiEndpoints.getFurnitureProducts}${id[2]}`,
      (res) => {
        setProductsData(res.products);
        setCategoryData({
          title: res.title,
        });
        setIsLoading(false);
      },
      (err) => {
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    // getCategoryProducts();
    getProductsByCategory();
  }, []);

  return (
    <DefaultLayout>
      <Grid container mt={4}>
        <Grid item xs={12}>
          <UITypography
            type="heading"
            title={`${categoryData.title} Set`}
            sx={{ textTransform: "uppercase" }}
            textAlign="center"
          />
        </Grid>
      </Grid>
      {isLoading && (
        <Grid container display="flex" justifyContent="center">
          <Grid item xs={3}>
            <UILoader />
          </Grid>
        </Grid>
      )}
      <Grid container justifyContent="center" mt={{ xs: 3, md: 8 }}>
        <Grid item xs={9} md={10}>
          <Grid
            container
            gap={3}
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            {productsData.map((item, i) => {
              return (
                <Grid
                  item
                  xs={11}
                  sm={5.5}
                  md={3.5}
                  lg={3.8}
                  key={`${item.title}-${i}`}
                >
                  <FurnitureCard
                    img={`${ImageBASEURL}${item.image}`}
                    title={item.title}
                    imgStyle={
                      {
                        // border: `1px solid #3C828E`,
                        // borderRadius: "30px",
                      }
                    }
                    onClick={() =>
                      router.push(
                        `${pathLocations.furnitureGallery}/${item.title}/${item.id}`
                      )
                    }
                    imgObjectFit="cover"
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container justifyContent="center" mt={8}>
        <Grid item xs={8} sm={6} md={3}>
          <UIButton
            label="Load more"
            variant="contained"
            fullWidth
            isDark={true}
          />
        </Grid>
      </Grid> */}
    </DefaultLayout>
  );
};

export default FurnitureCategory;
