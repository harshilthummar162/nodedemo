const { hash } = require("bcryptjs");
const { Schema, model } = require("mongoose");
const message = require("../json/message.json");
const { date } = require("joi");

const userSchema = new Schema(
  {
    email: { type: String, unique: true, },
    name: { type: String },
    password: { type: String, required: true },
    bio: {type: String},
    // dob: {type: date},
    isActive: { type: Boolean, default: true, },
  },
  { timestamps: true, versionKey: false }
);


let userModel = model("user", userSchema, "user");
module.exports = userModel;
