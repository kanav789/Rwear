const Razorpay = require("razorpay");

const razorpayInstance = new Razorpay({
  key_id: "rzp_test_afrCZbT2lZBKeW",
  key_secret: "YOUR_RAZORPAY_SECRET",
});

app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  try {
    const options = {
      amount: amount * 100, // Convert to smallest currency unit
      currency: currency,
      receipt: `receipt_${Date.now()}`,
    };
    const order = await razorpayInstance.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});
