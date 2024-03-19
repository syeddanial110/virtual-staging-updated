"use client";

import { ImageBASEURL, apiGet } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import UILoader from "@/components/UILoader/UILoader";
import UITypography from "@/components/UITypography/UITypography";
import DefaultLayout from "@/layout/default-layout";
import { Box, Grid } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const StyleById = () => {
  const pathname = usePathname();
  const [styleData, setStyleData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getStyleById = () => {
    const id = pathname.split("/")[2];
    console.log("id", id);
    apiGet(
      `${ApiEndpoints.styleById}${id}`,
      (res) => {
        setIsLoading(false);
        setStyleData(res.style);
      },
      (err) => {
        console.log("err", err);
      }
    );
  };

  useEffect(() => {
    getStyleById();
  }, []);

  return (
    <DefaultLayout>
      {isLoading ? (
        <Grid container justifyContent="center">
          <Grid item xs={3}>
            <UILoader />
          </Grid>
        </Grid>
      ) : (
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <UITypography
              type="heading"
              title={`Style - ${styleData?.title}`}
              textAlign="center"
            />
          </Grid>
          <Grid item xs={10}>
            <Grid
              container
              mt={3}
              gap={2}
              justifyContent={styleData?.images?.length > 3 && "center"}
            >
              {styleData?.images?.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={3.5}>
                    <Box
                      sx={{
                        backgroundColor: "white",
                        // borderRadius: "16px",
                        width: "100%",
                        height: "250px",
                        overflow: "hidden",
                        border: (theme) =>
                          `4px solid ${theme.palette.primary.main}`,
                        "&:hover": {
                          cursor: "pointer",
                          "& > img": {
                            transform: "scale(1.2) rotate(-5deg)",
                          },
                        },
                      }}
                    >
                      <img
                        src={`${ImageBASEURL}${item.image}`}
                        alt={item.style_id}
                        loading="eager"
                        style={{
                          // ...imgStyle,
                          // width: "100%",
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                          aspectRatio: 1 / 2,
                          // borderRadius: "16px",
                          transition: "all 0.3s linear",
                        }}
                      />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      )}
    </DefaultLayout>
  );
};

export default StyleById;
