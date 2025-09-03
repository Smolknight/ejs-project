const express = require("express");
// express requires express
const app = express();
// cache the express application to the keyword 'app' through invocation
app.use(express.json()); //middleware that helps with json parsing

app.set("view engine", "ejs"); //set the view engine to use ejs
const PORT = 3000; //cache port number to port

const tableMate = ["nic", "ben", "talon"];
app.get("/", function (req, res) {
  //   res.send("hello there m8");
  res.render("index", { text: "3pm class", goop: "Ben", tableMate });
});

console.log(PORT);
app.listen(PORT); //listen on PORTs
