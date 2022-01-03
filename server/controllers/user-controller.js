const User = require("../models/User");
const Item = require("../models/Client");

export const get_users = async (req, res) => {
   try {
      const user = await User.find().sort({ date: -1 });

      res.json(user);
   } catch (err) {
      console.log(err.message);
   }
};

export const get_all_sales_by_user = async (req, res) => {
   try {
      const user = await User.findById(req.params.userId);
      if (!user) return res.status(400).send("User not found");

    //   const sale = await 
   } catch (err) {
      console.log(err.message);
   }
};
