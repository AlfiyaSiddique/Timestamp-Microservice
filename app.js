const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({optionsSuccessStatus:200}));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.get("/app", (req, res) => {
  res.sendFile(__dirname + "/main.html")
})

app.get("/api/:date?", (req, res) => {
  let dateInput = req.params.date;
  console.log(dateInput);
  
  let result = {};
  let myDate = new Date();

  if(dateInput){
      if (!isNaN(dateInput)) {
    dateInput = parseInt(dateInput);
      }

    myDate = new Date(dateInput);
  }

  if (myDate.toUTCString() === 'Invalid Date') {
    result = {
      error: "Invalid Date"
    }
  } else {
    result ={
      unix: myDate.getTime(),
      utc: myDate.toUTCString()
    };
  }
 console.log(result);
  res.send(result);
})

app.listen(80, () => {
  console.log("Server is running at port 80")
}) 
