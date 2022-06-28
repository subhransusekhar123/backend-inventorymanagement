const key="Secretkey";
const jwt =require("jsonwebtoken");

const allowAccess=(req,res,next)=>{
    const token=req.headers.token;
    if(token){
        jwt.verify(token, key, function(err, decoded) {
            if(err){
                res.json({
                    message:"Token Not Valid "
                })
            }
            else{
                next();
            }
        });
    }
    else{
        res.json({
            message:"Restricted  Access"
        })
    }
    
}

module.exports={
    allowAccess

}