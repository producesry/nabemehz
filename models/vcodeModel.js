/**
 * Model for verification code.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let vcodeSchema = new Schema({
    "phone": {
        "type": String,
        "required": true
    },//手机号
    "code": {
        "type": String,
        "default": function () {
            let code = '';
            for (let i = 0; i < CONFIG.vcode.codeLength; i++) {
                code += Math.floor(Math.random() * 10);
            }
            return code;
        }
    },//验证码
    "createdAt": {
        "type": Date,
        "default": Date.now
    }
});

global.MODEL.Vcode = mongoose.model('Vcode', vcodeSchema);

module.exports = vcodeSchema;
