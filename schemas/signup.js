const Joi = require('joi');

const signUp = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
})

module.exports = signUp;