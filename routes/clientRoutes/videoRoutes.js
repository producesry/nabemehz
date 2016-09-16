/**
 * Routes for video.
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
 * 点击想做
 * POST /video/:videoId/like
 * Request:
 *      Param:
 *          videoId 视频的_id
 *      Header:
 *          Authorization: Token //客户端本地记录的Token
 * Response:
 *      Body:
 *          {Video Object}
 */
router.post('video/:videoId/like', tokenMidw.verify(), function *() {
    let existsWish = yield MODEL.Wishlist.findOne({
        "userId": this.state.user.id,
        "wishType": "video",
        "wishId": this.params.videoId
    });
    let video = yield MODEL.Video.findOne({"_id": this.params.videoId}).populate("doctor", "related");
    if (existsWish == null) {
        let wishlist = new MODEL.Wishlist({
            "userId": this.state.user.id,
            "wishType": "video",
            "wishId": this.params.videoId
        });
        yield wishlist.save();
        video.like += 1;
        yield video.save();
    }
    this.body = video;
});

/**
 * Define routes end.
 */

/**
 * Export the router.
 */
module.exports = router;
