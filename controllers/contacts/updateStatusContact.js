const { Contact } = require('../../models');
const { HttpError } = require('../../helpers');

const updateStatusContact = async (req, res, next) => {

      const { contactId } = req.params;
      const contacts = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
      if (!contacts) {
        throw HttpError(404);
      }
      res.json({data: contacts})
}

module.exports = updateStatusContact;