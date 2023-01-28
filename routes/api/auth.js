const express = require('express');
const router = express.Router();
const { auth: controllers } = require('../../controllers')
const { ctrlWrapper } = require('../../helpers');
const { signUp } = require('../../schemas');
const { login } = require('../../schemas');
const { validation, auth, upload } = require('../../middlewares');



router.post('/signup', validation(signUp), ctrlWrapper(controllers.signUp));

router.post('/login', validation(login), ctrlWrapper(controllers.login));

router.get('/current', auth, ctrlWrapper(controllers.current));

router.post('/logout', auth, ctrlWrapper(controllers.logout))

router.patch('/avatars', auth, upload.single("avatar"), ctrlWrapper(controllers.avatar))

module.exports = router