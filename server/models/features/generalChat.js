import mongoose from "mongoose";

const generalChatSchema = new mongoose.Schema({
    class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true, unique: true },
    messages: [
        {
            sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
            message: { type: String, required: true },
            timestamp: { type: Date, default: Date.now }
        }
    ]
});

const GeneralChat = mongoose.model("GeneralChat", generalChatSchema);

export default GeneralChat;