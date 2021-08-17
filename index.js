const express = require("express");
const app = express();
require("dotenv").config();

const PORT = 5000;
const isDev = process.env.NODE_APP !== "production";

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "success",
  });
});

app.get("/users", (req, res) => {
  return res.status(200).json({
    message: "success",
    path: "users",
    try: 3,
  });
});

if (isDev)
  app.listen(PORT, () => {
    console.log("server running....");
  });
else app.listen();
