import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true, unique: true },
  bio: { type: String },
  role: {
    type: String,
    enum: ["student", "teacher", "admin"],
    required: true,
    default: "admin",
  },
});

export const Profile = mongoose.model("Profile", profileSchema);
