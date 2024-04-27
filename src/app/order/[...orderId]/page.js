"use client";
import UITypography from "@/components/UITypography/UITypography";
import StyleCard from "@/containers/PlaceOrder/StyleCard";
import DefaultLayout from "@/layout/default-layout";
import { Box, Chip, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import styleImg from "../../../assets/images/bedroomCollection.jpg";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UIButton from "@/components/UIButton/UIButton";
import { pathLocations } from "@/utlils/pathLocations";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { ImageBASEURL, apiGet, apiGetWithoutToken } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import UICheckbox from "@/components/UICheckbox/UICheckbox";
import UISimpleTextField from "@/components/UITextField/UISimpleTextField";
import UIDivider from "@/components/UIDivider";

const ViewOrderDetail = () => {
  const router = useRouter();

  const [specticOrderData, setSpecticOrderData] = useState({});
  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

  const pathname = usePathname();

  const getSpecificOrder = () => {
    const id = pathname.split("/")[2];
    apiGetWithoutToken(
      `${ApiEndpoints.getSingleOrder}${id}`,
      (res) => {
        setSpecticOrderData(res.order);
      },
      (err) => {}
    );
  };

  useEffect(() => {
    getSpecificOrder();
  }, []);

  return (
    <DefaultLayout>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <UITypography
            type="heading"
            title="View Order Detail"
            textAlign="center"
          />
        </Grid>
        <Grid item xs={10}>
          <Grid container gap={3}>
            <Grid item xs={12}>
              <UITypography type="mainDescription" title="Basic Information" />
            </Grid>
            <Grid item xs={12}>
              <UITypography title={`Name: ${specticOrderData?.name}`} />
              <UITypography title={`Email: ${specticOrderData?.email}`} />
              <UITypography title={`Phone Number: ${specticOrderData.phone}`} />
            </Grid>

            {specticOrderData.service_name !== "Virtual Twilights" && (
              <>
                <Grid item xs={12}>
                  <UITypography
                    type="mainDescription"
                    title="Your selected style"
                  />
                </Grid>
                <Grid item xs={3}>
                  <StyleCard
                    title={specticOrderData?.style?.title}
                    img={`${ImageBASEURL}${specticOrderData?.style?.images[0]?.image}`}
                    // onClick={() => {
                    //   setIsSelected(item.id);
                    //   disptach(
                    //     addOrderData({
                    //       styleId: item.id,
                    //       styleName: item.title,
                    //       styleImage: item.image,
                    //     })
                    //   );
                    // }}
                    imgArr={specticOrderData?.style?.images}
                    // isSelected={isSelected}
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <UITypography
                type="mainDescription"
                title="Your uploaded images"
              />
            </Grid>
            <Grid item xs={12}>
              {specticOrderData?.order_items?.length > 0 &&
                specticOrderData?.order_items?.map((item, i) => {
                  return (
                    <Grid
                      container
                      sx={{
                        boxShadow: "0 4px 16px 4px #d1d1d1",
                      }}
                      gap={3}
                      mt={5}
                    >
                      <Grid
                        item
                        xs={3.5}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        pt={3}
                      >
                        <UITypography title="Before" />
                        <a
                          href={item.image}
                          download={true}
                          target="_blank"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <Box
                            sx={{
                              backgroundImage: `url('${item.image}')`,
                              backgroundSize: "contain",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                              width: "100%",
                              minHeight:
                                item.completed_image != null
                                  ? "200px"
                                  : "400px",
                              backgroundColor: (theme) =>
                                theme.palette.primary.greyShade7,
                            }}
                          ></Box>
                        </a>
                        {item.completed_image != null && (
                          <>
                            {/* <Box sx={{ width: '100%', my: 1 }}>
                              <UIDivider />
                            </Box> */}
                            <UITypography title="After" />
                            <a
                              href={item.completed_image}
                              download
                              target="_blank"
                              style={{ width: "100%", height: "100%" }}
                            >
                              <Box
                                sx={{
                                  backgroundImage: `url('${item.completed_image}')`,
                                  backgroundSize: "contain",
                                  backgroundPosition: "center",
                                  backgroundRepeat: "no-repeat",
                                  width: "100%",
                                  minHeight: "200px",
                                  backgroundColor: (theme) =>
                                    theme.palette.primary.greyShade7,
                                }}
                              ></Box>
                            </a>
                          </>
                        )}
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        sx={{
                          borderRightWidth: "1px",
                          borderRightColor: (theme) =>
                            theme.palette.primary.greyShade3,
                          borderRightStyle: "solid",
                          paddingRight: "12px",
                          py: 2,
                        }}
                      >
                        <Stack gap={2} py={2}>
                          <UITypography
                            title="Curated Collection"
                            sx={{ fontSize: "18px !important" }}
                          />
                          <UITypography
                            title={item?.curated_collection?.title}
                          />
                          <UITypography title="Selected additional items to be added" />
                          <UITypography
                            title="(Basic items added)"
                            sx={{
                              color: (theme) =>
                                theme.palette.primary.greyShade5,
                            }}
                          />
                          <Grid container>
                            <List>
                              {item?.choices.map((elm) => {
                                return (
                                  <ListItem>
                                    <ListItemIcon sx={{ minWidth: "40px" }}>
                                      <CheckCircleIcon
                                        sx={{
                                          color: (theme) =>
                                            theme.palette.primary.main,
                                        }}
                                      />
                                    </ListItemIcon>
                                    <ListItemText primary={`${elm.title}`} />
                                  </ListItem>
                                );
                              })}
                            </List>
                          </Grid>
                        </Stack>

                        <UITypography title="Other notes" sx={{ pt: 2 }} />
                        <UITypography
                          title={`${
                            item.additional_notes != null
                              ? item.additional_notes
                              : "No Other notes"
                          }`}
                          sx={{ pt: 2 }}
                        />
                      </Grid>
                      {item.additional_services.length > 0 ? (
                        <Grid item xs={3.5}>
                          <Stack gap={1} py={2}>
                            <UITypography
                              title="Additional services"
                              sx={{ fontSize: "18px !important" }}
                            />
                            <List>
                              {item.additional_services.map((elm) => {
                                return (
                                  <ListItem>
                                    <ListItemIcon sx={{ minWidth: "40px" }}>
                                      <CheckCircleIcon
                                        sx={{
                                          color: (theme) =>
                                            theme.palette.primary.main,
                                        }}
                                      />
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={`${elm.service_name} - $${elm.service_price}`}
                                    />
                                  </ListItem>
                                );
                              })}
                            </List>
                          </Stack>
                        </Grid>
                      ) : (
                        <Box pt={4}>
                          <UITypography title="No Additional Services" />
                        </Box>
                      )}
                    </Grid>
                  );
                })}
            </Grid>
            <Grid item xs={12}>
              <UITypography type="mainDescription" title="Total Price" />
            </Grid>
            <Grid item xs={12}>
              <UITypography title={`$${specticOrderData.total_price}`} />
            </Grid>
            <Grid item xs={4}>
              <UIButton
                variant="contained"
                label="Back to Orders"
                onClick={() => router.push(pathLocations.order)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default ViewOrderDetail;
