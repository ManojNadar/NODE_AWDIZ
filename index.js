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
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = 8000;

// ================

app.use(express.json());

// routing************************************************

app.get("/", home);
app.get("/login", login);
app.post("/register", register);

// Mongoose connection**************************************

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("connected to datbase");
  })
  .catch(() => {
    console.log("error on connecting");
  });

// app Listening*******************************************

app.listen(PORT, () => {
  console.log("server started at PORT number 8000");
});
