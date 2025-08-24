import router from "express";

import { register, login } from "../controllers/auth.controller.js";
import {
  validateRegister,
  validateLogin,
} from "../middlewares/validate.middleware.js";

const authRouter = router();

authRouter.post("/register", validateRegister, register);
authRouter.post("/login", validateLogin, login);

export default authRouter;
