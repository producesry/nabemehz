/**
 * Model for category（分类|项目）.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let categorySchema = new Schema({
    "icon": {
        "type":String,
        "required":true
    },//图标URL
    "name": {
        "type":String,
        "required":true
    },//名称
    "label": [
        {
            "type": ObjectId,
            "ref": "Label"
        }
    ],//标签
    "introduction": String,//简介
    "crowd": String,//适合人群
    "taboo": String,//禁忌人群
    "merit": String,//优点
    "defect": String,//缺点
    "treatmentTime": String,//治疗时长
    "treatmentCourse": String,//疗程
    "recoveryTime": String,//恢复时间
    "flow": String,//流程
    "case": {
        "after": String,//整形后
        "before": String//整形前
    },//案例
    "risk": String//风险
});

global.MODEL.Category = mongoose.model('Category', categorySchema);

module.exports = categorySchema;
