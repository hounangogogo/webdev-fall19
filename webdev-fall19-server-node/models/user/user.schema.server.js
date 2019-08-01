const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    username: String,
    password: String,
}, {collection: 'user'});





