const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const { CodeSharp } = require('@material-ui/icons');
const stripe = require('stripe')('sk_test_51HG0VuCGRfQmsexYCuLL74qc0T8v5oUg3tVme1QrUUS0Nm9jKKwQ51ieCM6LbJoldicO1xLMuhDk7AJFoVl7lLys00ktkcJVxb')

// API

// - App config 
const app = express();

// - Middlewares  
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes 
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("payment request received~~!!", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd"
    });

    // Ok Created
    response.status(200).send({
        clientSecret: paymentIntent.client_secret
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);