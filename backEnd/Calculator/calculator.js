//jshint esversion:6

const express = require("express"); // activating the express.js
const bodyParser = require("body-parser"); // activating the bodyparser package which we uplaod via the npm install body-parser

const app = express(); //app is for using express() function everytime
app.use(bodyParser.urlencoded({ extended: true })); // format of using bodyparser with encoded url. extended: true is not optional.

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html"); //using .sendFile for sending file such as index.html
}); // we get the full path of the directories location and added index.html for fullpath

app.post("/bmicalculator", function (req, res) {
  // we post the values, parse it and use the values for making calculations
  var weight = parseFloat(req.body.weight); //req.body is all the information we get
  var height = parseFloat(req.body.height); //req.body.num2 is the inputs name which given by us in the html file
  // because req.body.num2 is a string format we need to change its type with Number() method to calculate 2 integers parseFloat() is also usable
  // beacuse req.body.weight
  var result = weight / (height * height); //result is for plus equasion only for this practise

  res.send("Your BMI is: " + result); //posting the result we get with the string
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
