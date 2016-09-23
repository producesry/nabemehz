/**
 * Model for live（直播）.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let liveSchema = new Schema({
    "next": {
        "_id": {
            "type": ObjectId,
            "default": function () {
                return new ObjectId()
            }
        },
        "pic": String,//图片链接
        "url": String,//"第三方直播链接",根据链接打开web浏览器,
        "title": String,//标题
        "like": Number, // 想看人数
        "doctor": {
            "type": ObjectId,
            "ref": "Doctor"
        },//医生
    },
    "preview": [
        {
            "phase": Number,//第几期
            "video": {
                "type": ObjectId,
                "ref": "Video"
            },//视频
            "watchedCount": Number//观看人数
        }
    ]
});

global.MODEL.Live = mongoose.model('Live', liveSchema);

module.exports = liveSchema;
