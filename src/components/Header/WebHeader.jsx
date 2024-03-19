"use client";

import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Collapse,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logo from "../../assets/images/headerlogo.png";
import avatar from "../../assets/icons/avatar.svg";
import cart from "../../assets/icons/cart.svg";
import { menu, pages } from "@/utlils/data";
import UITypography from "../UITypography/UITypography";
import Dropdown from "react-multilevel-dropdown";
import UIDivider from "../UIDivider";
import { useRouter } from "next/navigation";
import { getToken, removeToken, removeUserId } from "@/auth/Auth";
import UIButton from "../UIButton/UIButton";
import { pathLocations } from "@/utlils/pathLocations";
import { apiGet } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const WebHeader = () => {
  const router = useRouter();
  const [curatedCollection, setCuratedCollection] = useState([]);
  const [styles, setStyles] = useState([]);

  const token = getToken();

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const menuOpen = Boolean(menuAnchorEl);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const getCuratedCollection = () => {
    apiGet(
      `${ApiEndpoints.curatedCollection}`,
      (res) => {
        setCuratedCollection(res);
      },
      (err) => {
        console.log("err", err);
      }
    );
  };
  const getAllStyles = () => {
    apiGet(
      `${ApiEndpoints.stlyes}`,
      (res) => {
        setStyles(res.styles);
      },
      (err) => {
        console.log("err", err);
      }
    );
  };

  useEffect(() => {
    getCuratedCollection();
    getAllStyles();
  }, []);

  return (
    <Grid container alignItems="center" pt={3} pb={1}>
      <Grid
        item
        lg={2}
        xl={1.5}
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
        display="flex"
        justifyContent="center"
      >
        <Image
          src={logo}
          alt="logo"
          height={80}
          onClick={() => router.push("/")}
          // style={{
          //   "&:hover": {
          //     cursor: "pointer",
          //   },
          // }}
        />
        {/* <UITypography
          type="mainDescription"
          title="Logo Here"
          isWhite={false}
          textAlign="center"
        /> */}
      </Grid>
      <Grid item xs={9} display="flex" justifyContent="center">
        <List
          sx={{ width: "80%", display: "flex" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {pages.map((item, i) => {
            if (item?.name && !item?.subLinks && !item?.subName) {
              return (
                <ListItemButton
                  key={`${item.name}-${i}`}
                  sx={{ p: 0, textAlign: "center" }}
                  // onClick={() => router.push(item.link)}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                    href={item.link}
                  >
                    <ListItemText
                      sx={{
                        color: (theme) =>
                          `${theme.palette.primary.greyShade1} !important`,
                        textAlign: "center",
                      }}
                      primary={item.name}
                    />
                  </Link>
                </ListItemButton>
              );
            } else if (item?.subLinks) {
              return (
                // <Box sx={{ display: "flex", flexDirection: "column" }}>
                <ListItemButton
                  key={i}
                  sx={{ p: 0, display: "flex", justifyContent: "center" }}
                >
                  <Dropdown
                    title={item.name}
                    buttonClassName="dropdownButton"
                    menuClassName="subLinkDropdown"
                  >
                    {item?.subLinks.map((subLink, i) => {
                      return (
                        <Dropdown.Item key={i}>
                          <Link
                            style={{
                              textDecoration: "none",
                              width: "100%",
                            }}
                            href={`${subLink.link}`}
                          >
                            <UITypography
                              title={`- ${subLink.name}`}
                              isWhite={true}
                              // textAlign="center"
                              sx={{ width: "100%" }}
                            />
                          </Link>
                        </Dropdown.Item>
                      );
                    })}
                    {/* <Dropdown.Item>
                      Item 2
                      <Dropdown.Submenu>
                        <Dropdown.Item>Subitem 1</Dropdown.Item>
                      </Dropdown.Submenu>
                    </Dropdown.Item> */}
                  </Dropdown>
                </ListItemButton>
                // </Box>
              );
            } else if (item?.subName) {
              return (
                // <Box
                //   sx={{
                //     display: "flex",
                //     flexDirection: "column",
                //   }}
                // >
                <ListItemButton
                  key={i}
                  sx={{
                    padding: '0px 0px 0px 5px',
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "195px !important",
                    display: "flex",
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    href={`${pathLocations.curatedCollection}`}
                  >
                    <UITypography
                      title="Curated Collection"
                      sx={{ padding: "8px 1px", color: "#7E7E7E" }}
                    />
                  </Link>
                  <Dropdown
                    title={
                      <ArrowDropDownIcon
                        sx={{
                          // backgroundColor: (theme) =>
                          //   theme.palette.primary.main,
                          color: "white",
                          // borderTopRightRadius: "10px",
                          // borderBottomRightRadius: "10px",
                        }}
                      />
                    }
                    menuClassName="subnameDropdown"
                    buttonClassName="dropdownButton dropDownMenu"
                  >
                    <Box sx={{ width: "100%", padding: "10px 20px" }}>
                      <Grid container gap={2}>
                        <Grid item xs={5}>
                          <Grid container gap={2}>
                            <Grid item xs={12}>
                              <UITypography
                                type="heading"
                                title="Rooms – Preview photo grid of each room below"
                                sx={{
                                  fontSize: "25px !important",
                                  // color: "black",
                                  fontWeight: "bold",
                                }}
                                isWhite={true}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <UIDivider />
                            </Grid>
                            {curatedCollection.map((subLink, i) => {
                              return (
                                <Grid item xs={12} key={i}>
                                  <Link
                                    style={{
                                      textDecoration: "none",
                                    }}
                                    href={`${pathLocations.curatedCollection}/${subLink.id}`}
                                  >
                                    <UITypography
                                      title={`- ${subLink.title}`}
                                      isWhite={true}
                                      className="subLinkTitle"
                                      sx={{ padding: "8px 1px" }}
                                    />
                                  </Link>
                                </Grid>
                              );
                            })}
                          </Grid>
                        </Grid>
                        <Grid item xs={5}>
                          <Grid container gap={2}>
                            <Grid item xs={12}>
                              <UITypography
                                type="heading"
                                title="Styles"
                                sx={{
                                  fontSize: "25px !important",
                                  // color: "black",
                                  fontWeight: "bold",
                                }}
                                isWhite={true}
                              />
                            </Grid>
                            <Grid item xs={12} mb={1}>
                              <UIDivider />
                            </Grid>
                            {styles.map((subLink, i) => {
                              return (
                                <Grid item xs={12} key={i}>
                                  <Link
                                    style={{
                                      textDecoration: "none",
                                    }}
                                    href={`${pathLocations.styles}/${subLink.id}`}
                                  >
                                    <UITypography
                                      title={`- ${subLink.title}`}
                                      isWhite={true}
                                      className="subLinkTitle"
                                      sx={{ padding: "8px 1px" }}
                                    />
                                  </Link>
                                  {/* <UITypography
                                    title={`- ${subLink.title}`}
                                    isWhite={true}
                                    className="subLinkTitle"
                                    sx={{ padding: "8px 1px" }}
                                    onClick={() =>
                                      router.push(
                                        `${pathLocations.styles}/${subLink.id}`
                                      )
                                    }
                                  /> */}
                                </Grid>
                              );
                            })}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                    {/* {item.subName.map((sub_name) => {
                      return (
                        <Dropdown.Item>
                          {sub_name.name}
                          <Dropdown.Submenu>
                            {sub_name.subLinks.map((subLink) => {
                              return (
                                <Dropdown.Item>{subLink.name}</Dropdown.Item>
                              );
                            })}
                          </Dropdown.Submenu>
                        </Dropdown.Item>
                      );
                    })} */}
                  </Dropdown>
                </ListItemButton>
                // </Box>
              );
            }
          })}
        </List>
      </Grid>
      <Grid item xs={1} display="flex" justifyContent="center">
        {token ? (
          <Box
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={handleMenuClick}
          >
            <Image
              src={avatar}
              alt="avatar"
              height={20}
              style={{
                marginRight: 14,
              }}
            />
          </Box>
        ) : (
          <Box sx={{ marginRight: 14 }}>
            <UIButton
              label="Register"
              onClick={() => router.push(pathLocations.login)}
            />
          </Box>
        )}
        {/* <Box
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Image src={cart} alt="avatar" height={20} />
        </Box> */}

        <Popover
          // id={id}
          open={menuOpen}
          anchorEl={menuAnchorEl}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          sx={{ "& .MuiPaper-root": { py: 1 } }}
        >
          {menu.map((item, i) => {
            return (
              <Box
                pr={8}
                pl={2}
                py={1.5}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "#e2e2e2",
                  },
                }}
                key={`${item.title}-${i}`}
              >
                <UITypography
                  title={item.title}
                  sx={{ color: "#4b4b4b" }}
                  onClick={() => {
                    if (item.title == "Logout") {
                      removeToken();
                      removeUserId();
                    }
                    router.push(item.link);
                  }}
                />
              </Box>
            );
          })}
        </Popover>
      </Grid>
    </Grid>
  );
};

export default WebHeader;
