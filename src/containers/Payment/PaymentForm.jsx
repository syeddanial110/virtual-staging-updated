import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { apiBaseUrl, apiPost } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import { toast } from "react-toastify";
import { pathLocations } from "@/utlils/pathLocations";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { getToken, getUserId, setToken, setUserId } from "@/auth/Auth";

const PaymentForm = ({ clientSecret }) => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

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

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    apiPost(
      `/payment-intent`,
      { amount: orderPlaceReducer.total * 100 },
      async (res) => {
        console.log('res', res)

        if (!stripe || !elements) {
          return;
        }
    
        const cardElement = elements.getElement(CardElement);
    
        const x = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });
    
        console.log("x", x);
    
        if (x.error) {
          console.error(error);
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
            console.log("Payment successful");
            toast.success("Payment successful");
            handleMakePayment();
          } else {
            console.error("Payment failed:", data.message);
          }
    
          setLoading(false);
        }
      },
      (err) => {
        console.log('err', err)
      },
    )

    
  };

  return (
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
  );
};

export default PaymentForm;
