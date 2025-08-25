import { Profile } from "../models/profile.model.js";

export const createProfile = async (req, res) => {
    try {
        const { bio, role } = req.body;
        const userId = req.userId;
        if( !userId ) {
            return res.status(403).json({ message: "Unauthorized" });
        }
        const existingProfile = await Profile.findOne({ user: userId });
        if (existingProfile) {
            return res.status(400).json({ message: "Profile already exists for this user" });
        }
        const newProfile = await Profile.create({
            user: userId,
            bio,
            role,
        });
        res.status(201).json({ message: "Profile created successfully", profile: newProfile });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export const getUser = async (req, res) => {
    try {
        const userId = req.userId;
        if( !userId ) {
            return res.status(403).json({ message: "Unauthorized" });
        }
        const profile = await Profile.findOne({ user: userId }).populate('user', '-password');
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        res.status(200).json({ profile });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}