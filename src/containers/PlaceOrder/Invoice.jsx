import UIDivider from "@/components/UIDivider";
import UITypography from "@/components/UITypography/UITypography";
import { Grid, Paper } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import paymentImg from "../../assets/images/paymentImg.png";
import { useSelector } from "react-redux";

const Invoice = () => {
  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);
  const [totalPrice, setTotalPrice] = useState("");
  const [additionalServicePrice, setAdditionalServicePrice] = useState("");

  useEffect(() => {
    let x =
      parseInt(orderPlaceReducer?.servicePrice) +
      orderPlaceReducer?.deliveryPrice;

    setTotalPrice(x);
  }, [orderPlaceReducer?.servicePrice, orderPlaceReducer?.deliveryPrice]);

  useEffect(() => {
    let z = 0;
    let x = orderPlaceReducer.uploadImageDetails.map((item) => {
      let y = item.additionalServices.map((elm) => {
        z += parseFloat(elm.price);
        return z;
      });
      return y;
    });
    setAdditionalServicePrice(z);
  }, [orderPlaceReducer.uploadImageDetails]);

  useEffect(() => {
    let x = totalPrice / orderPlaceReducer.promoCodeDiscount;

    setTotalPrice(totalPrice - x);
  }, [orderPlaceReducer?.promoCodeDiscount]);

  return (
    <Paper elevation={10}>
      <Grid container px={3} py={2} gap={2} justifyContent="center">
        <Grid item xs={12}>
          <UITypography title="ORDER SUMMARY" />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <UITypography
            title={`${orderPlaceReducer?.serviceName}`}
            sx={{ fontSize: "14px !important" }}
          />
          <UITypography
            title={`$${orderPlaceReducer?.servicePrice}`}
            sx={{ fontSize: "14px !important" }}
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <UITypography
            title="Additional Services"
            sx={{ fontSize: "14px !important" }}
          />
          <UITypography
            title={`$${additionalServicePrice}`}
            sx={{ fontSize: "14px !important" }}
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <UITypography
            title="Rapid Delivery"
            sx={{ fontSize: "14px !important" }}
          />
          <UITypography
            title={`$${orderPlaceReducer?.deliveryPrice}`}
            sx={{ fontSize: "14px !important" }}
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <UITypography
            title="Promo Code Discount"
            sx={{ fontSize: "14px !important" }}
          />
          <UITypography
            title={`${orderPlaceReducer?.promoCodeDiscount}%`}
            sx={{ fontSize: "14px !important" }}
          />
        </Grid>
        <Grid item xs={12}>
          <UIDivider />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <UITypography
            title="ORDER TOTAL"
            sx={{ fontSize: "14px !important", fontWeight: "bold" }}
          />
          <UITypography
            title={`$${totalPrice}`}
            sx={{ fontSize: "14px !important" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} pb={3}>
        <Grid item xs={12}>
          <UIDivider />
        </Grid>
        <Grid item xs={12}>
          <UITypography
            title="PAYMENTS SECURED BY"
            textAlign="center"
            sx={{ fontSize: "14px !important" }}
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Image src={paymentImg} alt="payment-img" height={100} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Invoice;
