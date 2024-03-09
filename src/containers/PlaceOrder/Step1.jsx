import UITextField from "@/components/UITextField/UITextField";
import UITypography from "@/components/UITypography/UITypography";
import { Grid, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import UIPhoneTextField from "@/components/UIPhoneTextField/UIPhoneTextField";
import { UIStyledContainedField } from "@/components/UITextField/ui";
import UISimpleTextField from "@/components/UITextField/UISimpleTextField";
import { useDispatch, useSelector } from "react-redux";
import { addOrderData } from "@/store/orderPlaceSlice";
import UISelect from "@/components/UISelect/UISelect";

const Step1 = () => {
  const dispatch = useDispatch();

  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

  const servicesArr = [
    {
      title: "Virtual Staging",
      price: "24",
    },
    {
      title: "Virtual Renovation",
      price: "69",
    },
    {
      title: "Virtual Twilights",
      price: "15",
    },
    {
      title: "Commercial Virtual Staging",
      price: "75",
    },
    {
      title: "Commercial Virtual Renovation",
      price: "99",
    },
  ];

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

  const handleServiceChange = (e) => {
    const price = servicesArr.filter((elm) => elm.title == e.target.value);
    const dataObj = {
      serviceName: e.target.value,
      servicePrice: price[0]?.price,
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
      <Grid container gap={3} mt={5}>
        <Grid item xs={12}>
          <UITypography
            type="heading"
            title="Start by telling us about yourself"
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container gap={3}>
            <Grid item xs={5} columnGap={2}>
              <UITypography title="Your name" sx={{ pb: 1 }} />
              <UISimpleTextField
                // variant="simpleContained"
                name="name"
                fullWidth
                placeholder="For Example: John Doe"
                onChange={(e) => handleInputChange(e)}
                value={orderPlaceReducer.name}
              />
            </Grid>
            <Grid item xs={5}>
              <UITypography title="Email" sx={{ pb: 1 }} />
              <UISimpleTextField
                // variant="simpleContained"
                name="email"
                fullWidth
                placeholder="expample@gmail.com"
                onChange={handleInputChange}
                value={orderPlaceReducer.email}
              />
            </Grid>
            <Grid item xs={5}>
              <UITypography title="Phone number" sx={{ pb: 1 }} />
              <UIPhoneTextField
                onChange={handlePhoneNumber}
                value={orderPlaceReducer.phoneNumber}
              />
            </Grid>
            <Grid item xs={5}>
              <UITypography title="Services" sx={{ pb: 1 }} />
              <UISelect
                value={orderPlaceReducer.serviceName}
                onChange={handleServiceChange}
                fullWidth
              >
                {servicesArr.map((item) => {
                  return <MenuItem value={item.title}>{item.title}</MenuItem>;
                })}
              </UISelect>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Step1;
