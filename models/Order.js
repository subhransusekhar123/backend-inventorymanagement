const mongoose = require('mongoose');
const orderSchema  = mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    product_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderModel = mongoose.model("userOrder",orderSchema);
module.exports = orderModel;