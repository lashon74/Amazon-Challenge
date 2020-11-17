const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// Secret key made from stripe for app to run card info
const stripe = require("stripe")(
  "sk_test_51Hn8CWHaiMEaPmrwyUTYD7sg9HfZzQkyqKFsAvmuBT5aZCVJHS3ZLdd1blaDZSZU41oEQ4mTWLCh3Pam75Ua3UdO00vP5bFgVr"
);
// API

// App config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// API routes sends hello if everything is running fine
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved for the amount of >>>>", total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command

exports.api = functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/challenge-34146/us-central1/api
