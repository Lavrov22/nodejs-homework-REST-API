const express = require('express');
const router = express.Router();
const { auth: controllers } = require('../../controllers')
const { ctrlWrapper } = require('../../helpers');
const { signUp, login, reVerify } = require('../../schemas');
const { validation, auth, upload } = require('../../middlewares');



router.post('/signup', validation(signUp), ctrlWrapper(controllers.signUp));

router.get('/verify/:verificationToken', ctrlWrapper(controllers.verify));

router.post('/verify', validation(reVerify), ctrlWrapper(controllers.reVerify))

router.post('/login', validation(login), ctrlWrapper(controllers.login));

router.get('/current', auth, ctrlWrapper(controllers.current));

router.post('/logout', auth, ctrlWrapper(controllers.logout))

router.patch('/avatars', auth, upload.single("avatar"), ctrlWrapper(controllers.avatar))



module.exports = router