const signUp = require('./signup');
const login = require('./login');
const current = require('./current')
const logout = require('./logout')
const avatar = require('./avatar')
const verify = require('./verify')
const reVerify = require('./reVerify')


module.exports = {
    signUp,
    login,
    current,
    logout,
    avatar,
    verify,
    reVerify
}