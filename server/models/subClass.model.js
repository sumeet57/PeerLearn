import mongoose from "mongoose";

const subClassSchema = new mongoose.Schema({
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
  name: { type: String, required: true },
  description: { type: String },
});

export const SubClass = mongoose.model("SubClass", subClassSchema);
