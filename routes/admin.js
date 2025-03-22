const { Router } = require("express");

const adminRouter = Router();

// const {adminModel} = require("../db")
const mongoose = require('mongoose');  // ✅ Only import, no connection

const jwt =require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "yodada"


adminRouter.post("/signup", async function (req, res) {
    const { email, password, firstname, lastname } = req.body;
    
    try {
        await adminModel.create({
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


adminRouter.post("/login", async function (req, res) {
    const {email, password} = req.body;
    const user = await adminModel.findOne({
        email  :email,
        password : password
    })

    if(user) {
        const token = jwt.sign({
            id : user._id
        }, JWT_ADMIN_PASSWORD);    
    
    res.json({
    token : token
    }) }
    else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});


adminRouter.post("/", function(req,res) {
    res.json({
        message : "signup endpoint"
    })
})
adminRouter.put("/course", function(req,res) {
    res.json({
        message : "signup endpoint"
    })
})


adminRouter.get("/course/bulk", function(req,res) {
    res.json({
        message : "signup endpoint"
    })
})


module.exports = {
    adminRouter
};
