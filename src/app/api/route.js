// This is your test secret API key.
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { loadStripe } from "@stripe/stripe-js";
import { NextResponse } from "next/server";
import Stripe from "stripe";

// const stripe = loadStripe(
//   "sk_test_51OsUlFFYduu8dqNH22lrNcu1EwzbFax2o8zOz3NlO6Wxhn4xCrElj0A8w3cu469RJSdhqSPgq9J7wvvPU8wwAnne00cytOaO1W"
// );
// const stripe =
//   "sk_test_51OsUlFFYduu8dqNH22lrNcu1EwzbFax2o8zOz3NlO6Wxhn4xCrElj0A8w3cu469RJSdhqSPgq9J7wvvPU8wwAnne00cytOaO1W";

const stripe = new Stripe(
  "sk_test_51OsUlFFYduu8dqNH22lrNcu1EwzbFax2o8zOz3NlO6Wxhn4xCrElj0A8w3cu469RJSdhqSPgq9J7wvvPU8wwAnne00cytOaO1W",
  {
    apiVersion: "2020-08-27",
  }
);
const calculateOrderAmount = (items) => {
  return 1400;
};

export async function POST(req, res) {
  console.log("body", req.body);
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    // amount: calculateOrderAmount([{ id: "12343" }]),
    currency: "usd",
    amount: 14,
    automatic_payment_methods: {
      enabled: true,
    },
  });
  console.log("paymentIntent", paymentIntent);

  //   res.send({
  //     clientSecret: paymentIntent.client_secret,
  //   });
  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  //   return NextResponse.json({ clientSecret: "123" });
}
