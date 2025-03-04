const jwt = require('jsonwebtoken');
const { HttpError } = require('../helpers')
const {User} = require("../models")

const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(' ');
    if (bearer !== "Bearer") {
        next(HttpError(401))
    }

    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if (!user || !user.token || token !== String(user.token)) {
            next(HttpError(401))
        }
        req.user = user;
        next();

    } catch (error) {
        next(HttpError(401))
    }
}

module.exports = auth;