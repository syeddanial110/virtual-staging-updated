"use client";

import React, { useState } from "react";
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
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import avatar from "../../assets/icons/avatar.svg";
import cart from "../../assets/icons/cart.svg";
import { menu, pages } from "@/utlils/data";
import UITypography from "../UITypography/UITypography";
import Dropdown from "react-multilevel-dropdown";
import UIDivider from "../UIDivider";
import { useRouter } from "next/navigation";

const WebHeader = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const menuOpen = Boolean(menuAnchorEl);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

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
                  onClick={() => router.push(item.link)}
                >
                  <ListItemText
                    sx={{
                      color: (theme) =>
                        `${theme.palette.primary.greyShade1} !important`,
                    }}
                    primary={item.name}
                  />
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
                        <Dropdown.Item
                          key={i}
                          // onClick={() => doSomething()}
                        >
                          <UITypography
                            title={`- ${subLink.name}`}
                            isWhite={true}
                            // textAlign="center"
                            onClick={() => router.push(subLink.link)}
                            sx={{ width: "100%" }}
                          />
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
                  sx={{ p: 0, display: "flex", justifyContent: "center" }}
                >
                  <Dropdown
                    title={item.name}
                    menuClassName="subnameDropdown"
                    buttonClassName="dropdownButton"
                  >
                    <Box sx={{ width: "100%", padding: "10px 20px" }}>
                      <Grid container gap={2}>
                        <Grid item xs={5}>
                          <Grid
                            container
                            gap={2}
                            // sx={{ height: "80vh", overflowY: "scroll" }}
                            // className="headerScroll"
                          >
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
                            {item?.subName[0].subLinks.map((subLink, i) => {
                              return (
                                <Grid item xs={12} key={i}>
                                  <UITypography
                                    title={`- ${subLink.name}`}
                                    isWhite={true}
                                    className="subLinkTitle"
                                    sx={{ padding: "8px 1px" }}
                                  />
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
                            {item?.subName[1].subLinks.map((subLink, i) => {
                              return (
                                <Grid item xs={12} key={i}>
                                  <UITypography
                                    title={`- ${subLink.name}`}
                                    isWhite={true}
                                    className="subLinkTitle"
                                    sx={{ padding: "8px 1px" }}
                                  />
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
                  onClick={() => router.push(item.link)}
                />
              </Box>
            );
          })}
        </Popover>

        {/* <Menu
          id="basic-menu"
          anchorEl={menuAnchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu> */}
      </Grid>
    </Grid>
  );
};

export default WebHeader;
