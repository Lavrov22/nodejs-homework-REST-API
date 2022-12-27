const contactsOperation = require('../../models/contacts');

const update = async (req, res, next) => {

      const { contactId } = req.params;
      const contacts = await contactsOperation.updateContact(contactId, req.body);
      if (!contacts) {
        return res.status(404).json({ message: 'Not found' });
      }
      res.json({data: contacts})
}

module.exports = update;