"use client";

import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import footerImg from "../../assets/images/footer.png";

export const FooterWrapper = styled(Box)(({ theme, isDark }) => ({
  backgroundImage: `url('${footerImg.src}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "50vh",
  borderTopRightRadius: "40px",
  borderTopLeftRadius: "40px",
  marginTop: "80px",
}));
