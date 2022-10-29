const express = require("express");
const app = express(); 

app.use(express.static(__dirname+"/public"));

app.get("/", (req,res)=>{
   res.sendFile(__dirname+"/index.html");
})


app.get("/app", (req,res)=>{
  res.sendFile(__dirname+"/main.html")
})
app.listen(80, ()=>{
    console.log("Server is running at port 80")
}) 