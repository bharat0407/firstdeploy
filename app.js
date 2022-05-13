import express from "express";
const app = express();

app.get("/names",(req,res)=>{
   res.send("Bharat yadav");
});


app.listen(5001,()=>{
    console.log("server is running on port 5001:");
});