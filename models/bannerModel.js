/**
 * Model for banner（主页banner）.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let bannerSchema = new Schema({
    "pic": String,//The URL of image.
    "bannerType": {
        "type": String,
        "enum": [
            "video",//点击看视频
            "rebate",//点击进入返利
            "live",//点击进入直播
            "ad"//点击打开页面
        ]
    },
    "title": String,//Useless.
    "url": String,//The URL of redirection.
    "video": ObjectId//视频地址
});

global.MODEL.Banner = mongoose.model('Banner', bannerSchema);

module.exports = bannerSchema;
