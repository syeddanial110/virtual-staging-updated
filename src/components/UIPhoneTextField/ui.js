import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const CountryListWrapper = styled(Box)(({ theme, error }) => ({
  //   height: "100%",
  //   width: "100%",
  //   backgroundColor: "white",
  borderRadius: "0.5rem !important",

  //   "& .form-control": {
  //     padding: "10px 14px 10px 58px",
  //     // width: "100%",
  //     borderRadius: "8px",
  //     borderColor: error && "red",

  //     "&:hover": {
  //       borderColor: error && "red",
  //     },
  //     "&:focus": {
  //       borderColor: error && "red",
  //       boxShadow: "none",
  //     },
  //   },
  "& > div > input": {
    padding: "12px 14px 12px 56px !important",
  },
  "& .special-label": {
    display: "none",
    left: "10px",
    color: error && "red",
    // fontFamily: "'Open Sans', 'sans-serif'",
    fontSize: "0.7rem",
  },
}));
