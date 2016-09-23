/**
 * Model for bootstrap（启动页面）.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bootstrapSchema = new Schema({
    "url": String//封面链接
});

global.MODEL.Bootstrap = mongoose.model('Bootstrap', bootstrapSchema);

module.exports = bootstrapSchema;
