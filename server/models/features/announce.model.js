import mongoose from "mongoose";

const announceSchema = new mongoose.Schema({
    class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
    announcements: [
        {
            title: { type: String, required: true },
            content: { type: String, required: true },
            timestamp: { type: Date, default: Date.now }
        }
    ] 
});

const Announcement = mongoose.model("Announcement", announceSchema);

export default Announcement;