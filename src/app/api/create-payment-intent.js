// This is your test secret API key.
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const stripe =
  "sk_test_51OsUlFFYduu8dqNH22lrNcu1EwzbFax2o8zOz3NlO6Wxhn4xCrElj0A8w3cu469RJSdhqSPgq9J7wvvPU8wwAnne00cytOaO1W";

const calculateOrderAmount = (items) => {
  return 1400;
};

export default async function handler(req, res) {
  console.log("body", req.body);
  //   const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  //   const paymentIntent = await stripe.paymentIntents.create({
  //     amount: calculateOrderAmount(items),
  //     currency: "usd",
  //     automatic_payment_methods: {
  //       enabled: true,
  //     },
  //   });

  //   res.send({
  //     clientSecret: paymentIntent.client_secret,
  //   });
}
