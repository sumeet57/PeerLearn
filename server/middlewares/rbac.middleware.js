import { Profile } from "../models/profile.model.js";
import { verifyAccessToken,verifyRefreshToken, generateAccessToken,generateRefreshToken } from "../services/auth.service.js";

export const isAuthorized = async (allowedRoles) => {
  if (allowedRoles.length === 0) return (req, res, next) => next();
  // const validRoles;
  
  const refreshToken = req.cookies.refreshToken;
  const accessToken = req.cookies.accessToken;

  if (!accessToken && !refreshToken) {
    return res.status(401).json({ message: "Access token missing" });
  }else if(!accessToken && refreshToken){
    const userData = verifyRefreshToken(refreshToken);
    if (!userData) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }
    const tokens = {
      accessToken: generateAccessToken(userData.id),
      refreshToken: generateRefreshToken(userData.id),
    };
    res
      .cookie("refreshToken", tokens.refreshToken, cookiesRefreshOptions)
      .cookie("accessToken", tokens.accessToken, cookiesAccessOptions);
    req.userId = userData.id;
  }else{
    const userData = verifyAccessToken(accessToken);
    if (!userData) {
      return res.status(403).json({ message: "Invalid access token" });
    }
    req.userId = userData.id;
  }
  try {
    const profile = await Profile.findOne({ user: req.userId });
    if (!profile || !allowedRoles.includes(profile.role)) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    next(); 
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
