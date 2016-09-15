/**
 * Model for rebate.
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
        ]
    },//处理状态
    "user": {
        "type": ObjectId,
        "ref": "User"
    },
    "ticket": String,//小票图片地址
    "before": String,//整形前图片地址
    "after": String//整形后图片地址
});

global.MODEL.Rebate = mongoose.model('Rebate', rebateSchema);

module.exports = rebateSchema;
