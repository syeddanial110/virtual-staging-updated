import UIButton from "@/components/UIButton/UIButton";
import UICheckbox from "@/components/UICheckbox/UICheckbox";
import UIRadioButton from "@/components/UIRadioButton/UIRadioButton";
import UISimpleTextField from "@/components/UITextField/UISimpleTextField";
import UITypography from "@/components/UITypography/UITypography";
import { addOrderData } from "@/store/orderPlaceSlice";
import { Checkbox, FormControlLabel, Grid, Paper, Radio } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Invoice from "./Invoice";

const Step5 = () => {
  const dispatch = useDispatch();

  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

  const [deliveryType, setDeliveryType] = useState(false);
  const [additionalServices, setAdditionalServices] = useState({
    property: "",
    deliveryType: "",
  });

  const handleRadioChange = (e, price) => {
    setAdditionalServices({
      ...additionalServices,
      deliveryType: e.target.value,
    });

    const dataObj = {
      rapidDelivery: e.target.value,
      deliveryPrice: price,
    };
    dispatch(addOrderData(dataObj));
  };

  const handleCheckbox = (e) => {
    setAdditionalServices({ ...additionalServices, property: e.target.value });
    const dataObj = {
      propertyVideo: e.target.value,
      propertyPrice: 20,
    };
    dispatch(addOrderData(dataObj));
  };

  return (
    <Grid container justifyContent="space-around" gap={1}>
      <Grid item xs={6}>
        <UITypography type="heading" title="Additional services" />
        <UITypography title="Your property is ready to be staged. Select any additional service to greatly boost your property's value." />
        <Grid container gap={3} mt={3}>
          <Grid item xs={7}>
            <UICheckbox
              label="Property video"
              onChange={handleCheckbox}
              value="propertyVideo"
            />
          </Grid>
          <Grid item xs={4}>
            <UITypography title="+$20.00" sx={{ fontWeight: "bold" }} />
          </Grid>
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
          <Grid item xs={12}>
            <UISimpleTextField placeholder="H4qw34D" />
          </Grid>
          <Grid item xs={12}>
            <UIButton variant="contained" label="Apply coupon" />
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
