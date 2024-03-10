import React, { useEffect, useState } from "react";

const stripePublicKey =
  "pk_test_51NYvUXA1eXoZ7dqOviolFA295um1se3VdRvDCUd98x1T3CWeUzmMCLBicNv6Prp55xuOMOH7WAHnRKdguE0OVgzi00cYQLpnf8";

const StripePaymentForm = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handlePaymentSubmission = async () => {
    const stripe = Stripe(stripePublicKey);
    const elements = stripe.elements();
    const cardElement = elements.create("card");
    cardElement.mount("#card-element");

    try {
      const { token, error } = await stripe.createToken(cardElement);

      if (error) {
        setErrorMessage(error.message);
      } else {
        const hiddenInput = document.createElement("input");
        hiddenInput.setAttribute("type", "hidden");
        hiddenInput.setAttribute("name", "stripeToken");
        hiddenInput.setAttribute("value", token.id);
        document.getElementById("payment-form").appendChild(hiddenInput);
        document.getElementById("payment-form").submit();
      }
    } catch (error) {
      setErrorMessage(
        "An error occurred while processing your payment. Please try again."
      );
    }
  };
  useEffect(() => {
    handlePaymentSubmission();
  }, []);

  return (
    <div>
      <form id="payment-form">
        <div id="card-element">{/* CardElement will be mounted here */}</div>
        <button type="submit">Pay</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default StripePaymentForm;

// import { PaymentElement } from "@stripe/react-stripe-js";
// import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     // We don't want to let default form submission happen here,
//     // which would refresh the page.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js hasn't yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }

//     const result = await stripe.confirmPayment({
//       //`Elements` instance that was used to create the Payment Element
//       elements,
//       confirmParams: {
//         return_url: "https://example.com/order/123/complete",
//       },
//     });

//     if (result.error) {
//       // Show error to your customer (for example, payment details incomplete)
//       console.log(result.error.message);
//     } else {
//       // Your customer will be redirected to your `return_url`. For some payment
//       // methods like iDEAL, your customer will be redirected to an intermediate
//       // site first to authorize the payment, then redirected to the `return_url`.
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <button disabled={!stripe}>Submit</button>
//     </form>
//   );
// };

// export default PaymentForm;
