const { Router } = require("express");
const mongoose = require("mongoose");
const userModel = require("../db");  // ✅ Import userModel

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
    const { email, password, firstName, lastName } = req.body;
    
    try {
        await userModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        });

        res.json({
            message: "Signup Succeeded"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

userRouter.post("/login", function (req, res) {
    res.json({
        message: "Login endpoint"
    });
});

userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "Purchases endpoint"
    });
});

module.exports = {
    userRouter: userRouter
};
