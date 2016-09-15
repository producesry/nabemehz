/**
 * Model for label.
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
        ]
    },//标签类型
    "name": String//标签名
});

mongoose.model('Label', labelSchema);

module.exports = labelSchema;
