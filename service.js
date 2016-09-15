'use strict';

/**
 * This is the main entrance.
 */

'use strict';

/**
 * Static configs.
 */
global.STATICCONFIG = require('./staticConfig');

/**
 * Modules.
 */

const koa = require('koa');
const logger = require('koa-logger');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const moment = require('moment');

/**
 * Create a koa object.
 */
let app = koa();

/**
 * Create a MongoDB connection.
 */
mongoose.connect(STATICCONFIG.mongoDB.uri, Object.assign({}, STATICCONFIG.mongoDB.options));

/**
 * While MongoDB connected.
 */
mongoose.connection.on('connected', () => {
    console.info('Database connected.');

    /**
     * Init models.
     */
    global.MODEL = {};
    requireDir('./models', {recurse: true});

    /**
     * Dynamic configs.
     */
    require('./library/dynamicConfigsLib')(mongoose.model('Config'), function (error) {
        if (error) {
            throw(error);
        } else {
            /**
             * Logger must be the first middleware.
             */
            app.use(logger());

            /**
             * Koa body parser.
             */
            app.use(bodyParser());

            /**
             * Koa cross origin problem.
             */
            app.use(cors(Object.assign({}, CONFIG.cors)));

            /**
             * Output context information when there is an error.
             */
            app.use(require('./middlewares/logMidw'));

            /**
             * Init routes.
             */
            const router = require('./routes');//./routes/index.js
            app
                .use(router.routes())
                .use(router.allowedMethods());

            /**
             * Listen port.
             */
            app.listen(STATICCONFIG.port);
            console.log('App started on port ' + STATICCONFIG.port + '.');
        }
    });
});

/**
 * MongoDB error.
 */
mongoose.connection.on('error', err => {
    console.error(err);
    console.info('Exit process.');
    process.exit(1);
});

/**
 * Do something after MongoDB disconnected.
 */
mongoose.connection.on('disconnected', () => {
    console.error('Database disconnected.');
    console.info('Exit process.');
    process.exit(1);
});

/**
 * Stop the process when press Ctrl+c.
 */
process.on('SIGINT', () => {
    console.warn('App exit.');
    if (mongoose.connection.readyState === 1) {
        mongoose.connection.close();
    } else {
        process.exit(0);
    }
});

module.exports = app;
