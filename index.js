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

import { login, register, home } from "./Controllers/UsersController.js";
import mongoose from "mongoose";
const app = express();
const PORT = 8000;

const url =
  "mongodb+srv://manojndr:manoj317@cluster0.l8s5peb.mongodb.net/awdiznode";

app.get("/", home);
app.get("/login", login);
app.get("/register", register);

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to datbase");
  })
  .catch(() => {
    console.log("error on connecting");
  });

app.listen(PORT, () => {
  console.log("server started at PORT number 8000");
});
