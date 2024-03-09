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
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
    </form>
  );
};

export default PaymentForm;
