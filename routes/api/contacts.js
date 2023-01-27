const express = require('express');
const { contacts: controllers } = require('../../controllers')
const { ctrlWrapper } = require('../../helpers');
const { contactSchema } = require('../../schemas');
const { contactFavoriteSchema } = require('../../schemas');
const {validation, auth} = require('../../middlewares');
const router = express.Router();


router.get('/', auth, ctrlWrapper(controllers.getAll));

router.get('/:contactId', auth, ctrlWrapper(controllers.getById));

router.post('/', auth, validation(contactSchema), ctrlWrapper(controllers.add));

router.delete('/:contactId', auth, ctrlWrapper(controllers.remove));

router.put('/:contactId', auth, validation(contactSchema), ctrlWrapper(controllers.update));

router.patch('/:contactId/favorite', auth, validation(contactFavoriteSchema), ctrlWrapper(controllers.updateStatusContact))

module.exports = router
