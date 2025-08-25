import Joi from "joi";
// for admin controllers
export const ClassSchema = Joi.object({
    name: Joi.string().required().min(2).max(50),
    description: Joi.string().optional().max(300).allow(""),
})

export const SubClassSchema = Joi.object({
    name: Joi.string().required().min(2).max(50),
    description: Joi.string().optional().max(300).allow(""),
    classId: Joi.string().required(),
})
