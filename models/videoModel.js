/**
 * Model for video（视频）.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let videoSchema = new Schema({
    "url": {
        "type": String,
        "required": true
    }, // 视频链接
    "pic": {
        "type": String,
        "required": true
    }, // 封面链接
    "title": {
        "type": String,
        "required": true
    }, // 视频名称
    "like": {
        "type": Number,
        "default": 0
    }, // 想做的数量
    "label": [
        {
            "type": ObjectId,
            "ref": "Label"
        }
    ],
    "doctor": {
        "type": ObjectId,
        "ref": "Doctor"
    },
    "related": [ // 相关视频 0-5个,可能没有
        {
            "type": ObjectId,
            "ref": "Video"
        }
    ]
});

global.MODEL.Video = mongoose.model('Video', videoSchema);

module.exports = videoSchema;
