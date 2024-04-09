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
import { Grid } from "@mui/material";
import { toast } from "react-toastify";

const steps = [
  "Personal info",
  "Select Style",
  "Upload photos",
  "Image Details",
  "Payment Details",
];

export default function OrderStepper(props) {
  const stepper = useSelector((state) => state?.stepperValueReducer);
  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

  const [activeStep, setActiveStep] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();

  const handleNext = () => {
    if (
      activeStep == 0 &&
      orderPlaceReducer.name == "" &&
      orderPlaceReducer?.email == "" &&
      orderPlaceReducer?.phoneNumber == ""
    ) {
      toast.error("First fill all the fields");
    } else if (activeStep == 0) {
      setActiveStep(1);
      dispatch(addStepperValue(0));
    }

    if (activeStep == 1 && orderPlaceReducer.styleName == "") {
      toast.error("First Select the style");
    } else if (activeStep == 1) {
      setActiveStep(2);
      dispatch(addStepperValue(1));
    }
    if (activeStep == 2 && orderPlaceReducer.uploadImageDetails.length == 0) {
      toast.error("Upload images is required");
    } else if (activeStep == 2) {
      setActiveStep(3);
      dispatch(addStepperValue(2));
    }
    if (activeStep == 3) {
      if (
        orderPlaceReducer.serviceName == "Virtual Twilights" ||
        orderPlaceReducer.serviceName == "Commercial Virtual Staging" ||
        orderPlaceReducer.serviceName == "Commercial Virtual Renovation"
      ) {
        const x = orderPlaceReducer.uploadImageDetails.some(
          (item) => item.otherBasicItems === ""
        );
        if (!x) {
          setActiveStep(4);
          dispatch(addStepperValue(3));
        } else {
          toast.error("Note box is required");
        }
      } else {
        const x = orderPlaceReducer.uploadImageDetails.some(
          (item) => item.roomArea === ""
        );
        const y = orderPlaceReducer.uploadImageDetails.some(
          (item) => item.basicItems.length === 0
        );

        if (!x && !y) {
          setActiveStep(4);
          dispatch(addStepperValue(3));
        } else {
          toast.error("Room Name and items are required");
        }
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    dispatch(backStepperValue(activeStep));
  };

  const handleFinish = () => {};

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    dispatch(initialStepperValue(0));
  }, []);

  useEffect(() => {
    setActiveStep(stepper.step);
  }, [stepper.step]);

  // useEffect(() => {
  //   if (
  //     orderPlaceReducer.name != "" &&
  //     orderPlaceReducer?.email != "" &&
  //     orderPlaceReducer?.phoneNumber != ""
  //   ) {
  //     setActiveStep(1);
  //   }
  //   if (orderPlaceReducer?.uploadImageDetails.length > 0) {
  //     setActiveStep(2);
  //   }
  //   if (orderPlaceReducer.uploadImageDetails.length < 0) {
  //     setActiveStep(1);
  //   }
  // }, [
  //   orderPlaceReducer?.name,
  //   orderPlaceReducer?.email,
  //   orderPlaceReducer?.phoneNumber,
  //   orderPlaceReducer?.uploadImageDetails.length,
  // ]);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          backgroundColor: "#e7e7e7",
          padding: "40px 0px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          width: "100%",
        }}
      >
        <Stepper
          activeStep={activeStep}
          sx={{
            width: "90%",
            margin: "auto",
            justifyContent: "center",
            "& > .MuiStepConnector-horizontal": {
              display: {
                xs: "none",
                md: "block",
              },
            },
          }}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step
                key={label}
                {...stepProps}
                sx={{
                  display: { xs: index != activeStep && "none", md: "flex" },
                }}
              >
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>

      <React.Fragment>
        {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
        {props.children}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            pt: 2,
            width: "80%",
            margin: "auto",
          }}
        >
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
            disabled={activeStep == 4}
            onClick={
              activeStep === steps.length - 1 ? handleFinish : handleNext
            }
          >
            Next
          </Button>
        </Box>
      </React.Fragment>
    </Box>
  );
}
