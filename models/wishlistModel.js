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
    "userId": ObjectId,
    "wishType": {
        "type": String,
        "enum": [
            "video",
            "live"
        ]
    },
    "wishId": ObjectId
});

global.MODEL.Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = wishlistSchema;
