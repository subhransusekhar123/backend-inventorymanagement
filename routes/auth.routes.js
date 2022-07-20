const express=require("express");
const authrouter=express.Router();
const{ sendEmail }= require("../controllers/mail")
const {signUp, login,profileUpdate}=require("../controllers/auth.controller");
const {encryptPassword} =require("../middlewares/auth.middleware");
const axios = require("axios");

authrouter.post("/signup",encryptPassword,signUp);
authrouter.post("/login",login);



authrouter.get("/sendEmail/:email/:message",(req,res)=>{
    sendEmail(req.params.email,req.params.message)
    res.send("worked");
});

authrouter.put("/updateInventory",(req,res)=>{
    //i will have to find // edit //post
    //find
    req.body.map(async(ele,index)=>{
        try{
            let FindOneData =await axios.get(`http://localhost:8900/product/findName/${ele.name}`);
            console.log(FindOneData.data)
            let finalQuantity = FindOneData.data.quantity - ele.orderQuantity;
            axios.put(`http://localhost:8900/product/nameUpdate/${ele.name}`,{quantity : finalQuantity})
            .then((data)=>console.log('data posted'))
            .catch((err)=>console.log(err))
            // console.log(finalQuantity,FindOneData.data.quantity,ele.orderQuantity)
            // console.log(FindOneData.data,index)
        }
        catch(err){
            console.log(err)
        }

    })
    res.send(req.body)
})


authrouter.put("/update_profile/:id",profileUpdate); 

module.exports=authrouter;
