const express = require('express');
const {contacts: controllers} = require('../../controllers')
const {contactSchema} = require('../../schemas');
const {validation} = require('../../middlewares');
const router = express.Router();


router.get('/', controllers.getAll);

router.get('/:contactId', controllers.getById);

router.post('/', validation(contactSchema), controllers.add);

router.delete('/:contactId', controllers.remove);

router.put('/:contactId', validation(contactSchema), controllers.update)

module.exports = router
