import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    questions: { type: Array, required: true },
    subClass: { type: mongoose.Schema.Types.ObjectId, ref: "SubClass", required: true  },
    createdAt: { type: Date, default: Date.now },
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;