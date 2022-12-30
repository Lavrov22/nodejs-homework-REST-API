const Contact = require('../../models/contacts');

const getById = async (req, res, next) => {
    const { contactId} = req.params;
    const contacts = await Contact.findById(contactId);
    if (!contacts) {
     return res.status(404).json({ message: 'Not found' });
    }
    res.json({ data: contacts })

}

module.exports = getById;