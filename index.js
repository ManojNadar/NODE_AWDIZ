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
import User from "./Model/UserModel.js";

const app = express();
dotenv.config();
const PORT = 8000;

// ================

app.use(express.json());

// routing************************************************

app.get("/", home);
app.get("/login", login);
app.post("/register", register);

// CRUD

// Read-Get

app.get("/find", async (req, res) => {
  const { name } = req.body;
  // const { name } = req.params;
  // const { name } = req.query;

  if (!name) return res.send("name is required");

  const getDetails = await User.find({ name: name }).select("-password");

  if (getDetails.length) {
    // res.json({ message: "details here", data: getDetails });
    return res.send(getDetails[0]);
  } else {
    return res.send("No details....");
  }
});

// Update-Patch

app.patch("/update/:id", async (req, res) => {
  const { name, password } = req.body;
  const { id } = req.params;

  if (!id) return res.send("id is required");
  if (!name) return res.send("name is required");
  if (!password) return res.send("password is required");

  const updateData = await User.findByIdAndUpdate(
    id,
    {
      name,
      password,
    },
    { new: true }
  ).select("-password");

  res.json({ message: "updated Details here", data: updateData });
});

app.put("/put/:id", async (req, res) => {
  const { name, password } = req.body;
  const { id } = req.params;

  if (!id) return res.send("id is required");
  if (!name) return res.send("name is required");
  if (!password) return res.send("password is required");

  const updateData = await User.findByIdAndUpdate(
    id,
    {
      name,
      password,
    },
    { new: true }
  ).select("-password");

  res.json({ message: "updated Details here", data: updateData });
});

// Delete

app.delete("/delete", async (req, res) => {
  const { id } = req.query;

  if (!id) return res.send("id is required");
  const deleteData = await User.findByIdAndDelete(id);

  res.json({ message: "deleted", data: deleteData });
});

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
