const User = require("../models/User");
const { hashPassword, compareCompass } = require("../helpers/auth");

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
   if (!exist) return res.status(400).send("Email is required");

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
      res.status(400).send("Error, Try Again");
   }
};
