const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var fs = require('fs');


const UserSchema = new Schema({

    name: {
        type: String,
        required: [true, "name fields is required"]
    },
    age: {
        type: Number,
        required: [true, "age fields is required"]
    },
    email: {
        type: String,
        required: [true, "name fields is required"]
    },
    password: {
        type: String,
        required: [true, "password fields is required"]
    }
})

const Customer = mongoose.model('customerdatabases',UserSchema);
module.exports = Customer;

