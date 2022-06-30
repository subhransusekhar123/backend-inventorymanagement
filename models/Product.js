const mongoose = require('mongoose');
//admin will add here
const productSchema = mongoose.Schema({
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
},{
    timeStamp:true
})

const productModel = mongoose.model("product",productSchema);
module.exports = productModel;

