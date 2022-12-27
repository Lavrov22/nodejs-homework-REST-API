const contactsOperation = require('../../models/contacts');

const getById = async (req, res, next) => {
  try {
    const { contactId} = req.params;
    const contacts = await contactsOperation.getContactById(contactId);
    if (!contacts) {
     return res.status(404).json({ message: 'Not found' });
    }
    res.json({ data: contacts })
  } catch (error) {
      next(error);
  }

}

module.exports = getById;