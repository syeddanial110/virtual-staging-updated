import UIButton from "@/components/UIButton/UIButton";
import UICheckbox from "@/components/UICheckbox/UICheckbox";
import UIRadioButton from "@/components/UIRadioButton/UIRadioButton";
import UISimpleTextField from "@/components/UITextField/UISimpleTextField";
import UITypography from "@/components/UITypography/UITypography";
import { addOrderData } from "@/store/orderPlaceSlice";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Modal,
  Paper,
  Radio,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Invoice from "./Invoice";
import { apiGet, apiPost } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import { toast } from "react-toastify";
import {
  getToken,
  getUserId,
  removeToken,
  removeUserId,
  setToken,
  setUserId,
} from "@/auth/Auth";
import PaymentForm from "./PaymentForm";
import StripeElement from "./StripeElement";
import { pathLocations } from "@/utlils/pathLocations";
import { useRouter } from "next/navigation";
import PaymentHome from "../Payment/PaymentHome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Step5 = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

  const [deliveryType, setDeliveryType] = useState(false);
  const [additionalServices, setAdditionalServices] = useState({
    property: "",
    deliveryType: "",
    promoCode: "",
  });
  const [isOrderCreated, setIsOrderCreated] = useState(false);

  const handlePromoCodeInput = (e) => {
    setAdditionalServices({ ...additionalServices, promoCode: e.target.value });
  };

  const promoCodeSubmit = () => {
    const dataObj = {
      code: additionalServices.promoCode,
      service: orderPlaceReducer?.serviceName,
    };
    apiPost(
      `${ApiEndpoints.promoCode}`,
      dataObj,
      (res) => {
        if (!res.valid) {
          toast.error("Promo code is not valid");
        } else {
          if (res.promocode?.type == "BOGO") {
            if (orderPlaceReducer.uploadImageDetails.length > 1) {
              toast.success("Promo code is valid");
              let bogoObj = {
                promoCodeDiscount: 0,
                promoCodeType: "BOGO",
                total:
                  orderPlaceReducer?.total -
                  parseInt(orderPlaceReducer.servicePrice).toFixed(2),
              };
              dispatch(addOrderData(bogoObj));
            } else {
              toast.error("Upload one more photo to use this promocode");
            }
          }
          if (res.promocode?.type == "Percentage") {
            toast.success("Promo code is valid");
            let _percentTotal =
              (res.promocode?.discount / 100) * orderPlaceReducer?.total;

            const percentObj = {
              promoCodeDiscount: res.promocode?.discount,
              promoCodeType: "Percentage",
              total:
                parseFloat(orderPlaceReducer?.total) -
                parseFloat(_percentTotal.toFixed(2)),
            };

            dispatch(addOrderData(percentObj));
          }

          if (res.promocode?.type == "Fixed Price") {
            toast.success("Promo code is valid");
            let fixedPriceTotal =
              parseInt(orderPlaceReducer.total) -
              parseInt(res?.promocode?.discount);

            const fixedTotalObj = {
              promoCodeDiscount: parseInt(res?.promocode?.discount),
              promoCodeType: "Fixed Price",
              total: parseInt(fixedPriceTotal.toFixed(2)),
            };
            dispatch(addOrderData(fixedTotalObj));
          }

          if (res.promocode?.type == "Free Item") {
            let freeItemTotal =
              orderPlaceReducer?.total -
              parseInt(orderPlaceReducer?.servicePrice);

            toast.success("Promo code is valid");
            const fixedTotalObj = {
              promoCodeDiscount: 0,
              promoCodeType: "Free Item",
              total: parseInt(freeItemTotal.toFixed(2)),
            };
            dispatch(addOrderData(fixedTotalObj));
          }
          if (res?.promocode?.type == "New User") {
            const id = getUserId();
            if (id) {
              apiGet(
                `${ApiEndpoints.userById}${id}`,
                (response) => {
                  if (response?.user?.orders.length == 0) {
                    toast.success("Promo code is valid");
                    let newUserTotal =
                      (parseInt(res.promocode?.discount) / 100) *
                      parseInt(orderPlaceReducer?.total);
                    const percentObj = {
                      promoCodeDiscount: parseFloat(res.promocode?.discount),
                      promoCodeType: "New User",
                      total:
                        parseFloat(orderPlaceReducer?.total) -
                        parseFloat(newUserTotal.toFixed(2)),
                    };
                    dispatch(addOrderData(percentObj));
                  } else {
                    toast.error("You're not eligible for this promo code");
                  }
                },
                (err) => {
                  console.log("err", err);
                }
              );
            } else {
              let newUserTotal =
                (parseInt(res.promocode?.discount) / 100) *
                parseInt(orderPlaceReducer?.total);
              const percentObj = {
                promoCodeDiscount: parseFloat(res.promocode?.discount),
                promoCodeType: "New User",
                total:
                  parseFloat(orderPlaceReducer?.total) -
                  parseFloat(newUserTotal.toFixed(2)),
              };
              dispatch(addOrderData(percentObj));
            }
          }
        }
      },
      (err) => {}
    );
  };

  // const handleMakePayment = () => {
  //   const orderItem = orderPlaceReducer?.uploadImageDetails.map((item) => {
  //     return {
  //       image: item.image,
  //       curated_collection_id: `${item.curatedId}`,
  //       choice_ids: item.basicItems,
  //       additional_services: item.additionalServices.map((elm) => {
  //         return {
  //           service_name: elm.title,
  //           service_price: elm.price,
  //         };
  //       }),
  //       additional_notes: item.otherBasicItems,
  //     };
  //   });
  //   const id = getUserId();
  //   const token = getToken();

  //   const dataObj = {
  //     name: orderPlaceReducer.name,
  //     email: orderPlaceReducer.email,
  //     user_id: id === undefined ? null : id,
  //     phone: orderPlaceReducer.phoneNumber,
  //     service_name: orderPlaceReducer.serviceName,
  //     service_price: parseInt(orderPlaceReducer.servicePrice),
  //     total_price: parseFloat(orderPlaceReducer.total),
  //     order_items: orderItem,
  //   };

  //   apiPost(
  //     `${ApiEndpoints.createOrder}`,
  //     dataObj,
  //     (res) => {
  //       console.log("res", res);
  //       toast.success(res.message);
  //       router.push(pathLocations.order);
  //       if (id == undefined) {
  //         setToken(res.token);
  //         setUserId(res.user.id);
  //       }
  //     },
  //     (err) => {
  //       console.log("err", err);
  //       toast.error("All fields are required");
  //     }
  //   );
  // };

  const handlePlaceOrder = () => {
    const orderItem = orderPlaceReducer?.uploadImageDetails.map((item) => {
      return {
        image: item.image,
        curated_collection_id: `${item.curatedId}`,
        choice_ids: item.basicItems,
        additional_services: item.additionalServices.map((elm) => {
          return {
            service_name: elm.title,
            service_price: elm.price,
          };
        }),
        additional_notes: item.otherBasicItems,
      };
    });
    const id = getUserId();
    const token = getToken();

    const dataObj = {
      name: orderPlaceReducer.name,
      email: orderPlaceReducer.email,
      user_id: id === undefined ? null : id,
      phone: orderPlaceReducer.phoneNumber,
      service_name: orderPlaceReducer.serviceName,
      style_id: orderPlaceReducer.styleId,
      service_price: parseInt(orderPlaceReducer.servicePrice),
      total_price:
        parseFloat(orderPlaceReducer.total) +
        parseFloat(orderPlaceReducer.additionalItemsTotal),
      order_items: orderItem,
    };

    apiPost(
      `${ApiEndpoints.createOrder}`,
      dataObj,
      (res) => {
        toast.success(res.message);
        setIsOrderCreated(true);
        setInterval(
          () => {
            setIsOrderCreated(false);
            window.location.href = pathLocations.order;
          },
          token ? 5000 : 5000
        );
        if (id == undefined) {
          setToken(res.token);
          setUserId(res.user.id);
        }
      },
      (err) => {
        toast.error("All fields are required");
      }
    );
  };

  const handleClose = () => setIsOrderCreated(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "0px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Grid container justifyContent="space-between" gap={1} mt={5}>
      <Grid
        item
        xs={12}
        md={6}
        mt={{ xs: 2, md: 0 }}
        sx={{ order: { xs: 3, md: 1 } }}
      >
        {/* <UITypography type="heading" title="Additional services" />
        <UITypography title="Your property is ready to be staged. Select any additional service to greatly boost your property's value." /> */}
        <Grid container gap={3} mt={3}>
          <Grid item xs={12}>
            <UITypography title="Enter a coupon code" />
          </Grid>
          <Grid item xs={12} md={4}>
            <UISimpleTextField
              placeholder="H4qw34D"
              value={additionalServices.promoCode}
              onChange={handlePromoCodeInput}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <UIButton
              variant="contained"
              label="Apply coupon"
              onClick={promoCodeSubmit}
              disabled={orderPlaceReducer.promoCodeType == "" ? false : true}
            />
          </Grid>
          <Grid item xs={12} mt={4}>
            {orderPlaceReducer.total == 0 ? (
              <>
                <UIButton label="Place Order" onClick={handlePlaceOrder} />
              </>
            ) : (
              <PaymentHome />
            )}
            {/* <StripeElement /> */}
            {/* <form onSubmit={handleCheckout}>
              <button type="submit">Checkout</button>
            </form> */}

            <Modal open={isOrderCreated} onClose={handleClose}>
              <Box sx={style}>
                <Grid container justifyContent="center">
                  <Grid item xs={3}>
                    <CheckCircleIcon
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontSize: "80px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <UITypography
                      type="heading"
                      title="Order Confirmed"
                      textAlign="center"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <UITypography
                      type="subheading"
                      title="Your order is in progress."
                      textAlign="center"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Modal>
          </Grid>
          {/* <Grid item xs={12}>
            <UIButton
              variant="contained"
              label="Make Payment"
              isDark={true}
              onClick={handleMakePayment}
            />
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} sx={{ order: { xs: 1, md: 2 } }}>
        <Invoice />
      </Grid>
    </Grid>
  );
};

export default Step5;
