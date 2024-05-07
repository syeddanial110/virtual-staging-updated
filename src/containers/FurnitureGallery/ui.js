import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import bgBorder from "../../assets/images/bg-border.png";
import bgBorder2 from "../../assets/images/bg-border2.svg";
import bannerBg from "../../assets/images/banner.png";
import furnitureBg from "../../assets/images/services/reno/virtual reno 9 after.jpg";

export const FurnitureBoxWrapper = styled(Box)(({}) => ({
  backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 65%), rgb(0 0 0 / 65%)), url('${furnitureBg.src}')`,
  height: "100vh",
  width: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
}));
