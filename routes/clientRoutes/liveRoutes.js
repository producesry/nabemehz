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
    this.body = yield MODEL.Live.findOne().populate('next.doctor preview.video');
});

/**
 * 用户点击想看
 * POST /live/:liveId/like
 * Request:
 *      Param:
 *          liveId 直播的_id，通常为GET /live返回Body的next._id
 *      Header:
 *          Authorization: Token //客户端本地记录的Token
 * Response:
 *      Body:
 *          {Live Object}
 */
router.post('live/:liveId/like', tokenMidw.verify(), function *() {
    let existsWish = yield MODEL.Wishlist.findOne({
        "userId": this.state.user.id,
        "wishType": "live",
        "wishId": this.params.liveId
    });
    let live = yield MODEL.Live.findOne().populate('next.doctor preview.video');
    if (this.params.liveId == live.next._id.toString()) {
        if (existsWish == null) {
            let wishlist = new MODEL.Wishlist({
                "userId": this.state.user.id,
                "wishType": "live",
                "wishId": this.params.liveId
            });
            yield wishlist.save();
            live.next.like += 1;
            yield live.save();
        }
    }
    this.body = live;
});

/**
 * Define routes end.
 */

/**
 * Export the router.
 */
module.exports = router;
