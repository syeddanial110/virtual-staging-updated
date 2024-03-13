"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  addStepperValue,
  backStepperValue,
  initialStepperValue,
} from "@/store/stepperValueSlice";

const steps = ["Personal info", "Upload photos", "Payment Details"];

export default function OrderStepper(props) {
  const stepper = useSelector((state) => state?.stepperValueReducer);
  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

  const [activeStep, setActiveStep] = useState(0);

  const dispatch = useDispatch();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch(addStepperValue(activeStep));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    dispatch(backStepperValue(activeStep));
  };

  const handleFinish = () => {
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    dispatch(initialStepperValue(0));
  }, []);

  useEffect(() => {
    setActiveStep(stepper.step);
  }, [stepper.step]);

  useEffect(() => {
    if (
      orderPlaceReducer.name != "" &&
      orderPlaceReducer?.email != "" &&
      orderPlaceReducer?.phoneNumber != ""
    ) {
      setActiveStep(1);
    }
    if (orderPlaceReducer?.uploadImageDetails.length > 0) {
      setActiveStep(2);
    }
    if (orderPlaceReducer.uploadImageDetails.length < 0) {
      setActiveStep(1);
    }
  }, [
    orderPlaceReducer?.name,
    orderPlaceReducer?.email,
    orderPlaceReducer?.phoneNumber,
    orderPlaceReducer?.uploadImageDetails.length,
  ]);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <React.Fragment>
        {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
        {props.children}
        {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={
                activeStep === steps.length - 1 ? handleFinish : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box> */}
      </React.Fragment>
    </Box>
  );
}
