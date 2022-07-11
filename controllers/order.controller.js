const orderModel = require('../models/Order')

const getOrderData =async (req,res) => {
    const orders =await orderModel.find()
    res.send(orders)
}

const getUserOrderData = async (req,res) => {
    const user_orders = await orderModel.find({user_id:req.params.user_id})
    res.send(user_orders)
}

const getSpecificOrderData = async (req,res) => {
    let user_data = await orderModel.findOne({ $and:[{_id : req.params.id},{user_id:req.params.user_id}] })
    res.send(user_data)
}

const postOrderData =async (req,res) => {
    console.log(req.body)
    let order = orderModel({
        user_id : req.body.user_id,
        product_id:req.body.product_id,
        name:req.body.name,
        image:req.body.image,
        price:req.body.price,
        quantity:req.body.quantity
    });

    let saveOrder =await order.save();
    res.send(saveOrder)
}

const updateOrderData =async (req,res) => {
    let updateOrder =await orderModel.updateOne({ _id:req.params.id },req.body)
    res.send( updateOrder )
}

const deleteOrderData =async (req,res) => {
    let deleteOrder =await orderModel.deleteOne({ $and:[{_id : req.params.id},{user_id:req.params.user_id}] })
    res.send('Data deleted')
}

module.exports = { getOrderData,getUserOrderData,postOrderData,updateOrderData,deleteOrderData,getSpecificOrderData }