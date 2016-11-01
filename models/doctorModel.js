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
    "name": {
        "type": String,
        "required": true
    },//姓名
    "nick": String, //花名
    "title": {
        "type": String,
        "required": true
    }, // 头衔
    "hospital": {
        "type": String,
        "required": true
    }, // 机构
    "tel": {
        "type": String,
        "required": true
    }, // 联系电话（座机或手机）
    "address": String, // 医院地址
    "experience": {
        "type": String,
        "required": true
    }, // 执业经历
    "speciality": [
        {
            "type": String
        }
    ],//专长
    "rebate": {
        "type": Boolean,
        "required": true
    }, // 有些医生能谈下返利，有些不同，返利具体数额视医生决定
    "related": [ // 相关视频 0-5个,可能没有
        {
            "type": ObjectId,
            "ref": "Video"
        }
    ],
    "location": {
        "province": {
            "type": String,
            "required": true
        },//省
        "city": {
            "type": String,
            "required": true
        },//市
        "gps": {
            "longitude": String,//经度
            "latitude": String//纬度
        }
    },
    "case": {
        "before": String,//整形前
        "after": String,//整形后
        "keywords": [{type: String}]//关键词
    }//案例
});

global.MODEL.Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = doctorSchema;
