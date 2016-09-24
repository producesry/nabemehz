/**
 * Model for province（省市）.
 */

'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var provinceSchema = new Schema({
    "name": {
        "type": String,
        "required": true
    },
    "cities": [
        {
            "name": {
                "type": String,
                "required": true
            }
        }
    ]
}, {"versionKey": false});

global.MODEL.Province = mongoose.model('Province', provinceSchema);

module.exports = provinceSchema;
