const express = require('express');
const orderRoute = express.Router();
const { getOrderData,getUserOrderData,postOrderData,updateOrderData,deleteOrderData,getSpecificOrderData } = require("../controllers/order.controller")


orderRoute.get("/getData",getOrderData);
orderRoute.get("/logged/edit/:id/:user_id",getSpecificOrderData);
orderRoute.get("/getSp/:user_id",getUserOrderData);
orderRoute.post("/postData",postOrderData);
orderRoute.delete('/deleteData/:id/:user_id',deleteOrderData);
orderRoute.put("/updateData/:id",updateOrderData);

module.exports = orderRoute;