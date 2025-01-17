import Joi from "joi";

const contactsSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "missing required name field",
  }),
  email: Joi.string().required().messages({
    "any.required": "missing required email field",
  }),
  phone: Joi.string().required().messages({
    "any.required": "missing required phone field",
  }),
  favorite: Joi.boolean(),
});

const contactsFavoriteFieldSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": "missing required favorite field",
  }),
});

export default { contactsSchema, contactsFavoriteFieldSchema };
