const express = require("express");
const route = express.Router();
const stripe = require("stripe")("sk_test_51Q22fKHrevWmd8IWtdkBjINuZLjfPhsnHYfro5snfk0N54f7ScIQqGMQXiIqA6mj2mWpWWQiqrh4PqqXq5iFsMdc00OfrVbg6i");

route.post("/checkout", async (req, res) => {
    try {
        const { products } = req.body;
       

        // Create line items for Stripe session
        const lineItems = products.map((product) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: product.name,
                },
                unit_amount: product.price * 100, // Stripe requires amount in cents
            },
            quantity: product.qty,
        }));

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"], // Corrected key
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:5173/success", // Use http for local testing
            cancel_url: "http://localhost:5173/cancel",
        });

        // Return session ID to the frontend
        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating Stripe checkout session:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = route;
