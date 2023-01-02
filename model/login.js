let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = Schema({
    id: Number,
    username: String,
    name: String,
    role: String,
    password:String
});


// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('users', UserSchema);
