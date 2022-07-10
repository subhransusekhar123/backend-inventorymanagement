const express=require("express");
const authrouter=express.Router();
const{ sendEmail }= require("../controllers/mail")
const {signUp, login}=require("../controllers/auth.controller");
const {encryptPassword} =require("../middlewares/auth.middleware");

authrouter.post("/signup",encryptPassword,signUp);
authrouter.post("/login",login);
authrouter.get("/sendEmail/:email/:message",(req,res)=>{
    sendEmail(req.params.email,req.params.message)
    res.send("worked");
});
module.exports=authrouter;
