const express=require("express");
const authrouter=express.Router();

const {signUp, login}=require("../controllers/auth.controller");
const {encryptPassword} =require("../middlewares/auth.middleware");

authrouter.post("/signup",encryptPassword,signUp);
authrouter.post("/login",login);

module.exports=authrouter;
