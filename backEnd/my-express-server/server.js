//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello, World!</h1>");
});
// first parameter is location of the get request which is represented with "/".
// function (request, response) {}.

app.get("/contact", function (req, res) {
  res.send("Reach me at: cemsimseksm@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("My name is: Cem and I'm a Web Developer");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
