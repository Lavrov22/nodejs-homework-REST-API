const getAll = require('./getAll');
const getById = require('./getById');
const add = require('./add');
const remove = require('./delete');
const update = require('./update')
const updateStatusContact = require('./updateStatusContact')


module.exports = {
    getAll,
    getById,
    add,
    remove,
    update,
    updateStatusContact,
    
}