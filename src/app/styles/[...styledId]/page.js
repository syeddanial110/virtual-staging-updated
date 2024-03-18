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
            <Grid container mt={3} gap={2}>
              {styleData?.images?.map((item) => {
                return (
                  <Grid item xs={2.8}>
                    <Box
                      sx={{
                        "&:hover": {
                          cursor: "pointer",
                        },
                        // width: "350px",
                        // height: "350px",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "white",
                          // borderRadius: "16px",
                          width: "250px",
                          height: "250px",
                          overflow: "hidden",
                          border: (theme) =>
                            `4px solid ${theme.palette.primary.main}`,
                          "&:hover": {
                            "& > img": {
                              transform: "scale(1.2) rotate(-5deg)",
                            },
                          },
                        }}
                      >
                        <img
                          src={`${ImageBASEURL}${item.image}`}
                          alt={item.style_id}
                          height={260}
                          width={150}
                          loading="eager"
                          style={{
                            // ...imgStyle,
                            // width: "100%",
                            width: "250px",
                            height: "250px",
                            objectFit: "cover",
                            aspectRatio: 1 / 2,
                            // borderRadius: "16px",
                            transition: "all 0.3s linear",
                          }}
                        />
                      </Box>
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
