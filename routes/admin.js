const { Router } = require("express");

const adminRouter = Router();

// const {adminModel} = require("../db")
const mongoose = require('mongoose');  // ✅ Only import, no connection


adminRouter.post("/signup", function(req,res) {
    res.json({
        message : "signup endpoint"
    })
})

adminRouter.post("/login", function(req,res) {
    res.json({
        message : "signup endpoint"
    })
})


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
