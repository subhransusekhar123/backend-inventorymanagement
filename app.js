const express=require("express");
const app=express();
const cors=require("cors");

const authrouter=require("./routes/auth.routes");
const { allowAccess } = require("./middlewares/security.middleware");

app.use(express.json());
app.use(cors());

app.use("/auth",authrouter);  // publicly available

module.exports=app;