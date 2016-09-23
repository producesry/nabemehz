/**
 * Model for hot word（热词）.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let hotSchema = new Schema({
    "words": [{
        "type": String
    }],
    "doctors": [{
        "type": String
    }]
});

global.MODEL.Hot = mongoose.model('Hot', hotSchema);

module.exports = hotSchema;
