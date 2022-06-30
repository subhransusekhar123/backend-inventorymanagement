require("dotenv").config();
const app=require("./app");
const port=process.env.PORT || 8900;
const dbConnect=require("./db");

dbConnect(process.env.MONGO_URL)
.then(()=>{
    app.listen(port,()=>{
        console.log(`DB connected ,Server Running At Port ${port}`);
    })
})
.catch(err=>{
    console.log("Error Connecting With Db")
})



