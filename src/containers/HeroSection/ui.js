import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import bgBorder from "../../assets/images/bg-border.png";
import bgBorder2 from "../../assets/images/bg-border2.svg";
import bannerBg from "../../assets/images/banner.png";

export const UISliderBox = styled(Box)(({ theme, img }) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,

  [theme.breakpoints.down("sm")]: {
    height: "100%",
  },
  [theme.breakpoints.up("md")]: {
    height: "72%",
  },

  [theme.breakpoints.up("sm")]: {
    height: "90%",
  },
  // backgroundImage: `url('${img.src}')`,
  // // maskImage: `url('${img.src}')`,
  // maskSize: "100%",
  // maskRepeat: "no-repeat",
  // width: "100%",
  // height: "800px",
  // // minHeight: "800px",
  // backgroundSize: "contain",
  // backgroundPosition: "right bottom",
  // backgroundRepeat: "no-repeat",
  // // borderTopRightRadius: "20px",
  // borderTopLeftRadius: "20px",

  // position: "absolute",
  // top: 0,
  // left: 0,
  // width: "100%",
  // clipPath: "inherit",
  // position: "absolute",
  // top: 0,
  // left: 0,
  // clipPath: "polygon(100% 0, 100% 100%, 50% 100%, 50% 80%, 0 80%, 0 0)",
  // transition: "clip-path 0.5s cubic-bezier(0,.81,.97,-0.2)",

  // [theme.breakpoints.down("lg")]: {
  //   backgroundPosition: "center",
  // },
  // [theme.breakpoints.down("sm")]: {
  //   minHeight: "50vh",
  // },
  // [theme.breakpoints.up("sm")]: {
  //   minHeight: "120vh",
  // },
}));

export const UIBgBox = styled(Box)(({ theme, img }) => ({
  width: "100%",
  // height: "900px",
  // minHeight: "643px",
  height: "800px",

  [theme.breakpoints.down("lg")]: {
    height: "650px",
  },

  [theme.breakpoints.down("md")]: {
    height: "450px",
  },

  [theme.breakpoints.up("xl")]: {
    height: "900px !important",
  },

  // [theme.breakpoints.up("lg")]: {
  //   maskImage: `url(
  //     "${bannerBg.src}"
  //   )`,
  //   "-webkit-mask-repeat": "no-repeat",
  //   maskRepeat: "no-repeat",
  //   maskSize: "100%",
  //   maskPosition: "top",
  //   height: "760px",
  // },

  position: "relative",

  // backgroundImage: `url('${bgBorder2.src}')`,
  // backgroundImage: `url('https://chris-virtual-staging.vercel.app/_next/static/media/banner.a5706cf0.png')`,
  // width: "100%",
  // height: "800px",
  // minHeight: "800px",
  // backgroundSize: "cover",
  // backgroundPosition: "right bottom",
  // backgroundRepeat: "no-repeat",
  borderTopRightRadius: "0px",
  borderTopLeftRadius: "0px",
  // position: "relative",
  // clipPath: "polygon(100% 0, 100% 100%, 50% 100%, 50% 80%, 0 80%, 0 0)",
  // clipPath: "polygon(100% 0, 100% 100%, 50% 100%, 50% 80%, 0 80%, 0 0)",
  // transition: "clip-path 0.5s cubic-bezier(0,.81,.97,-0.2)",

  // [theme.breakpoints.down("lg")]: {
  //   backgroundPosition: "center",
  // },
  // [theme.breakpoints.down("sm")]: {
  //  minHeight: "50vh",
  // },
  // [theme.breakpoints.up("sm")]: {
  // minHeight: "120vh",
  // },
}));
