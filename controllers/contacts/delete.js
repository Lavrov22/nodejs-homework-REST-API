const Contact = require('../../models/contacts');


const remove = async (req, res, next) => {
    const { contactId } = req.params;
    const contacts = await Contact.findByIdAndRemove(contactId);
    if (!contacts) {
        return res.status(404).json({ message: 'Not found' });
    }
    res.json({message: "contact deleted"})
}

module.exports = remove;