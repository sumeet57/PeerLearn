import Joi from "joi";

export const AssignmentSchema = Joi.object({
    title: Joi.string().required().min(2).max(100),
    description: Joi.string().optional().max(500),
    dueDate: Joi.date().required(),
});

export const QuizSchema = Joi.object({
    title: Joi.string().required().min(2).max(100),
    description: Joi.string().optional().max(200),
    questions: Joi.array().items(Joi.object({
        questionText: Joi.string().required().min(1).max(100),
        options: Joi.array().items(Joi.string()).min(2).required(),
        correctOptionIndex: Joi.number().integer().min(0).required()
    })).required()
});

export const PollSchema = Joi.object({
    question: Joi.string().required().min(2).max(200),
    options: Joi.array().items(Joi.string().min(1).max(100)).min(2).required(),
});

export const AnnouncementSchema = Joi.object({
    title: Joi.string().required().min(2).max(100),
    content: Joi.string().required().min(1).max(1000),
    timestamp: Joi.date().default(Date.now)
});