import { Grid } from "@mui/material";
import React from "react";
import CurrentOrderCard from "./CurrentOrderCard";

const CurrentOrders = ({ ordersData }) => {
  return (
    <Grid container gap={1}>
      {ordersData.length > 0 &&
        ordersData.map((item) => {
          return (
            <Grid item xs={3.8}>
              <CurrentOrderCard
                img={item.order_items[0]?.image}
                price={`$${item.total_price}`}
                serviceName={item.service_name}
                id={item.id}
                status={`Status: ${item.status}`}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default CurrentOrders;
