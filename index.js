require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

app.listen(port, () => {
  console.log("App is listning on port", port);
});
