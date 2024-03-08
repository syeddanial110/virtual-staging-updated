import UITextField from "@/components/UITextField/UITextField";
import UITypography from "@/components/UITypography/UITypography";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import UIPhoneTextField from "@/components/UIPhoneTextField/UIPhoneTextField";
import { UIStyledContainedField } from "@/components/UITextField/ui";
import UISimpleTextField from "@/components/UITextField/UISimpleTextField";
import { useDispatch, useSelector } from "react-redux";
import { addOrderData } from "@/store/orderPlaceSlice";

const Step1 = () => {
  const dispatch = useDispatch();

  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });

    const dataObj = {
      [e.target.name]: e.target.value,
    };
    dispatch(addOrderData(dataObj));
  };

  const handlePhoneNumber = (val) => {
    setInputVal({ ...inputVal, phoneNumber: val });

    const dataObj = {
      phoneNumber: val,
    };
    dispatch(addOrderData(dataObj));
  };

  useEffect(() => {
    if (
      orderPlaceReducer.name != "" ||
      orderPlaceReducer.email != "" ||
      orderPlaceReducer.phoneNumber != ""
    ) {
      setInputVal({
        name: orderPlaceReducer.name,
        email: orderPlaceReducer.email,
        phoneNumber: orderPlaceReducer.phoneNumber,
      });
    }
  }, []);

  return (
    <>
      <Grid container gap={3}>
        <Grid item xs={12}>
          <UITypography
            type="heading"
            title="Start by telling us about yourself"
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container gap={3}>
            <Grid item xs={5} columnGap={2}>
              <UITypography title="Your name*" sx={{ pb: 1 }} />
              <UISimpleTextField
                // variant="simpleContained"
                name="name"
                fullWidth
                placeholder="For Example: John Doe"
                onChange={(e) => handleInputChange(e)}
                value={inputVal.name}
              />
            </Grid>
            <Grid item xs={5}>
              <UITypography title="Email*" sx={{ pb: 1 }} />
              <UISimpleTextField
                // variant="simpleContained"
                name="email"
                fullWidth
                placeholder="expample@gmail.com"
                onChange={handleInputChange}
                value={inputVal.email}
              />
            </Grid>
            <Grid item xs={5}>
              <UITypography title="Phone number*" sx={{ pb: 1 }} />
              <UIPhoneTextField
                onChange={handlePhoneNumber}
                value={inputVal.phoneNumber}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Step1;
