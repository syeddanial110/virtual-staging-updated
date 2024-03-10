// import React, { useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";

// const StripePaymentForm = () => {
//   useEffect(() => {
//     // Load Stripe script when component mounts
//     const stripeScript = document.createElement("script");
//     stripeScript.src = "https://js.stripe.com/v3/";
//     stripeScript.async = true;
//     document.body.appendChild(stripeScript);

//     return () => {
//       // Clean up: remove Stripe script when component unmounts
//       document.body.removeChild(stripeScript);
//     };
//   }, []);

//   const handlePaymentSubmission = async (e) => {
//     e.preventDefault();
//     // Initialize Stripe instance with your public key
//     const stripe = await loadStripe(
//       "pk_test_51OsUlFFYduu8dqNH4N2m5eUSkmqefOBkGkGiHxCmi7jX1doXCYpqIuha7y1WjtmiWAeLr0rHxXueNPFuBLikbx7i00EBAXb70K"
//     );

//     // Create a new instance of Elements
//     const elements = stripe.elements();

//     // Create a CardElement
//     const cardElement = elements.create("card");

//     // Mount the CardElement to a container
//     cardElement.mount("#card-element");

//     // Get reference to the payment form
//     const form = document.getElementById("payment-form");

//     // Add submit event listener to the form
//     form.addEventListener("submit", async (event) => {
//       event.preventDefault();

//       // Create a token with the CardElement
//       const { token, error } = await stripe.createToken(cardElement);

//       if (error) {
//         console.log("error", error);
//         // Handle error (e.g., display error message to user)
//       } else {
//         // Send token to your server for further processing

//         // Optionally, you can append the token to a hidden input in the form
//         const hiddenInput = document.createElement("input");
//         hiddenInput.setAttribute("type", "hidden");
//         hiddenInput.setAttribute("name", "stripeToken");
//         hiddenInput.setAttribute("value", token.id);
//         form.appendChild(hiddenInput);

//         // Submit the form
//         // form.submit();
//         console.log("token", token);
//       }
//     });
//   };

//   return (
//     <form id="payment-form" onClick={handlePaymentSubmission}>
//       <div id="card-element">{/* CardElement will be mounted here */}</div>
//       <button type="submit">Pay</button>
//     </form>
//   );
// };

// export default StripePaymentForm;

import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // const clientSecret = new URLSearchParams(window.location.search).get(
    //   "payment_intent_client_secret"
    // );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
