const { User } = require('../../models');
const { HttpError, sendEmail } = require('../../helpers')

const { BASE_URL } = process.env;

const reVerify = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        throw HttpError(400, "missing required field email")
    }

    const user = await User.findOne({ email });

    if (user.verify) {
        throw HttpError(400, "Verification has already been passed");
    }

    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click verify email</a>`
    }

    await sendEmail(verifyEmail);

    res.json({
        message: "Verification email sent"
    })

}


module.exports = reVerify;