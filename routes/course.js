const { Router } = require("express");

const courseRouter = Router();
const mongoose = require('mongoose');  // ✅ Only import, no connection


courseRouter.post("/purchase", function(req,res) {
    res.json({
        message : "signup endpoint"
    })
})

courseRouter.get("/preview", function(req,res) {
    res.json({
        message : "signup endpoint"
    })
})


module.exports = {
    courseRouter : courseRouter
}