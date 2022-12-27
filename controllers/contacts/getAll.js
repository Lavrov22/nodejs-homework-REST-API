const contactsOperation = require('../../models/contacts');

const getAll = async (req, res, next) => {
  try {
    const contacts = await contactsOperation.listContacts();
    res.json({ data: contacts })
  } catch (error) {
    next(error);
  }
}

module.exports = getAll;