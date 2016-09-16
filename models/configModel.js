/**
 * Model for dynamic configs.
 */

'use strict';

/**
 * Including modules.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let configSchema = new Schema({
    "notificationList": Array,//["{phone number}"],//A list of phone numbers. When there is server fault. A SMS will be sent to this list.
    "cors": {
        "exposeHeaders": Array,//["Accept-Ranges", "Content-Encoding", "Content-Length", "Content-Range", "Authorization"],
        "maxAge": String//"3600"
    },
    "jwt": {
        "secret": String,//JWT secret,
        "options": {
            "expiresIn": Number,//60 * 60/*An hour.*/
        }
    },
    "alidayu": {
        "options": {
            "REST_URL": String,//"http://gw.api.taobao.com/router/rest",//Dayu API address,
            "appkey": String,//Just APP key,
            "appsecret": String,//Just APP secret
        },
        "signature": String,//Signature on the begin of SMS,
        "templates": {
            "serverFault": String,//The template id
        }
    },//SMS service.
    "vcode": {
        "effectiveTime": Number,//The effective time of verification code in millisecond.
        "resendInterval": Number,//The resend interval time of verification code in millisecond.
    }
}, {strict: false});

function forbidden() {
    throw new Error('This method of this model is forbidden!');
}

configSchema.statics.save = forbidden;
configSchema.statics.update = forbidden;
configSchema.statics.remove = forbidden;
configSchema.statics.create = forbidden;

mongoose.model('Config', configSchema);

module.exports = configSchema;
