/**
 * Model for hot word.
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

mongoose.model('Hot', hotSchema);

module.exports = hotSchema;
