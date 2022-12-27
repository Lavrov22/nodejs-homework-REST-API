const contactsOperation = require('../../models/contacts');


const add = async (req, res, next) => {
    const contacts = await contactsOperation.addContact(req.body);
    res.status(201).json({data: contacts})
}

module.exports = add;