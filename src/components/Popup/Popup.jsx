import React from "react";
import UIModal from "../UIModal/UIModal";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import popupImg from "../../assets/images/popupImage.jpg";
import UITypography from "../UITypography/UITypography";
import UITextField from "../UITextField/UITextField";
import UISimpleTextField from "../UITextField/UISimpleTextField";
import UIButton from "../UIButton/UIButton";

const Popup = () => {
  return (
    <UIModal>
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={6}>
          <Image
            src={popupImg}
            alt="popupImg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
          <Grid container justifyContent="center">
            <Grid item xs={8}>
              <UITypography
                type="heading"
                title="Get 20% OFF Your First Order"
                textAlign="center"
                sx={{ lineHeight: "40px" }}
              />
            </Grid>
            {/* <Grid item xs={10}>
              <UITypography
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi error nostrum, sapiente "
                textAlign="center"
              />
            </Grid> */}
            <Grid item xs={12} mt={3}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={5}>
                  <UISimpleTextField
                    placeholder="Enter First Name"
                    sx={{
                      borderRadius: "10px !important",
                      "&": {
                        borderRadius: "10px",
                      },
                      "& > div": {
                        borderRadius: "10px",
                      },
                      "& * > fieldset": {
                        borderRadius: "10px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <UISimpleTextField
                    placeholder="Enter Last Name"
                    sx={{
                      borderRadius: "10px !important",
                      "&": {
                        borderRadius: "10px",
                      },
                      "& > div": {
                        borderRadius: "10px",
                      },
                      "& * > fieldset": {
                        borderRadius: "10px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <UISimpleTextField
                    placeholder="Enter your email"
                    fullWidth
                    sx={{
                      borderRadius: "10px !important",
                      "&": {
                        borderRadius: "10px",
                      },
                      "& > div": {
                        borderRadius: "10px",
                      },
                      "& * > fieldset": {
                        borderRadius: "10px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={10} display="flex" justifyContent="center">
                  <UIButton
                    variant="contained"
                    label="Activate 20% OFF"
                    sx={{ borderRadius: "10px" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </UIModal>
  );
};

export default Popup;
