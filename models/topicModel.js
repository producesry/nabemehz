/**
 * Model for topic.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let topicSchema = new Schema({
    "sequence": Number, //排列序号
    "header": {
        "pic": String, // 图片的URL
        "video": String, // 视频URL，可能没有,如果没有就不显示播放按钮
    },
    "videos": [
        {
            "type": ObjectId,
            "ref": "Video"
        }
    ]
});

global.MODEL.Topic = mongoose.model('Topic', topicSchema);

module.exports = topicSchema;
