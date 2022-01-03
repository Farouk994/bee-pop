const mongoose = require("mongoose");
const { Schema } = mongoose;

const CustomerSchema = new Schema({
   name: {
      type: String,
      trim: true,
      required: true,
   },
   email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
   },
   address: {
      type: String,
      trim: true,
      required: true,
   },
   clientId: {
      type: String,
      trim: true,
      //   required: true,
   },
   purchases: [
      {
         item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "item",
         },
         date: {
            type: Date,
            default: Date.now,
         },
      },
   ],
});

const customer = mongoose.model("customer", CustomerSchema);

module.exports = customer;
