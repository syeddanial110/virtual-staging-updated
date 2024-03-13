import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./PaymentForm";
import axios from "axios";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51OsUlFFYduu8dqNH4N2m5eUSkmqefOBkGkGiHxCmi7jX1doXCYpqIuha7y1WjtmiWAeLr0rHxXueNPFuBLikbx7i00EBAXb70K"
);

const StripeElement = () => {
  const [clientSecret, setClientSecret] = useState("");
  const fetchPaymnetIntent = async () => {
    const response = await axios.post("/api", {
      items: [{ id: "12343" }],
    });
    // const response = await fetch("/api", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ items: [{ id: "12343" }] }),
    // });
    setClientSecret(response.data.clientSecret);
    // return response;
  };

  useEffect(async () => {
    fetchPaymnetIntent();
  }, []);

  const apprearance = {
    theme: "stripe",
  };
  const options = {
    // passing the client secret obtained from the server
    clientSecret,
    apprearance,
  };


  return (
    <div className="App">
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

export default StripeElement;
