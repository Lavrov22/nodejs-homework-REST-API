const Contact = require('../../models/contacts');

const updateStatusContact = async (req, res, next) => {

      const { contactId } = req.params;
      const contacts = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
      if (!contacts) {
        return res.status(404).json({ message: 'Not found' });
      }
      res.json({data: contacts})
}

module.exports = updateStatusContact;