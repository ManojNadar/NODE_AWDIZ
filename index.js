// npm init -y = create package.json file
// npm i express  = install express framework
// npm i nodemon  = install nodemon package
// package.json -> scripts -> "start" : "nodemon index.js"
// create index.js file
// that 4 step into index.js file
// import express
// create instance
// define routes
// use listen function

import express from "express";
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello Home");
});
app.get("/about", (req, res) => {
  res.send("Hello About");
});

app.listen(PORT, () => {
  console.log("server started at PORT number 8000");
});
