import UIDivider from "@/components/UIDivider";
import UITypography from "@/components/UITypography/UITypography";
import { Grid, Paper } from "@mui/material";
import Image from "next/image";
import React from "react";
import paymentImg from "../../assets/images/paymentImg.png";

const Invoice = () => {
  return (
    <Paper elevation={10}>
      <Grid container px={3} py={2} gap={2} justifyContent="center">
        <Grid item xs={12}>
          <UITypography title="ORDER SUMMARY" />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <UITypography
            title="Virtual Staging for 1 photos"
            sx={{ fontSize: "14px !important" }}
          />
          <UITypography title="$23.00" sx={{ fontSize: "14px !important" }} />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <UITypography
            title="Basic Editing for 0 photos"
            sx={{ fontSize: "14px !important" }}
          />
          <UITypography title="$0.00" sx={{ fontSize: "14px !important" }} />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <UITypography
            title="Clutter Removal for 0 photos"
            sx={{ fontSize: "14px !important" }}
          />
          <UITypography title="$0.00" sx={{ fontSize: "14px !important" }} />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <UITypography
            title="Occupied To Vacant for 0 photos"
            sx={{ fontSize: "14px !important" }}
          />
          <UITypography title="$0.00" sx={{ fontSize: "14px !important" }} />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <UITypography
            title="Image Modification for 0 photos"
            sx={{ fontSize: "14px !important" }}
          />
          <UITypography title="$0.00" sx={{ fontSize: "14px !important" }} />
        </Grid>
        <Grid item xs={12}>
          <UIDivider />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <UITypography
            title="ORDER TOTAL"
            sx={{ fontSize: "14px !important", fontWeight: "bold" }}
          />
          <UITypography title="$23.00" sx={{ fontSize: "14px !important" }} />
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
