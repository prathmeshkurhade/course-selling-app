const express = require('express');
const mongoose = require("mongoose");

const { userRouter }  = require("./routes/user");
const { courseRouter }  = require("./routes/course");
const { adminRouter }  = require("./routes/admin");

const app = express();
app.use(express.json());

// ✅ Connect to MongoDB only once
mongoose.connect("mongodb://localhost:27017/course-selling-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ Connected to MongoDB");

    // ✅ Start the server only after MongoDB is connected
    app.listen(3000, () => {
        console.log("🚀 Server started at port 3000");
    });
}).catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
});

// ✅ Use routers
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);
