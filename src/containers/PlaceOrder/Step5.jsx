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
import { apiPost } from "@/auth/ApiRequest";
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
    promoDiscount: "",
  });

  const handleRadioChange = (e, price) => {
    setAdditionalServices({
      ...additionalServices,
      deliveryType: e.target.value,
      deliveryPrice: price,
    });

    const dataObj = {
      rapidDelivery: e.target.value,
      deliveryPrice: price,
    };
    dispatch(addOrderData(dataObj));
  };

  const handlePromoCodeInput = (e) => {
    setAdditionalServices({ ...additionalServices, promoCode: e.target.value });
  };

  const promoCodeSubmit = () => {
    const dataObj = {
      code: additionalServices.promoCode,
    };
    apiPost(
      `${ApiEndpoints.promoCode}`,
      dataObj,
      (res) => {
        console.log("res", res);
        if (!res.valid) {
          toast.error("Promo code is not valid");
        } else {
          toast.success("Promo code is valid");
          setAdditionalServices({
            ...additionalServices,
            promoDiscount: res.discount,
          });
          const dataObj = {
            promoCodeDiscount: res.discount,
          };
          dispatch(addOrderData(dataObj));
        }
      },
      (err) => {}
    );
  };

  const handleMakePayment = () => {
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
      service_price: parseInt(orderPlaceReducer.servicePrice),
      total_price: parseFloat(orderPlaceReducer.total),
      order_items: orderItem,
    };

    apiPost(
      `${ApiEndpoints.createOrder}`,
      dataObj,
      (res) => {
        console.log("res", res);
        toast.success(res.message);
        router.push(pathLocations.order);
        if (id == undefined) {
          setToken(res.token);
          setUserId(res.user.id);
        }
      },
      (err) => {
        console.log("err", err);
        toast.error("All fields are required");
      }
    );
  };

  console.log('orderPlaceReducer', orderPlaceReducer)

  return (
    <Grid container justifyContent="space-between" gap={1} mt={5}>
      <Grid item xs={6}>
        <UITypography type="heading" title="Additional services" />
        <UITypography title="Your property is ready to be staged. Select any additional service to greatly boost your property's value." />
        <Grid container gap={3} mt={3}>
          <Grid item xs={12}>
            <UITypography title="Enter a coupon code" />
          </Grid>
          <Grid item xs={4}>
            <UISimpleTextField
              placeholder="H4qw34D"
              value={additionalServices.promoCode}
              onChange={handlePromoCodeInput}
            />
          </Grid>
          <Grid item xs={4}>
            <UIButton
              variant="contained"
              label="Apply coupon"
              onClick={promoCodeSubmit}
            />
          </Grid>
          <Grid item xs={12}>
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
      <Grid item xs={4}>
        <Invoice />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Step5;
