const User = require("../models/User");
const {
   hashPassword,
   compareCompass,
   comparePassword,
} = require("../helpers/auth");
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
   // Data from body
   // console.log("Register Data: ", req.body)
   const { name, email, password, secret } = req.body;
   // validation
   if (!name) return res.status(400).send("Name is required!");
   if (!password || password.length < 6)
      return res
         .status(400)
         .send("Password is required and should be 6 characters long!");
   if (!secret) return res.status(400).send("Answer is required!");

   //    Check if email exists, if it does return error
   const exist = await User.findOne({ email });
   if (exist) return res.status(400).send("Email is taken");
   if (!email) return res.status(400).send("Email is required");

   //    hash Password
   const hashedPassword = await hashPassword(password);

   const user = new User({ name, email, password: hashedPassword, secret });
   try {
      await user.save();
      console.log("User has now been registered ==>", user);
      return res.json({
         ok: true,
      });
   } catch (err) {
      console.log("REGISTER FAILED", err.message);
      return res.status(400).send("Error, Try Again");
   }
};

export const login = async (req, res) => {
   // find user hash password already saved in database and compare with the client password
   try {
      // find user with email, check db
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(400).send("Invalid Credentials");

      // check password
      const match = await comparePassword(password, user.password);
      if (!match) return res.status(400).send("Invalid Credentials");

      // create signed token
      // /find user _id in token, generate token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
         expiresIn: "7d",
      });
      // Just to make sure we are not sending user password and secret in token
      user.password = undefined;
      user.secret = undefined;

      // send response as json, all user info will be sent except password and secret
      res.json({ token, user });
   } catch (err) {
      console.log(err);
      return res.status(400).send("Error, please try again");
   }
};
