const express = require("express");
const PORT = process.env.PORT || 4040 ;
const app = express()
app.use(express.json());
app.post("*" ,async(req,res)=>{
    res.send("hello post ");
})
app.get("*" , async(req,res)=>{
    res.send("hello get ")
})
app.listen(PORT , function(err){
    if(err) console.log(err);
    console.log("Server Listening on Port " , PORT)
})