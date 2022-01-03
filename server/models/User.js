const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
   {
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
      password: {
         type: String,
         required: true,
         min: 6,
         max: 64,
      },
      secret: {
         type: String,
         trim: true,
         required: true,
      },
      about: {},
      photo: String,
      goals: String,
      sale: [
         {
            customer: {
               type: Schema.ObjectId,
               ref: "customer",
            },
            // saleId: {
            //    type: String,
            // },
         },
      ],
      // clients: [
      //    {
      //       type: Schema.ObjectId,
      //       ref: "client",
      //    },
      // ],
      // tasks: [
      //    {
      //       type: Schema.ObjectId,
      //       ref: "task",
      //    },
      // ],
      // reports: [
      //    {
      //       type: Schema.ObjectId,
      //       ref: "report",
      //    },
      // ],
      // followUps: [
      //    {
      //       type: Schema.ObjectId,
      //       ref: "followup",
      //    },
      // ],
   },
   { timestamps: true }
);

const user = mongoose.model("user", UserSchema);

module.exports = user;
