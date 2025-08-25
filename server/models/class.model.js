import mongoose from "mongoose";
import { SubClass } from "./subClass.model";

const classSchema = new mongoose.Schema({
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  SubClasses : [{ type: mongoose.Schema.Types.ObjectId, ref: "SubClass" }],
  name: { type: String, required: true },
  description: { type: String },
});

export const Class = mongoose.model("Class", classSchema);
