import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { apiBaseUrl, apiPost } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import { toast } from "react-toastify";
import { pathLocations } from "@/utlils/pathLocations";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getToken, getUserId, setToken, setUserId } from "@/auth/Auth";
import { Box, Grid, Modal } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UITypography from "../../components/UITypography/UITypography";
import { addStepperValue } from "@/store/stepperValueSlice";

const PaymentForm = ({ clientSecret }) => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const [isOrderCreated, setIsOrderCreated] = useState(false);

  const orderPlaceReducer = useSelector((state) => state?.orderPlaceReducer);

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

        setInterval(
          () => {
            setIsOrderCreated(false);
            window.location.href = pathLocations.order;
          },
          token ? 100 : 3000
        );
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = getToken();
    // setLoading(true);

    if (
      orderPlaceReducer.serviceName == "Virtual Twilights" ||
      orderPlaceReducer.serviceName == "Commercial Virtual Staging" ||
      orderPlaceReducer.serviceName == "Commercial Virtual Renovation"
    ) {
      orderPlaceReducer.uploadImageDetails.filter((elm) => {
        if (elm.otherBasicItems != "") {
          alert("Working");
        } else {
          alert("not fill");
        }
      });
    } else {
      // orderPlaceReducer.uploadImageDetails.some((elm) => {
      //   if (elm.roomArea == "") {
      //     alert("not fillllllll");
      //   } else {
      //     alert("Workingggggggggggg");
      //   }
      // });
      console.log('orderPlaceReducer.uploadImageDetails///////', orderPlaceReducer.uploadImageDetails)
      const x = orderPlaceReducer.uploadImageDetails.some(
        (item) => item.roomArea === ""
      );
      console.log("x///////////", x);
      if (!x) {
        alert("Working");
      }
    }
    // const x = orderPlaceReducer.uploadImageDetails.filter((elm) =>
    //   Object.keys(elm).forEach((key) => {
    //     console.log("key", key);
    //   })
    // );

    // apiPost(
    //   `/payment-intent`,
    //   { amount: orderPlaceReducer.total * 100 },
    //   async (res) => {
    //     // dispatch(addStepperValue(3));
    //     console.log("res", res);

    //     if (!stripe || !elements) {
    //       return;
    //     }

    //     const cardElement = elements.getElement(CardElement);

    //     const x = await stripe.createPaymentMethod({
    //       type: "card",
    //       card: cardElement,
    //     });

    //     if (x.error) {
    //       console.error(error);
    //       setLoading(false);
    //     } else {
    //       const response = await fetch(`${apiBaseUrl}/confirm-payment`, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //           paymentIntentId: res.paymentIntentId,
    //           payment_method_id: x.paymentMethod.id,
    //         }), // Change amount as needed
    //       });

    //       const data = await response.json();

    //       if (data.success) {
    //         toast.success("Payment successful");
    //         handleMakePayment();
    //         if (!token) {
    //           setIsOrderCreated(true);
    //         }
    //       } else {
    //         console.error("Payment failed:", data.message);
    //       }

    //       setLoading(false);
    //     }
    //   },
    //   (err) => {
    //     console.log("err", err);
    //   }
    // );
  };

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

  const handleClose = () => setIsOrderCreated(false);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button
          type="submit"
          disabled={!stripe || loading}
          className="paymentButton"
        >
          {loading ? "Processing..." : "Make Payment"}
        </button>
      </form>
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
              <UITypography title="Your account created successfully and your account details send it to your email" />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default PaymentForm;
