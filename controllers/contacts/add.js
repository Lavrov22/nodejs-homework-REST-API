const {Contact} = require('../../models');


const add = async (req, res, next) => {
    const { _id: owner } = req.user;
    const contacts = await Contact.create({...req.body, owner});
    res.status(201).json({data: contacts})
}

module.exports = add;