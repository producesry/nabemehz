/**
 * Routes for client.
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
 * Middlewares.
 */

const tokenMidw = require('../../middlewares/tokenMidw');

/**
 * Including routes.
 */

router.use(require('./videoRoutes').routes());
router.use(require('./doctorRoutes').routes());
router.use(require('./searchRoutes').routes());
router.use(require('./liveRoutes').routes());
router.use(require('./rabateRoutes').routes());

/**
 * Define routes start.
 */

/**
 * 登录或注册
 * POST /login
 * Request:
 *      Query String:
 *          phone = String //手机号
 *          code = String //验证码
 * Response:
 *      Header:
 *          Authorization: Token //Token，客户端需要存在本地，并在调用任何需要使用用户会话的API的时候附上此Token
 *      Body:
 *          {
 *              "status": "ok"||"error", //API执行状态
 *              "message": String //如果status为error，这里会有错误信息
 *          }
 */
router.post('login', tokenMidw.refresh(), function*() {
    let result = MODEL.Vcode.findOne({"phone": this.request.query.phone, "code": this.request.query.code});
    if (false && result == null) {
        this.body = {
            "status": "error",
            "message": "验证码错误"
        };
    } else {
        this.body = {
            "status": "ok",
            "message": "ok"
        };
        let user = yield MODEL.User.findOne({"phone": this.request.query.phone});
        if (user == null) {
            user = new MODEL.User({"phone": this.request.query.phone});
            yield user.save();
        }
        this.state = {
            "user": {
                "id": user._id.toString(),
                "role": user.role
            }
        }
    }
});

/**
 * Define routes end.
 */

/**
 * Export the router.
 */
module.exports = router;
