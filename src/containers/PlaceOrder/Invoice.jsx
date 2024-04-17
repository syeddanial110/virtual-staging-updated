import UIDivider from "@/components/UIDivider";
import UITypography from "@/components/UITypography/UITypography";
import { Badge, Grid, Paper } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import paymentImg from "../../assets/images/paymentImg.png";
import paymentImg2 from "../../assets/images/paymentImg2.png";
import { useDispatch, useSelector } from "react-redux";
import { addOrderData } from "@/store/orderPlaceSlice";

const Invoice = () => {
  const dispatch = useDispatch();

  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

  useEffect(() => {
    let z = 0;
    if (orderPlaceReducer?.serviceName == "Virtual Twilights") {
      const y = orderPlaceReducer?.uploadImageDetails.map((item) => {
        return {
          image: item?.image,
          roomArea: item?.roomArea,
          curatedId: item?.curatedId,
          basicItems: item?.basicItems,
          otherBasicItems: item?.otherBasicItems,
          additionalServices: [],
        };
      });

      console.log("y", y);
      const dataObj = {
        additionalItemsTotal: 0,
        uploadImageDetails: y,
      };

      dispatch(addOrderData(dataObj));
    } else {
      let x = orderPlaceReducer.uploadImageDetails.map((item) => {
        let y = item.additionalServices.map((elm) => {
          z += parseFloat(elm.price);
          console.log("z", z);
          return z;
        });
        console.log("y", y);
        return y;
      });

      const dataObj = {
        additionalItemsTotal: z,
      };

      dispatch(addOrderData(dataObj));
    }
  }, [orderPlaceReducer.uploadImageDetails.length]);

  // useEffect(() => {
  //   if (orderPlaceReducer.promoCodeDiscount) {
  //     let x = totalPrice / parseInt(orderPlaceReducer.promoCodeDiscount);

  //     setTotalPrice(totalPrice - x);
  //   }
  // }, [orderPlaceReducer?.promoCodeDiscount]);

  // useEffect(() => {

  // }, [totalPrice]);

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
            title={`Quantity`}
            sx={{ fontSize: "14px !important" }}
          />
          <UITypography
            title={`${orderPlaceReducer?.uploadImageDetails?.length}`}
            sx={{ fontSize: "14px !important" }}
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <UITypography
            title="Additional Services"
            sx={{ fontSize: "14px !important" }}
          />
          <UITypography
            title={`$${orderPlaceReducer?.additionalItemsTotal}`}
            sx={{ fontSize: "14px !important" }}
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <UITypography
            title="Promo Code Discount"
            sx={{ fontSize: "14px !important" }}
          />
          <UITypography
            title={
              orderPlaceReducer?.promoCodeType == "BOGO" ||
              orderPlaceReducer?.promoCodeType == "Free Item"
                ? "Free"
                : orderPlaceReducer?.promoCodeType == "Fixed Price"
                ? `$${orderPlaceReducer?.promoCodeDiscount}`
                : `${orderPlaceReducer?.promoCodeDiscount}%`
            }
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
            title={`$${
              orderPlaceReducer?.total + orderPlaceReducer?.additionalItemsTotal
            }`}
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
          <Image src={paymentImg2} alt="payment-img" height={100} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Invoice;
