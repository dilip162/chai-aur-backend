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

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke 1",
      joke: "this is joke 1",
    },
    {
      id: 2,
      title: "joke 2",
      joke: "this is joke 2",
    },
    {
      id: 3,
      title: "joke 3",
      joke: "this is joke 3",
    },
    {
      id: 4,
      title: "joke 4",
      joke: "this is joke 4",
    },
    {
      id: 5,
      title: "joke 5",
      joke: "this is joke 5",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log("App is listning on port", port);
});
