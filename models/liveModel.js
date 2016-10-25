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
            "default": ObjectId
        },
        "pic": {
            "type": String,
            "required": true
        },//图片链接
        "url": {
            "type": String,
            "required": true
        },//"第三方直播链接",根据链接打开web浏览器,
        "title": {
            "type": String,
            "required": true
        },//标题
        "like": {
            "type": Number,
            "default": 0
        }, // 想看人数
        "doctor": {
            "type": ObjectId,
            "ref": "Doctor",
            "required": true
        },//医生
    },
    "preview": [
        {
            "phase": {
                "type": Number,
                "required": true
            },//第几期
            "video": {
                "type": ObjectId,
                "ref": "Video",
                "required": true
            },//视频
            "watchedCount": {
                "type": Number,
                "default": 0
            }//观看人数
        }
    ]
});

global.MODEL.Live = mongoose.model('Live', liveSchema);

module.exports = liveSchema;
