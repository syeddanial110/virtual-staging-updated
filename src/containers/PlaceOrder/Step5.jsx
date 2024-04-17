import UIButton from "@/components/UIButton/UIButton";
import UICheckbox from "@/components/UICheckbox/UICheckbox";
import UIRadioButton from "@/components/UIRadioButton/UIRadioButton";
import UISimpleTextField from "@/components/UITextField/UISimpleTextField";
import UITypography from "@/components/UITypography/UITypography";
import { addOrderData } from "@/store/orderPlaceSlice";
import { Checkbox, FormControlLabel, Grid, Paper, Radio } from "@mui/material";
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
  const [isPromoCode, setIsPromoCode] = useState(false);

  const handlePromoCodeInput = (e) => {
    setAdditionalServices({ ...additionalServices, promoCode: e.target.value });
  };

  console.log("orderPlaceReducer", orderPlaceReducer);
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
          toast.success("Promo code is valid");
          console.log("res", res);
          if (res.promocode?.type == "BOGO") {
            if (orderPlaceReducer.uploadImageDetails.length > 1) {
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
            setIsPromoCode(true);
            let _percentTotal =
              (res.promocode?.discount / orderPlaceReducer?.total) * 100;

            const percentObj = {
              promoCodeDiscount: res.promocode?.discount,
              promoCodeType: "Percentage",
              total: parseInt(_percentTotal.toFixed(2)),
            };
            dispatch(addOrderData(percentObj));
          }

          if (res.promocode?.type == "Fixed Price") {
            setIsPromoCode(true);
            let fixedPriceTotal =
              parseInt(orderPlaceReducer.total) -
              parseInt(res?.promocode?.discount);

            console.log("fixedPriceTotal", fixedPriceTotal);
            const fixedTotalObj = {
              promoCodeDiscount: parseInt(res?.promocode?.discount),
              promoCodeType: "Fixed Price",
              total: parseInt(fixedPriceTotal.toFixed(2)),
            };
            dispatch(addOrderData(fixedTotalObj));
          }

          if (res.promocode?.type == "Free Item") {
            setIsPromoCode(true);
            let freeItemTotal =
              orderPlaceReducer?.total -
              parseInt(orderPlaceReducer?.servicePrice) *
                orderPlaceReducer?.uploadImageDetails.length;

            const fixedTotalObj = {
              promoCodeDiscount: 0,
              promoCodeType: "Free Item",
              total: parseInt(freeItemTotal.toFixed(2)),
            };
            dispatch(addOrderData(fixedTotalObj));
          }
          if (res?.promocode?.type == "New User") {
            const id = getUserId();
            apiGet(
              `${ApiEndpoints.userById}${id}`,
              (res) => {
                console.log("res", res);
                if (res?.user?.orders.length == 0) {
                  setIsPromoCode(true);
                  let newUserTotal =
                    (res.promocode?.discount / orderPlaceReducer?.total) * 100;
                  const percentObj = {
                    promoCodeDiscount: res.promocode?.discount,
                    promoCodeType: "New User",
                    total: parseInt(newUserTotal.toFixed(2)),
                  };
                  dispatch(addOrderData(percentObj));
                } else {
                  toast.error("You're not eligible for this promo code");
                }
              },
              (err) => {
                console.log("err", err);
                // if (err?.response?.data?.message == "Unauthenticated.") {
                //   router.push(pathLocations.login);
                // }
              }
            );
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
            />
          </Grid>
          <Grid item xs={12} mt={4}>
            <PaymentHome />
            {/* <StripeElement /> */}
            {/* <form onSubmit={handleCheckout}>
              <button type="submit">Checkout</button>
            </form> */}
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
