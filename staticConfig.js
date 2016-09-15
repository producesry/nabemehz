/**
 * This is the static config file.
 * Warring: Do not do any assignment operation in CONFIG object. It will be modified an generate a BUG!
 */

'use strict';

/**
 * Modules.
 */

const extend = require('extend');
const deepFreeze = require('deep-freeze-strict');

const defaultConfig = {
    "port": 8000,
    "mongoDB": {
        "uri": 'mongodb://127.0.0.1/nabemehz',
        "options": {
            "server": {
                "socketOptions": {"keepAlive": 1},
                "poolSize": 10
            }
        }
    }
};

const configs = {
    "development": {},
    "production": {}
};

module.exports = deepFreeze(
    extend(
        true,
        defaultConfig,
        (configs[process.env.NODE_ENV] || configs.development)
    )
);

