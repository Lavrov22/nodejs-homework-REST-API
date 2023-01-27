const { User } = require('../../models');

const logout = async (req, res) => {
    console.log(req.user);
    const { _id } = req.user;
    console.log(_id);
    await User.findByIdAndUpdate(_id, { token: '' });
    res.status(204).json();
}

module.exports = logout;