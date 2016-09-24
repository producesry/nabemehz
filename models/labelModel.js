/**
 * Model for label（标签）.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let labelSchema = new Schema({
    "labelType": {
        "type": String,
        "enum": [
            "project",//项目
            "bodyParts",//部位
            "series"//系列
        ],
        "required": true
    },//标签类型
    "name": {
        "type": String,
        "required": true
    }//标签名
});

global.MODEL.Label = mongoose.model('Label', labelSchema);

module.exports = labelSchema;
