const express = require('express');
const { contacts: controllers } = require('../../controllers')
const {ctrlWrapper} = require('../../helpers')
const { contactSchema } = require('../../schemas');
const { contactFavoriteSchema } = require('../../schemas');
const {validation} = require('../../middlewares');
const router = express.Router();


router.get('/', ctrlWrapper(controllers.getAll));

router.get('/:contactId', ctrlWrapper(controllers.getById));

router.post('/', validation(contactSchema), ctrlWrapper(controllers.add));

router.delete('/:contactId', ctrlWrapper(controllers.remove));

router.put('/:contactId', validation(contactSchema), ctrlWrapper(controllers.update));

router.patch('/:contactId/favorite', validation(contactFavoriteSchema), ctrlWrapper(controllers.updateStatusContact))

module.exports = router
