const contactSchema = require('./contacts');
const contactFavoriteSchema = require('./contactsFavorite');
const signUp = require('./signup');
const login = require('./login');

module.exports = {
    contactSchema,
    contactFavoriteSchema,
    signUp,
    login
};