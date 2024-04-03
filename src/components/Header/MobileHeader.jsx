import {
  Box,
  Collapse,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Popover,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/headerlogo.png";

import avatar from "../../assets/icons/avatar.svg";
import cart from "../../assets/icons/cart.svg";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import UITypography from "../UITypography/UITypography";
import UIDivider from "../UIDivider";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { menu, pages } from "@/utlils/data";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import { getToken, removeToken, removeUserId } from "@/auth/Auth";
import { apiGet } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import { pathLocations } from "@/utlils/pathLocations";
import UIButton from "../UIButton/UIButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const MobileHeader = () => {
  const router = useRouter();
  const [curatedCollection, setCuratedCollection] = useState([]);
  const [styles, setStyles] = useState([]);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const token = getToken();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [open, setOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [curatedCollectionOpen, setCuratedCollectionOpen] = useState(false);

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const menuOpen = Boolean(menuAnchorEl);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleAboutClick = () => {
    setAboutUsOpen(!aboutUsOpen);
  };
  const handleServiceClick = () => {
    setServicesOpen(!servicesOpen);
  };
  const handleCuratedClick = () => {
    setCuratedCollectionOpen(!curatedCollectionOpen);
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const getCuratedCollection = () => {
    apiGet(
      `${ApiEndpoints.curatedCollectionPage}`,
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

  const list = (anchor) => (
    <Box
      sx={{
        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : { xs: "100vw", sm: 450 },
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid container justifyContent="center" gap={2} py={2}>
        <Grid item xs={9}>
          <Image
            src={logo}
            alt="logo"
            height={60}
            onClick={() => router.push("/")}
          />
          {/* <UITypography
            type="mainDescription"
            title="Logo Here"
            isWhite={false}
            // textAlign="center"
          /> */}
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="flex-end">
          <IconButton
            sx={{ p: 0 }}
            onClick={() => {
              setState({ ...state, right: false });
            }}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid item xs={11}>
          <UIDivider />
        </Grid>
      </Grid>
      <List sx={{ paddingLeft: "20px" }}>
        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        {pages.map((item, i) => {
          if (item?.name && !item?.subLinks && !item?.subName) {
            return (
              <ListItemButton
                key={`${item.name}-${i}`}
                onClick={() => router.push(item.link)}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            );
          } else if (item?.subLinks) {
            return (
              <>
                <ListItemButton
                  onClick={
                    item.name == "About Us"
                      ? handleAboutClick
                      : handleServiceClick
                  }
                >
                  <ListItemText primary={item.name} />
                  {aboutUsOpen || servicesOpen ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItemButton>
                <Collapse
                  in={item.name == "About Us" ? aboutUsOpen : servicesOpen}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.subLinks.map((subLink, i) => {
                      return (
                        <ListItemButton
                          onClick={() => router.push(subLink.link)}
                          key={i}
                          sx={{ pl: 4 }}
                        >
                          <ListItemText primary={subLink.name} />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              </>
            );
          } else if (item?.subName) {
            return (
              <>
                <ListItemButton onClick={handleCuratedClick}>
                  <ListItemText primary={item.name} />
                  {curatedCollectionOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={curatedCollectionOpen}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {curatedCollection.map((subLink, i) => {
                      return (
                        <Grid item xs={12} key={i}>
                          <UITypography
                            title={`- ${subLink.title}`}
                            isWhite={true}
                            className="subLinkTitle"
                            sx={{
                              padding: "8px 30px",
                              color: "black",
                              fontSize: "16px !important",
                            }}
                            onClick={() =>
                              router.push(
                                `${pathLocations.curatedCollection}/${subLink.id}`
                              )
                            }
                          />
                        </Grid>
                      );
                    })}
                  </List>
                </Collapse>
              </>
            );
          }
        })}
      </List>
    </Box>
  );

  return (
    <Grid container alignItems="center" py={1}>
      <Grid item xs={9} sm={4} md={3}>
        <Image
          src={logo}
          alt="logo"
          height={60}
          onClick={() => router.push("/")}
          style={{ paddingLeft: "20px" }}
        />
        {/* <UITypography
          type="mainDescription"
          title="Logo Here"
          isWhite={false}
          textAlign="center"
        /> */}
      </Grid>
      <Grid
        item
        xs={3}
        sm={7}
        md={8}
        display="flex"
        justifyContent="flex-end"
        px={1}
      >
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
          <Box display="flex">
            <UIButton
              label="Order Now"
              onClick={() => router.push(pathLocations.placeOrder)}
              sx={{ padding: "5px 8px", fontSize: "12px", minWidth: "100px" }}
            />
            <Tooltip title="Register">
              <IconButton onClick={() => router.push(pathLocations.login)}>
                <PersonAddIcon
                  sx={{ color: (theme) => theme.palette.primary.main }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        )}

        {/* <Image src={cart} alt="avatar" height={20} /> */}
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton
              onClick={toggleDrawer(anchor, true)}
              sx={{ px: 1, py: 0 }}
            >
              <MenuOpenIcon
                sx={{ color: (theme) => theme.palette.primary.blackShade1 }}
              />
            </IconButton>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Grid>
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
  );
};

export default MobileHeader;
