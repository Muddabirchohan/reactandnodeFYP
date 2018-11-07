const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var fs = require('fs');

//createing loaction schema
// const GeoSchema = new Schema({

//     type : {
//         type: String,
//         default: "point"
//     },

//     coordinates: {
//         type: [Number],
//         index: "2dsphere"
//     },
// })

const UserSchema = new Schema({

    name: {
        type: String,
        required: [true, "name fields is required"]
    },
    email: {
        type: String,
        required: [true, "email fields is required"]
    },
    age: {
        type: Number,
    },
    type: {
        type: String
    },
     image: {
      type: String,
    }

    // img: { data: Buffer, contentType: String },
    //geo loactions
    // geometry: GeoSchema
})

const User = mongoose.model('userdatabases',UserSchema);
module.exports = User;

