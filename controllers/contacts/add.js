const Contact = require('../../models/contacts');


const add = async (req, res, next) => {
    const contacts = await Contact.create(req.body);
    res.status(201).json({data: contacts})
}

module.exports = add;