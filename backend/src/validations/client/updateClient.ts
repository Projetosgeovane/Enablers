import { validate, Joi } from "express-validation";

export const updateClient = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        endereco: Joi.string().required(),
        telefone: Joi.string().min(12).max(15).required(),
    }),
});
