/**
 * Model for live.
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
        "pic": String,//图片地址
        "url": String,//"第三方直播链接",根据链接打开web浏览器,
        "title": String,//标题
        "like": Number, // 想看人数
        "doctor": {
            "type": ObjectId,
            "ref": "Doctor"
        },
    },
    "preview": [
        {
            "phase": Number,//第几期
            "video": {
                "type": ObjectId,
                "ref": "Video"
            },
            "watchedCount": Number//有多少人看过
        }
    ]
});

global.MODEL.Live = mongoose.model('Live', liveSchema);

module.exports = liveSchema;
