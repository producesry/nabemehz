/**
 * Model for province（省市）.
 */

'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var provinceSchema = new Schema({
    name: String,
    cities: [
        {
            name: String
        }
    ]
}, {versionKey: false});

global.MODEL.Province = mongoose.model('Province', provinceSchema);

module.exports = provinceSchema;
