/**
 * Model for doctor.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let doctorSchema = new Schema({
    "avatar": String,//头像URL
    "name": String,//姓名
    "nick": String, // 行业外号
    "title": String, // 职称
    "hospital": String, // 医院名称
    "tel": String, // 联系电话（座机或手机）
    "address": String, // 医院地址
    "experience": String, // 执业经历
    "speciality": [
        {
            "type": String
        }
    ],//专长
    "rebate": Boolean, // 有些医生能谈下返利，有些不同，返利具体数额视医生决定
    "related": [ // 相关视频 0-5个,可能没有
        {
            "type": ObjectId,
            "ref": "Video"
        }
    ]
});

global.MODEL.Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = doctorSchema;
