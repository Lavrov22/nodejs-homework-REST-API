const bcrypt = require('bcryptjs')

const { User } = require('../../models');
const {HttpError} = require('../../helpers')


const signUp = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw HttpError(409, "Email in use")
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({...req.body, password: hashPassword});
    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription
        }
    })
}

module.exports = signUp;