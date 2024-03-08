import { Grid } from "@mui/material";
import React from "react";
import CurrentOrderCard from "./CurrentOrderCard";

const CurrentOrders = () => {
  return (
    <Grid container gap={3}>
      <Grid item xs={4}>
        <CurrentOrderCard />
      </Grid>
      <Grid item xs={4}>
        <CurrentOrderCard />
      </Grid>
    </Grid>
  );
};

export default CurrentOrders;
