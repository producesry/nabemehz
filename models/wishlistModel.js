/**
 * Model for wishlist.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let wishlistSchema = new Schema({
    "userId": {
        "type": ObjectId,
        "required": true
    },
    "wishType": {
        "type": String,
        "enum": [
            "video",
            "live"
        ],
        "required": true
    },
    "wishId": {
        "type": ObjectId,
        "required": true
    }
});

global.MODEL.Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = wishlistSchema;
