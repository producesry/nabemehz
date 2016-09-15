/**
 * Index file of routes.
 */

'use strict';

/**
 * Modules.
 */

const Router = require('koa-router');

/**
 * Init router.
 * Let every route start with '/api/'.
 */
let router = new Router({
    prefix: '/api/v1/'
});

/**
 * Including routes.
 */

router.use(require('./clientRoutes').routes());
router.use(require('./editorRoutes').routes());

router.get('test', function *() {
    this.body = 'Ok!';
});

/**
 * Export the router.
 */
module.exports = router;
