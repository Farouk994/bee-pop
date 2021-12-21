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
      following: [
         {
            type: Schema.ObjectId,
            ref: "User",
         },
      ],
      followers: [
         {
            type: Schema.ObjectId,
            ref: "User",
         },
      ],
   },
   { timestamps: true }
);

export const User = mongoose.model('User', UserSchema);
