import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  description: { type: String },
  profiles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Profile" }],
});

export const Class = mongoose.model("Class", classSchema);
