"use client";
import React, { useEffect, useState } from "react";
import UIModal from "../UIModal/UIModal";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import popupImg from "../../assets/images/popupImage.jpg";
import UITypography from "../UITypography/UITypography";
import UITextField from "../UITextField/UITextField";
import UISimpleTextField from "../UITextField/UISimpleTextField";
import UIButton from "../UIButton/UIButton";
import { getToken } from "@/auth/Auth";
import { apiPost } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Popup = () => {
  const [open, setOpen] = useState(false);

  const [popupVal, setPopupVal] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setPopupVal({ ...popupVal, [e.target.name]: e.target.value });
  };

  const submitPopup = () => {
    const dataObj = {
      first_name: popupVal.firstName,
      last_name: popupVal.lastName,
      email: popupVal.email,
    };
    apiPost(
      `${ApiEndpoints.applyForPromocode}`,
      dataObj,
      (res) => {
        console.log("res", res);
        toast.success(res.message);
        Cookies.set("popup", false);
        setOpen(false);
      },
      (err) => {
        console.log("err", err);
      }
    );
  };

  let popup = Cookies.get("popup");
  useEffect(() => {
    var token = getToken();

    console.log("popup", popup);

    if (popup == "true") {
      if (token == undefined || token == null) {
        setOpen(true);
      }
    }
    if (!popup) {
      if (token == undefined || token == null) {
        setOpen(true);
        Cookies.set("popup", true);
      }
    }
  }, [popup]);

  return (
    <UIModal open={open} setOpen={setOpen}>
      <Grid container sx={{ height: { xs: "600px", md: "500px" } }}>
        <Grid item xs={12} md={6}>
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
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
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
                <Grid item xs={11} md={5}>
                  <UISimpleTextField
                    placeholder="Enter First Name"
                    onChange={(e) => handleInputChange(e)}
                    name="firstName"
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
                    fullWidth
                  />
                </Grid>
                <Grid item xs={11} md={5}>
                  <UISimpleTextField
                    placeholder="Enter Last Name"
                    onChange={(e) => handleInputChange(e)}
                    name="lastName"
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
                    fullWidth
                  />
                </Grid>
                <Grid item xs={11} md={10}>
                  <UISimpleTextField
                    placeholder="Enter your email"
                    fullWidth
                    onChange={(e) => handleInputChange(e)}
                    name="email"
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
                    className="pulse"
                    onClick={submitPopup}
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
