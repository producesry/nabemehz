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
    "phone": String,//手机号
    "code": String//验证码
});

global.MODEL.Vcode = mongoose.model('Vcode', vcodeSchema);

module.exports = vcodeSchema;
