import mongoose from "mongoose";

const pollSchema = new mongoose.Schema({
    subClass: { type: mongoose.Schema.Types.ObjectId, ref: "SubClass", required: true },
    question: { type: String, required: true },
    options: [
        { optionText: { type: String, required: true },
          votes: { type: Number, default: 0 } 
        }
    ],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
});

const Poll = mongoose.model("Poll", pollSchema);

export default Poll;