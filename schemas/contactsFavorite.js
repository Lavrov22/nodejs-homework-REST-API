const Joi = require('joi');

const contactFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

module.exports = contactFavoriteSchema;