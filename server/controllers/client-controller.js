const Item = require("../models/Item");
const Customer = require("../models/Client");
const { generateId } = require("../helpers/client-helper");
const { generateSaleId } = require("../helpers/sale-helper");
const User = require("../models/User");

// Create Client Profile
export const create_customer = async (req, res) => {
   const { name, email, address } = req.body;
   if (!name) return res.status(400).send("Name is required");
   const exist = await Customer.findOne({ email });
   if (exist) return res.status(400).send("Email already Exists");
   if (!email) return res.status(400).send("Email is required to move forward");

   try {
      const user = await User.findById(req.params.userid);
      if (!user) return res.status(400).send("User not found");

      const client = new Customer({
         name,
         email,
         address,
         clientId: generateId(),
      });

      user.sale.unshift(client);

      await user.save();
      console.log("New Client Added", client);
      return res.json({ ok: true });
   } catch (err) {
      console.log("Something is wrong", err.message);
      return res.status(400).send("Error, try again");
   }
};

export const get_customers = async (req, res) => {
   try {
      const customers = await Customer.find({}, { name: 1 });
      if (!customers) res.status(400).send("No customers right now");
      if (customers) res.status(200).json(customers);
   } catch (err) {
      console.log("Something is wrong", err.message);
      res.status(400).send("Error,try again");
   }
};

export const create_sale = async (req, res) => {
   // const { name, description, saleId } = req.body;
   // if (!name) return res.status(400).send("Product name should added");
   // if (!description) return res.status(400).send("Description is required");

   try {
      const user = await User.findById(req.params.userid);

      if (!user) return res.status(400).send("User not found, try again");

      // const newSale = new Item({  name, description, saleId: generateSaleId() });
      const newSale = {
         saleId: generateSaleId(),
      };
      user.sale.unshift(newSale);
      await user.save();

      console.log(newSale);

      console.log("Item has Been added successfully", newSale);
      res.json({
         user: user.toObject({ getters: true }),
      });
      // return res.json(newSale);
   } catch (err) {
      console.log("Something is wrong", err.message);
      res.status(400).send("Error, try again");
   }
};

export const get_client_by_id = async (req, res) => {
   const clientId = req.params.id;
   try {
      const client = await Customer.findById(clientId);
      if (!client)
         return res.status(400).send("Client not found, try creating one");
      res.json({ client: client.toObject({ getters: true }) });
      // res.json()
      console.log(client);
   } catch (err) {
      console.log(err.message);
   }
};

export const total_sales = async (req, res) => {};
