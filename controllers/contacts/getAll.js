const contactsOperation = require('../../models/contacts');

const getAll = async (req, res, next) => {
    const contacts = await contactsOperation.listContacts();
    res.json({ data: contacts })
}

module.exports = getAll;