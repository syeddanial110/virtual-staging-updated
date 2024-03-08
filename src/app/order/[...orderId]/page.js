"use client";
import UITypography from "@/components/UITypography/UITypography";
import StyleCard from "@/containers/PlaceOrder/StyleCard";
import DefaultLayout from "@/layout/default-layout";
import { Grid } from "@mui/material";
import React from "react";
import styleImg from "../../../assets/images/bedroomCollection.jpg";
import uploadedImg from "../../../assets/images/Blogpost7.jpg";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UIButton from "@/components/UIButton/UIButton";
import { pathLocations } from "@/utlils/pathLocations";
import { useRouter } from "next/navigation";

const ViewOrderDetail = () => {
  const router = useRouter();

  return (
    <DefaultLayout>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <UITypography
            type="heading"
            title="View Order Detail"
            textAlign="center"
          />
        </Grid>
        <Grid item xs={10}>
          <Grid container gap={3}>
            <Grid item xs={12}>
              <UITypography type="mainDescription" title="Basic Information" />
            </Grid>
            <Grid item xs={12}>
              <UITypography title="Name: John Dee" />
              <UITypography title="Email: example@gmail.com" />
              <UITypography title="Phone Number: +1 333-5485-888" />
            </Grid>
            <Grid item xs={12}>
              <UITypography type="mainDescription" title="Furnishing style" />
            </Grid>
            <Grid item xs={3}>
              <StyleCard
                // id={item.id}
                title={"Contemporary"}
                img={styleImg}
                // onClick={() => {
                //   setIsSelected(item.id);
                //   disptach(
                //     addOrderData({
                //       styleId: item.id,
                //       styleName: item.title,
                //       styleImage: item.image,
                //     })
                //   );
                // }}
                // isSelected={isSelected}
              />
            </Grid>
            <Grid item xs={12}>
              <UITypography
                type="mainDescription"
                title="Your uploaded images"
              />
            </Grid>
            <Grid item xs={3}>
              <Image
                src={uploadedImg}
                alt="Blogpost7"
                // width={200}
                height={200}
                style={{
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <UITypography
                type="mainDescription"
                title="Details about your photos"
              />
            </Grid>
            <Grid item xs={12}>
              <UITypography title="Room Area: Living Room" />
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <CheckCircleIcon
                      sx={{ color: (theme) => theme.palette.primary.main }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Closet" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <CheckCircleIcon
                      sx={{ color: (theme) => theme.palette.primary.main }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Gym" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <UITypography
                type="mainDescription"
                title="Additional Services"
              />
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <CheckCircleIcon
                      sx={{ color: (theme) => theme.palette.primary.main }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Basic image editing - $1.50 extra" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <CheckCircleIcon
                      sx={{ color: (theme) => theme.palette.primary.main }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Clutter removal - $8.00 extra" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <UIButton
                variant="contained"
                label="Back to Orders"
                onClick={() => router.push(pathLocations.order)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default ViewOrderDetail;
