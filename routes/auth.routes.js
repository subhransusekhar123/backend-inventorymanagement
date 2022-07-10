const express=require("express");
const authrouter=express.Router();
const{ sendEmail }= require("../controllers/mail")
const {signUp, login,profileUpdate}=require("../controllers/auth.controller");
const {encryptPassword} =require("../middlewares/auth.middleware");

authrouter.post("/signup",encryptPassword,signUp);
authrouter.post("/login",login);
authrouter.get("/sendEmail",(req,res)=>{
    sendEmail("suvarna.pawar812@gmail.com","this is a test email to test something")
    res.send("worked");
});
authrouter.put("/update_profile/:id",profileUpdate); 

module.exports=authrouter;
