import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51OsUlFFYduu8dqNH4N2m5eUSkmqefOBkGkGiHxCmi7jX1doXCYpqIuha7y1WjtmiWAeLr0rHxXueNPFuBLikbx7i00EBAXb70K"
);

const StripeElement = () => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "sk_test_51OsUlFFYduu8dqNH22lrNcu1EwzbFax2o8zOz3NlO6Wxhn4xCrElj0A8w3cu469RJSdhqSPgq9J7wvvPU8wwAnne00cytOaO1W",
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeElement;
