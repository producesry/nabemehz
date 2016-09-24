/**
 * Model for rebate（返利）.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let rebateSchema = new Schema({
    "status": {
        "type": String,
        "enum": [
            "waiting",//未处理
            "processing",//沟通中
            "done"//已处理
        ],
        "default": "waiting"
    },//处理状态
    "user": {
        "type": ObjectId,
        "ref": "User",
        "required": true
    },
    "ticket": {
        "type": String,
        "required": true
    },//小票图片地址
    "before": {
        "type": String,
        "required": true
    },//整形前图片地址
    "after": {
        "type": String,
        "required": true
    }//整形后图片地址
});

global.MODEL.Rebate = mongoose.model('Rebate', rebateSchema);

module.exports = rebateSchema;
