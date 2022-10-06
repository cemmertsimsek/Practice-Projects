//jshint esversion:6

const express = require("express"); // activating the express.js
const bodyParser = require("body-parser"); // activating the bodyparser package which we uplaod via the npm install body-parser

const app = express(); //app is for using express() function everytime
app.use(bodyParser.urlencoded({ extended: true })); // format of using bodyparser with encoded url. extended: true is not optional.

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html"); //using .sendFile for sending file such as index.html
}); // we get the full path of the directories location and added index.html for fullpath

app.post("/", function (req, res) {
  // we post the values, parse it and use the values for making calculations
  var num1 = Number(req.body.num1); //req.body is all the information we get
  var num2 = Number(req.body.num2); //req.body.num2 is the inputs name which given by us in the html file
  // because req.body.num2 is a string format we need to change its type with Number() method to calculate 2 integers
  var result = num1 + num2; //result is for plus equasion only for this practise

  res.send("The result of the calculation is " + result); //posting the result we get with the string
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
