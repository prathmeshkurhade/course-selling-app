const express = require('express')
const app = express();

const mongoose = require("mongoose");

const { userRouter }  = require("./routes/user");
const { courseRouter }  = require("./routes/course");
const { adminRouter }  = require("./routes/admin");
const user = require('./routes/user');

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function main() {
    await mongoose.connect("mongodb://localhost:27017")
    app.listen(3000);
    console.log("are u cooked")
}




main()