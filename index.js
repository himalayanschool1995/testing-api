const express = require("express");
const app = express();

const PORT = 5000

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});


app.get("/users", (req, res) => {
  res.status(200).json({
    message: "success",
    path:"users"
  });
});


app.listen(PORT)


