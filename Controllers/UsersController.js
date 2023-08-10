import User from "../Model/UserModel.js";

export const home = (req, res) => {
  res.send("Home page");
};

export const login = (req, res) => {
  res.send("LOGIN PAGE FROM CONTROLLER");
};

export const register = (req, res) => {
  console.log(req.body, "- req.body");

  const { name, email, phone, password, confirmPassword } = req.body;

  if (name && email && phone && password && confirmPassword) {
    if (password === confirmPassword) {
      const user = new User({
        name,
        email,
        phone: parseInt(phone),
        password,
        confirmPassword,
      });

      user.save();
      console.log(user, "user model");
      res.send("Registered Succefully");
    } else {
      res.send("password and confirmpassword Doesnot match");
    }
  } else {
    res.send("All fields are mandatory");
  }
};
