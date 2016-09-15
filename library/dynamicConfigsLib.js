/**
 * Services for dynamic configs.
 * Please require ONLY ONCE.
 * Need ready mongoose connection.
 */

'use strict';

const deepFreeze = require('deep-freeze-strict');

global.CONFIG = {};

/**
 * @param {Object} model - Mongoose model object of config
 * @param moduleCallback - Callback with error as first parameter
 */
module.exports = function (model, moduleCallback) {
    let Config = model;

    function getDynamicConfigs(callback) {
        Config.findOne({}, function (error, configs) {
            if (error || configs == null) {
                console.error(error);
            }
            global.CONFIG = deepFreeze(JSON.parse(JSON.stringify(configs._doc)));

            if (callback) {
                callback(error);
            }
        });
    }

    getDynamicConfigs(moduleCallback);
    require('timers').setInterval(getDynamicConfigs, 10000);
};
