const Joi = require('joi');

const reVerify = Joi.object({
  email: Joi.string().email().required(),
})

module.exports = reVerify;