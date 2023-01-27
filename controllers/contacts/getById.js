const {Contact} = require('../../models');
const {HttpError} = require('../../helpers')

const getById = async (req, res, next) => {
    const { contactId } = req.params;
    const contacts = await Contact.findById(contactId);
    if (!contacts) {
        throw HttpError(404);
    }
    res.json({ data: contacts })
}

module.exports = getById;