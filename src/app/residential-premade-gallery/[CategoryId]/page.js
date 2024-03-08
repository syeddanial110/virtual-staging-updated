"use client";

import { ImageBASEURL, apiGet } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import FurnitureCard from "@/components/FurnitreCard/FurnitureCard";
import UIButton from "@/components/UIButton/UIButton";
import UILoader from "@/components/UILoader/UILoader";
import UITypography from "@/components/UITypography/UITypography";
import DefaultLayout from "@/layout/default-layout";
import { accesoriesArr } from "@/utlils/data";
import { pathLocations } from "@/utlils/pathLocations";
import { SettingsOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";

const FurnitureCategory = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [categoryData, setCategoryData] = useState({
    title: "",
    image: "",
  });

  const [productsData, setProductsData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getCategoryProducts = () => {
    const id = pathname.split("/");
    apiGet(
      `${ApiEndpoints.getPremadeCategory}/${id[2]}`,
      (res) => {
        console.log("res", res);
        setCategoryData({
          title: res.data.categoryName,
          image: res.data.image,
        });
      },
      (err) => {
        console.log("err", err);
      }
    );
  };

  const getProductsByCategory = () => {
    const id = pathname.split("/");
    apiGet(
      `${ApiEndpoints.getPremadeProduct}/?category=${id[2]}`,
      (res) => {
        setProductsData(res.data);
        setIsLoading(false);
      },
      (err) => {
        console.log("err", err);
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    getCategoryProducts();
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
      {isLoading && <UILoader />}
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
                    img={`${item.image}`}
                    title={item.productName}
                    imgStyle={{
                      border: `1px solid #3C828E`,
                      borderRadius: "30px",
                    }}
                    onClick={() =>
                      router.push(
                        `${pathLocations.premadeGallery}/${item.productName}/${item._id}`
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
      <Grid container justifyContent="center" mt={8}>
        <Grid item xs={8} sm={6} md={3}>
          <UIButton
            label="Load more"
            variant="contained"
            fullWidth
            isDark={true}
          />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default FurnitureCategory;
