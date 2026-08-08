const express = require("express");
const Wishlist = require("../models/Wishlist");
const Product = require("../models/Product");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", protect, async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne({
            user: req.user
        }).populate("products");

        if (!wishlist) {
            return res.status(200).json({
                products: []
            });
        }

        res.status(200).json(wishlist);

    } catch (error) {
        console.error("Get wishlist error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

router.post("/:productId", protect, async (req, res) => {
    try {
        const { productId } = req.params;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        let wishlist = await Wishlist.findOne({
            user: req.user
        });

        if (!wishlist) {
            wishlist = await Wishlist.create({
                user: req.user,
                products: [productId]
            });
        } else {
            const alreadyExists = wishlist.products.some(
                id => id.toString() === productId
            );

            if (alreadyExists) {
                return res.status(400).json({
                    message: "Product already in wishlist"
                });
            }

            wishlist.products.push(productId);

            await wishlist.save();
        }

        const updatedWishlist = await Wishlist.findOne({
            user: req.user
        }).populate("products");

        res.status(200).json({
            message: "Product added to wishlist",
            wishlist: updatedWishlist
        });

    } catch (error) {
        console.error("Add wishlist error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

router.delete("/:productId", protect, async (req, res) => {
    try {
        const { productId } = req.params;

        const wishlist = await Wishlist.findOne({
            user: req.user
        });

        if (!wishlist) {
            return res.status(404).json({
                message: "Wishlist not found"
            });
        }

        const exists = wishlist.products.some(
            id => id.toString() === productId
        );

        if (!exists) {
            return res.status(404).json({
                message: "Product not found in wishlist"
            });
        }

        wishlist.products = wishlist.products.filter(
            id => id.toString() !== productId
        );

        await wishlist.save();

        const updatedWishlist = await Wishlist.findOne({
            user: req.user
        }).populate("products");

        res.status(200).json({
            message: "Product removed from wishlist",
            wishlist: updatedWishlist
        });

    } catch (error) {
        console.error("Remove wishlist error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;