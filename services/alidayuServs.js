/**
 * SMS services of Alidayu.
 */

'use strict';

/**
 * Do send message.
 * @param {Object} params - Alidayu params object.
 * @returns {Promise}
 */
let sendMessage = function (params) {
    const topClient = require('topSdk').TopClient(CONFIG.alidayu.options);
    topClient.execute('alibaba.aliqin.fc.sms.num.send', params, function (error, response) {
        if (error) {
            return console.error(error);
        } else if (response.error_response) {
            return console.error(response.error_response);
        } else {
            return console.log(response);
        }
    });
};

/**
 * Send server fault message.
 * Required a notification list in config.
 * And this will only send ONE time in a processing life.
 */
exports.sendServerFaultMessage = function () {
    if (CONFIG.notificationList && CONFIG.notificationList.length > 0 && !global.FAULTMESSAGESENT) {
        let notificationListString = CONFIG.notificationList.toString();
        let params = {
            "rec_num": notificationListString/*短信接收号码。支持单个或多个手机号码，传入号码为11位手机号码，不能加0或+86。群发短信需传入多个号码，以英文逗号分隔，一次调用最多传入200个号码。示例：18600000000,13911111111,13322222222*/,
            "sms_free_sign_name": CONFIG.alidayu.signature/*短信签名，传入的短信签名必须是在阿里大鱼“管理中心-短信签名管理”中的可用签名。如“阿里大鱼”已在短信签名管理中通过审核，则可传入”阿里大鱼“（传参时去掉引号）作为短信签名。短信效果示例：【阿里大鱼】欢迎使用阿里大鱼服务。*/,
            "sms_param": {
                "project": "nabemehz"
            }/*短信模板变量，传参规则{"key":"value"}，key的名字须和申请模板中的变量名一致，多个变量之间以逗号隔开。示例：针对模板“验证码${code}，您正在进行${product}身份验证，打死不要告诉别人哦！”，传参时需传入{"code":"1234","product":"alidayu"}*/,
            "sms_template_code": CONFIG.alidayu.templates.serverFault/*短信模板ID，传入的模板必须是在阿里大鱼“管理中心-短信模板管理”中的可用模板。示例：SMS_585014*/,
            "sms_type": "normal"/*短信类型，传入值请填写normal*/
        };
        sendMessage(params);
        global.FAULTMESSAGESENT = true;
    }
};

/**
 * Send verification code.
 * @param {Object} params - {"phone": String, "code": String}
 */
exports.sendVcode = function (params) {
    let nextparams = {
        "rec_num": params.phone/*短信接收号码。支持单个或多个手机号码，传入号码为11位手机号码，不能加0或+86。群发短信需传入多个号码，以英文逗号分隔，一次调用最多传入200个号码。示例：18600000000,13911111111,13322222222*/,
        "sms_free_sign_name": CONFIG.alidayu.signature/*短信签名，传入的短信签名必须是在阿里大鱼“管理中心-短信签名管理”中的可用签名。如“阿里大鱼”已在短信签名管理中通过审核，则可传入”阿里大鱼“（传参时去掉引号）作为短信签名。短信效果示例：【阿里大鱼】欢迎使用阿里大鱼服务。*/,
        "sms_param": {
            "code": params.code.toString()
        }/*短信模板变量，传参规则{"key":"value"}，key的名字须和申请模板中的变量名一致，多个变量之间以逗号隔开。示例：针对模板“验证码${code}，您正在进行${product}身份验证，打死不要告诉别人哦！”，传参时需传入{"code":"1234","product":"alidayu"}*/,
        "sms_template_code": CONFIG.alidayu.templates.vcode/*短信模板ID，传入的模板必须是在阿里大鱼“管理中心-短信模板管理”中的可用模板。示例：SMS_585014*/,
        "sms_type": "normal"/*短信类型，传入值请填写normal*/
    };
    sendMessage(nextparams);
};
