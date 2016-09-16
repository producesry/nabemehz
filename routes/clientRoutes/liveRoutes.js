/**
 * Routes for live.
 */

'use strict';

/**
 * Modules.
 */

const Router = require('koa-router');

/**
 * Middlewares.
 */

const tokenMidw = require("../../middlewares/tokenMidw");

/**
 * Create this router branch.
 */
const router = new Router();

/**
 * Define routes start.
 */

/**
 * 获取直播页面
 * GET /live
 * Response:
 *      Body:
 *          {Live Object}
 */
router.get('live', function *() {
    this.body = yield MODEL.Live.findOne().populate('next.doctor', 'preview.video');
});

/**
 * Define routes end.
 */

/**
 * Export the router.
 */
module.exports = router;
