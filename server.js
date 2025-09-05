const express = require("express");
// express requires express
const fs = require("fs");
const path = require("path");
const app = express();
// cache the express application to the keyword 'app' through invocation
app.use(express.json()); //middleware that helps with json parsing
app.use(express.urlencoded()); //allows form data to be parsed

app.use(express.static("public"));

app.set("view engine", "ejs"); //set the view engine to use ejs
const userDBfilePath = path.join(__dirname, "data", "usersDB.json"); //gets absolute path to file
const PORT = 3000; //cache port number to port

const tableMate = ["nic", "ben", "talon"];
app.get("/", function (req, res) {
  //   res.send("hello there m8");
  res.render("index", { text: "3pm class", goop: "Ben", tableMate });
});

app.get("/form", (req, res) => {
  res.render("form");
}); //assign the /form endpoint and res.render('form')

app.post("/form/new", (req, res) => {
  console.log("recieved data", req.body);
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/forSale", (req, res) => {
  res.render("forSale");
});

console.log(PORT);
app.listen(PORT); //listen on PORTs
