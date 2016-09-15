/**
 * Model for user.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    "phone": String,//手机号
    "role": {
        "type": String,
        "enum": [
            "customer",
            "editor"
        ],
        "default": "customer"
    }
});

mongoose.model('User', userSchema);

module.exports = userSchema;
