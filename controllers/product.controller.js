const  productModel  = require('../models/Product');
var cloudinary = require('cloudinary').v2;
const fs = require('fs')
const path = require('path')
cloudinary.config({ 
  cloud_name: 'ccompony',
  api_key: '449366357236654',
  api_secret: 'p5nO_GgBqddAr6fOryOr6zhB2UQ',
  secure: true
  });

const productGetController = async (req,res)=>{
    let products =await productModel.find();
    res.send(products)
}

const productPostController = async(req,res) => {

    let image_path = req.files.image.path;
    cloudinary.uploader.upload(image_path, async(error, result)=> {
        if(error) {     
            res.send({"message":"image not supported message"})
        }else{
            let product = productModel({
                name:req.body.name,
                image:result.url,
                price:req.body.price,
                quantity:req.body.quantity
            })
            let saveProduct = await product.save();
            res.send(saveProduct);
        }
    });
}

const productUpdateController = async(req,res) => {
    let getProduct =await productModel.updateOne({_id:req.params.id},req.body)
    res.send(getProduct)
}

const productDeleteController = async(req,res) => {
    let delete_obj = await productModel.deleteOne({_id : req.params.id})
    res.send(delete_obj)
}

module.exports = {
    productGetController,productPostController,productUpdateController,productDeleteController
}
