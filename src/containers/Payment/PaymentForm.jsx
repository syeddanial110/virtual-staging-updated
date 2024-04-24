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

  const handlePlaceOrder = () => {
    setLoading(true);
    const token = getToken();
    apiPost(
      `/payment-intent`,
      {
        amount:
          (parseFloat(orderPlaceReducer.total) +
            parseFloat(orderPlaceReducer.additionalItemsTotal)) *
          100,
      },
      async (res) => {
        // dispatch(addStepperValue(3));
        if (!stripe || !elements) {
          return;
        }
        const cardElement = elements.getElement(CardElement);
        const x = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });
        if (x.error) {
          console.error(x.error);
          toast.error(x.error.message);
          setLoading(false);
        } else {
          const response = await fetch(`${apiBaseUrl}/confirm-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              paymentIntentId: res.paymentIntentId,
              payment_method_id: x.paymentMethod.id,
            }), // Change amount as needed
          });
          const data = await response.json();
          if (data.success) {
            toast.success("Payment successful");
            handleMakePayment();
            // if (!token) {
            setIsOrderCreated(true);
            // }
          } else {
            toast.error(
              "Your card was declined. Your request was in live mode, but used a known test card."
            );
          }
          setLoading(false);
        }
      },
      (err) => {}
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      orderPlaceReducer.name == "" ||
      orderPlaceReducer.email == "" ||
      orderPlaceReducer.phoneNumber == "" ||
      orderPlaceReducer.uploadImageDetails.length == 0
    ) {
      toast.error("All fields are required");
    } else {
      if (
        orderPlaceReducer.serviceName == "Virtual Twilights" ||
        orderPlaceReducer.serviceName == "Commercial Virtual Staging" ||
        orderPlaceReducer.serviceName == "Commercial Virtual Renovation"
      ) {
        const x = orderPlaceReducer.uploadImageDetails.some(
          (item) => item.otherBasicItems === ""
        );
        if (!x) {
          handlePlaceOrder();
        } else {
          toast.error("Note box is required");
        }
      } else {
        const x = orderPlaceReducer.uploadImageDetails.some(
          (item) => item.roomArea === ""
        );

        if (!x) {
          handlePlaceOrder();
        } else {
          toast.error("Room Name is required");
        }
      }
    }
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
          {loading ? "Processing..." : "Place Order"}
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
    </>
  );
};

export default PaymentForm;
