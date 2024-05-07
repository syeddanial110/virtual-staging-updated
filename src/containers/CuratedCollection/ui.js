import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import curatedCollectionBanner from "../../assets/images/curatedCollectionBanner.jpg";

export const CuratedCollectionWrapper = styled(Box)(({ theme, isDark }) => ({
  backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 40%), rgb(0 0 0 / 30%)), url('${curatedCollectionBanner.src}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  borderBottomRightRadius: "16px",
  borderBottomLeftRadius: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
