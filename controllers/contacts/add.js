const contactsOperation = require('../../models/contacts');


const add = async (req, res, next) => {
  try {
    const contacts = await contactsOperation.addContact(req.body);
    res.status(201).json({data: contacts})
  } catch (error) {
    next(error);
  }
}

module.exports = add;