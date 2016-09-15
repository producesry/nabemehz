/**
 * Model for category.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new Schema({
    "icon": String,//图标URL
    "name": String//显示文字
});

mongoose.model('Category', categorySchema);

module.exports = categorySchema;
