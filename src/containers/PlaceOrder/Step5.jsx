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

const Step5 = () => {
  const dispatch = useDispatch();

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

  console.log("additionalServices", additionalServices);
  console.log("orderPlaceReducer", orderPlaceReducer);

  return (
    <Grid container justifyContent="space-between" gap={1} mt={5}>
      <Grid item xs={6}>
        <UITypography type="heading" title="Additional services" />
        <UITypography title="Your property is ready to be staged. Select any additional service to greatly boost your property's value." />
        <Grid container gap={3} mt={3}>
          <Grid item xs={12}>
            <UITypography
              title="Choose Rapid delivery"
              sx={{ fontWeight: "bold" }}
            />
          </Grid>
          <Grid item xs={7}>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                  checked={
                    additionalServices.deliveryType == "rapidDelivery" && true
                  }
                />
              }
              value="rapidDelivery"
              onChange={(e) => handleRadioChange(e, 6)}
              label="Rapid delivery (24 hours)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                  checked={
                    additionalServices.deliveryType == "superDelivery" && true
                  }
                />
              }
              value="superDelivery"
              onChange={(e) => handleRadioChange(e, 12)}
              label="Super Rapid delivery (12 hours)"
            />
          </Grid>
          <Grid item xs={4}>
            <UITypography
              title="+$6.00/image"
              sx={{ paddingTop: "10px", fontWeight: "bold" }}
            />
            <UITypography
              title="+$12.00/image"
              sx={{ paddingTop: "14px", fontWeight: "bold" }}
            />
          </Grid>
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
            <UIButton variant="contained" label="Make Payment" isDark={true} />
          </Grid>
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
