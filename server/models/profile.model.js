import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bio: { type: String },
  role: {
    type: String,
    enum: ["student", "teacher"],
    required: true,
    default: "student",
  },
});

export const Profile = mongoose.model("Profile", profileSchema);
