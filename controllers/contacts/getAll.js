const {Contact} = require('../../models');

const getAll = async (req, res, next) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20} = req.query;

    const skip = (page - 1) * limit;
    const contacts = await Contact.find({ owner }).skip(skip).limit(limit).sort({"favorite": -1})
        .populate('owner', "email");
    res.json({ data: contacts })
}

module.exports = getAll;