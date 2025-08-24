import { User } from "../models/user.model.js";
import { hashPassword, comparePassword } from "../services/auth.service.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../services/auth.service.js";

const cookiesAccessOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "Strict",
  maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
};
const cookiesRefreshOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "Strict",
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
};

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const existingUser = await User.find({ email });
    if (existingUser.length) {
      return res.status(400).json({ error: "Email already exists" });
    }
    const newPassword = await hashPassword(password);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: newPassword,
    });
    const tokens = {
      accessToken: generateAccessToken(newUser._id),
      refreshToken: generateRefreshToken(newUser._id),
    };
    await newUser.save();
    res
      .cookie("refreshToken", tokens.refreshToken, cookiesRefreshOptions)
      .cookie("accessToken", tokens.accessToken, cookiesAccessOptions)
      .status(201)
      .json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const isPasswordValid = await comparePassword(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const tokens = {
      accessToken: generateAccessToken(user._id),
      refreshToken: generateRefreshToken(user._id),
    };
    res
      .cookie("refreshToken", tokens.refreshToken, cookiesRefreshOptions)
      .cookie("accessToken", tokens.accessToken, cookiesAccessOptions)
      .status(200)
      .json({ message: "User logged in successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
