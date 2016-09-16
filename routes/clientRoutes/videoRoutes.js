/**
 * Routes for video.
 */

'use strict';

/**
 * Modules.
 */

const Router = require('koa-router');

/**
 * Controllers.
 */


/**
 * Create this router branch.
 */
const router = new Router();

/**
 * Define routes start.
 */

/**
 * 视频详情
 * GET /video/:videoId
 * Request:
 *      Param:
 *          videoId 视频的_id
 * Response:
 *      Body:
 *          {Video Object}
 */
router.get('video/:videoId', function *() {
    this.body = yield MODEL.Video.findOne({"_id": this.params.videoId}).populate("doctor", "related");
});

/**
 * Define routes end.
 */

/**
 * Export the router.
 */
module.exports = router;
