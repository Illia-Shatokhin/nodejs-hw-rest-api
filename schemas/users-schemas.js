import Joi from "joi";

const emailRegexp = /^([a-zA-Z0-9_-]+)@([a-zA-Z0-9_-]+).([a-zA-Z]{2,5})$/;
const passwordRegexp = /^(?=.*\d)[A-Za-z\d]{6,}$/;

const usersSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "missing required email field",
  }),
  password: Joi.string().min(6).pattern(passwordRegexp).required().messages({
    "any.required": "missing required password field",
  }),
  subscription: Joi.string().valid("starter", "pro", "business"),
});

const usersSubscriptionFieldSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").messages({
    "any.required": "missing required favorite field",
  }),
});

const usersEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "missing required field email",
  }),
});

export default { usersSchema, usersSubscriptionFieldSchema, usersEmailSchema };
