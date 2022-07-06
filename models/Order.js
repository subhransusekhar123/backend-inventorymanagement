const mongoose = require('mongoose');
const orderSchema  = mongoose.Schema({
    user_id:{
        type:String
    }
})

const orderModel = mongoose.model(userOrders,orderSchema);

module.exports = orderModel;