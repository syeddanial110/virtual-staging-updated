import { Box } from "@mui/material";
import { styled } from "@mui/system";
import bgImg from "../../assets/images/bedroom2.jpg";

export const LoginWrapper = styled(Box)(({ theme, isDark }) => ({
  backgroundImage: `linear-gradient(to bottom, rgb(44 44 44 / 53%), rgb(52 52 52 / 20%)), url('${bgImg.src}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

export const FormWrapper = styled(Box)(({ theme, isDark }) => ({
  //   backgroundColor: "#646464b3",
  //   borderRadius: "16px",
  //   filter: "blur(2px)",
  /* From https://css.glass */
  background: "rgba(255, 255, 255, 0.14)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(6.5px)",
  //   border: "1px solid rgba(255, 255, 255, 0.3)",
  padding: "20px 25px",
}));
