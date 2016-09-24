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
    "phone": {
        "type": String,
        "required": true
    },//手机号
    "role": {
        "type": String,
        "enum": [
            "customer",
            "editor"
        ],
        "default": "customer"
    }
});

global.MODEL.User = mongoose.model('User', userSchema);

module.exports = userSchema;
