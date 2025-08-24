import Joi from "joi";

export const registerSchema = Joi.object({
  firstName: Joi.string().required().min(2).max(30),
  lastName: Joi.string().optional().max(30).allow(""),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(20),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(20),
});
