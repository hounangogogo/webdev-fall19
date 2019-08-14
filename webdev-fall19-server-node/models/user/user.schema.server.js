const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    username: String,
    password: String,
    sections: [{type: mongoose.Schema.Types.Object, ref: 'SectionModel'}]
}, {collection: 'user'});





