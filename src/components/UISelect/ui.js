import { styled } from "@mui/system";
import { Select } from "@mui/material";

export const UIStyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: theme.palette.primary.white  ,
  color: theme.palette.primary.greyShade1,
  minWidth: "200px",
  borderRadius: "12px",
  "> svg": {
    fill: `${theme.palette.primary.greyShade1}`,
    fontSize: "40px",
  },
}));
