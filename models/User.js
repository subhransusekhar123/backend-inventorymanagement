// Mongoose models
const mongoose=require("mongoose");

const Userschema=new mongoose.Schema({

    firstname:{
        type:String,
        
    },
    lastname:{
        type:String,
        
    },
    email:{
        type:String,
        unique:true
        
    },

    password:{
        type:String
    },
    company:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

},{
    timestamps: true
})

module.exports=mongoose.model("users",Userschema);