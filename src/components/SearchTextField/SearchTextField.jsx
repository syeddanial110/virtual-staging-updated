import React from "react";
import { UIStyledSearchButton, UIStyledTextField } from "./ui";
import { Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchTextField = ({ ...props }) => {
  return (
    <>
      <UIStyledTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#A2A2A2" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ height: "45px !important", maxHeight: "100% !important" }}
            >
              <UIStyledSearchButton variant="contained">
                Search
              </UIStyledSearchButton>
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </>
  );
};

export default SearchTextField;
