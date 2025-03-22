const { Router } = require("express");
const mongoose = require("mongoose");
const {userModel} = require("../db");  // ✅ Import userModel
const jwt =require("jsonwebtoken");
const JWT_USER_PASSWORD = "yomama"

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
    const { email, password, firstname, lastname } = req.body;
    
    try {
        await userModel.create({
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname
        });

        res.json({
            message: "Signup Succeeded"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

userRouter.post("/login", async function (req, res) {
    const {email, password} = req.body;
    const user = await userModel.findOne({
        email  :email,
        password : password
    })

    if(user) {
        const token = jwt.sign({
            id : user._id
        }, JWT_USER_PASSWORD);    
    
    res.json({
    token : token
    }) }
    else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "Purchases endpoint"
    });
});

module.exports = {
    userRouter: userRouter
};
