"use client";

import OrderStepper from "@/containers/PlaceOrder/OrderStepper";
import Step1 from "@/containers/PlaceOrder/Step1";
import Step2 from "@/containers/PlaceOrder/Step2";
import Step3 from "@/containers/PlaceOrder/Step3";
import Step4 from "@/containers/PlaceOrder/Step4";
import Step5 from "@/containers/PlaceOrder/Step5";
import DefaultLayout from "@/layout/default-layout";
import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const placeOrder = () => {
  const stepper = useSelector((state) => state?.stepperValueReducer);
  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

  const [isTotal, setIsTotal] = useState(0);

  useEffect(() => {
    setIsTotal(orderPlaceReducer.total);
  }, [orderPlaceReducer.total, orderPlaceReducer.servicePrice]);

  return (
    <DefaultLayout>
      <OrderStepper>
        <Grid container justifyContent="center">
          {orderPlaceReducer.serviceName !== "Virtual Twilights" ? (
            <Grid item xs={10}>
              {stepper.step == 0 ? (
                <Box sx={{ minHeight: "50vh" }} mt={4}>
                  <Step1 />
                </Box>
              ) : stepper.step == 1 ? (
                <Box sx={{ minHeight: "50vh" }} mt={4}>
                  <Step2 />
                </Box>
              ) : stepper.step == 2 ? (
                <Box sx={{ minHeight: "50vh" }} mt={4}>
                  <Step3 />
                </Box>
              ) : stepper.step == 3 ? (
                <Box sx={{ minHeight: "50vh" }} mt={4}>
                  <Step4 />
                </Box>
              ) : (
                <Box sx={{ minHeight: "50vh" }} mt={4}>
                  <Step5 />
                </Box>
              )}
            </Grid>
          ) : (
            <Grid item xs={10}>
              {stepper.step == 0 ? (
                <Box sx={{ minHeight: "50vh" }} mt={4}>
                  <Step1 />
                </Box>
              ) : stepper.step == 1 ? (
                <Box sx={{ minHeight: "50vh" }} mt={4}>
                  <Step3 />
                </Box>
              ) : stepper.step == 2 ? (
                <Box sx={{ minHeight: "50vh" }} mt={4}>
                  <Step4 />
                </Box>
              ) : (
                <Box sx={{ minHeight: "50vh" }} mt={4}>
                  <Step5 />
                </Box>
              )}
            </Grid>
          )}
        </Grid>
      </OrderStepper>
    </DefaultLayout>
  );
};

export default placeOrder;
