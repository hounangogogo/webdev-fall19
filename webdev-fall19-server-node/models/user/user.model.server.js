const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');

const userModel = mongoose.model('UserModel', userSchema);


findAllUsers = () =>
    userModel.find();

findUserByCredentials = (username, pasword) =>
    userModel.findOne({username: username, password: pasword});

module.exports = {
    findAllUsers,
    findUserByCredentials
};
