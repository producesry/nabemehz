/**
 * Model for category.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let categorySchema = new Schema({
    "icon": String,//图标URL
    "name": String,//显示文字
    "label": [
        {
            "type": ObjectId,
            "ref": "Label"
        }
    ]//标签
});

global.MODEL.Category = mongoose.model('Category', categorySchema);

module.exports = categorySchema;
