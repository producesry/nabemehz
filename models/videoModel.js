/**
 * Model for video.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let videoSchema = new Schema({
    "url": String, // 视频链接
    "pic": String, // 图片链接
    "title": String, // 标题
    "like": Number, // 想做的数量
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

mongoose.model('Video', videoSchema);

module.exports = videoSchema;
