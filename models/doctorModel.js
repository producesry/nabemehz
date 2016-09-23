/**
 * Model for doctor（医生）.
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
    "nick": String, //花名
    "title": String, // 头衔
    "hospital": String, // 机构
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
    ],
    "location": {
        "province": String,//省
        "city": String//市
    },
    "case": {
        "before": String,//整形前
        "after": String,//整形后
        "keywords": [{type: String}]//关键词
    }//案例
});

global.MODEL.Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = doctorSchema;
