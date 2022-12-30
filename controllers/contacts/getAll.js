const Contact = require('../../models/contacts');

const getAll = async (req, res, next) => {
    const contacts = await Contact.find();
    res.json({ data: contacts })
}

module.exports = getAll;