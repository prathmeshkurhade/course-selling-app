const express = require('express')
const app = express();

const { userRouter }  = require("./routes/user");
const { courseRouter }  = require("./routes/course");
const user = require('./routes/user');

app.use("/user", userRouter);
app.use("/course", courseRouter);





app.listen(3000)