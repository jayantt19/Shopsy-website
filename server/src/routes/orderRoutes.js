const express = require("express");
const Order = require("../models/Order");
const Cart = require("../models/Cart");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, async (req, res) => {
    try {
        const cart = await Cart.findOne({
            user: req.user
        }).populate("items.product");

        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                message: "Cart is empty"
            });
        }

        const orderItems = cart.items.map((item) => ({
            product: item.product._id,
            quantity: item.quantity,
            price: item.product.price
        }));

        const totalAmount = orderItems.reduce(
            (total, item) => {
                return total + item.price * item.quantity;
            },
            0
        );

        const order = await Order.create({
            user: req.user,
            items: orderItems,
            totalAmount
        });

        cart.items = [];
        await cart.save();

        const createdOrder = await Order.findById(order._id)
            .populate("items.product");

        res.status(201).json({
            message: "Order created successfully",
            order: createdOrder
        });

    } catch (error) {
        console.error("Create order error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

router.get("/", protect, async (req, res) => {
    try {
        const orders = await Order.find({
            user: req.user
        })
        .populate("items.product")
        .sort({ createdAt: -1 });

        res.status(200).json(orders);

    } catch (error) {
        console.error("Get orders error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

router.get("/:id", protect, async (req, res) => {
    try {
        const order = await Order.findOne({
            _id: req.params.id,
            user: req.user
        }).populate("items.product");

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json(order);

    } catch (error) {
        console.error("Get order error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;