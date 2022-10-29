const express = require("express");
const app = express(); 

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get("/api/:date", (req,res)=>{
    let dateInput = req.params.date;
    let result = {};
    if(dateInput.indexOf('-') === -1){
        dateInput = parseInt(dateInput);
    } 
    const myDate =  new Date(dateInput);
    if(myDate.toUTCString() === 'Invalid Date'){
         result = {
           error: "Invalid Date"
        }
    }else{
         result = {
            unix: myDate.getTime(),
            utc: myDate.toUTCString()
        }
    }
    res.json(JSON.stringify(result));
})

app.listen(3000, ()=>{
    console.log("Api Server is running at port 3000")
})
