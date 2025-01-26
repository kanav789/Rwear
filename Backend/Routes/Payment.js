const Razorpay = require("razorpay");
const express = require("express");
const PaymentRouter = express.Router();
const razorpayInstance = new Razorpay({
  key_id: "rzp_test_H8tZtmny8n80nM",
  key_secret: "vGXBVAuPVAkI332Kv3uFexsm",
});

PaymentRouter.post("/create-order", async (req, res) => {
  try {
    if (!req.body.amount || isNaN(req.body.amount)) {
      return res.status(400).json({ error: "Invalid amount provided" });
    }

    const options = {
      amount: Number(req.body.amount * 100), // Convert amount to smallest unit
      currency: "INR",
    };
    console.log(options, "option");
    const order = await razorpayInstance.orders.create(options);

    // Respond with the created order
    res.status(200).json({ order });
    console.log("Order created:", order);
  } catch (error) {
    console.error("Error creating order:", error);
    res
      .status(500)
      .json({ error: "Failed to create order. Please try again." });
  }
});

module.exports = PaymentRouter;
