/**
 * Routes for rabate.
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
 * 提交返利
 * POST /rebate
 * Request:
 *      Header:
 *          Authorization: Token //客户端本地记录的Token
 *      Body:
 *          {
 *              "ticket": String,//小票图片地址
 *              "before": String,//整形前图片地址
 *              "after": String//整形后图片地址
 *          }
 */
router.post('rebate', tokenMidw.verify(), function *() {
    this.body = {};
    let rebate = new MODEL.Rebate({
        "user": this.state.user.id,
        "ticket": this.request.body.ticket,//小票图片地址
        "before": this.request.body.before,//整形前图片地址
        "after": this.request.body.after//整形后图片地址
    });
    yield rebate.save();
});

/**
 * Define routes end.
 */

/**
 * Export the router.
 */
module.exports = router;
