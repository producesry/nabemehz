/**
 * Model for topic（专题|系列）.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let topicSchema = new Schema({
    "sequence": Number, //排列序号,
    "title": {
        "type": String,
        "required": true
    },//系列标题
    "pic": {
        "type": String,
        "required": true
    }, // 封面链接
    "introductionVideo": {
        "type": ObjectId,
        "ref": "Video"
    },//介绍视频
    "videos": [
        {
            "type": ObjectId,
            "ref": "Video"
        }
    ]//包含的视频
});

global.MODEL.Topic = mongoose.model('Topic', topicSchema);

module.exports = topicSchema;
