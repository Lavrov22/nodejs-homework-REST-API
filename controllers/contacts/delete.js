const contactsOperation = require('../../models/contacts');


const remove = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contacts = await contactsOperation.removeContact(contactId);
    if (!contacts) {
        return res.status(404).json({ message: 'Not found' });
    }
    res.json({message: "contact deleted"})
  } catch (error) {
      next(error);
  }
}

module.exports = remove;