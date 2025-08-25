import mongoose from "mongoose";
import { Profile } from "./profile.model.js";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: String },
  Profiles : [{ type: mongoose.Schema.Types.ObjectId, ref: "Profile" }],
});

export const User = mongoose.model("User", userSchema);
