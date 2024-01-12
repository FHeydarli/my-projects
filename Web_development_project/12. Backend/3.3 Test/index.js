import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("correct");
});

app.get("/", (req, res) => {
  res.send("<h2> Home page </h2>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>Contact me</h2>");
});

app.get("/about", (req, res) => {
  res.send("<h2>About me</h2>");
});
