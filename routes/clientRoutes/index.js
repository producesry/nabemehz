/**
 * Routes for client.
 */

'use strict';

/**
 * Modules.
 */

const Router = require('koa-router');

/**
 * Services.
 */

const alidayuServs = require('../../services/alidayuServs');

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
 * 获取启动页图片链接
 * GET /bootstrap
 * Response:
 *      Body:
 *          {Bootstrap Object}
 */
router.get('main', function *() {
    this.body = yield MODEL.Bootstrap.findOne();
});

/**
 * 获取首页最上banner，最左上搜索热词（项目热词+热门医生），【查看项目】的项目分类信息，专题信息
 * GET /main
 * Response:
 *      Body:
 *          {
 *              "banners": [
 *                  {Banner Object}
 *              ],
 *              "search": {
 *                  "hot" :{
 *                      "words": [String],
 *                      "doctors": [String]
 *                  }
 *              }
 *              "categories": [
 *                  {Category Object}
 *              ],
 *              "topics": [
 *                  {Topic Object}
 *              ]
 *          }
 */
router.get('main', function *() {
    this.body = {
        "banners": yield MODEL.Banner.find(),
        "search": yield MODEL.Hot.findOne(),
        "categories": yield MODEL.Category.find(),
        "topics": yield MODEL.Topic.find().sort({"sequence": 1})
    };
});

/**
 * 获取首页下方用户可能感兴趣的视频
 * GET /more
 * Request:
 *      Query String:
 *          topic = String //选定主题的_id
 * Response:
 *      Body:
 *          [
 *              {Video Object}
 *          ]
 */
router.get('more', function *() {
    let topic = yield MODEL.Topic.findOne({"_id": this.request.query.topic}).populate("videos");
    this.body = topic.videos;
});

/**
 * 获取验证码
 * POST /vcode
 * Request:
 *      Query String:
 *          phone = String //手机号
 * Response:
 *      Body:
 *          {
 *              "status": "ok"||"error", //API执行状态
 *              "message": String //如果status为error，这里会有错误信息
 *          }
 *
 */
router.post('vcode', function *() {
    const phoneRegex = /^1\d{10}$/;
    if (!phoneRegex.test(this.request.query.phone)) {
        this.body = {
            "status": "error",
            "message": "看起来不像是手机号哎～"
        };
    } else {
        let result = yield MODEL.Vcode.findOne({
            "phone": this.request.query.phone,
            "createdAt": {"$gt": Date.now() - CONFIG.vcode.resendInterval}
        });
        if (result) {
            this.body = {
                "status": "error",
                "message": "请等一会儿再发"
            };
        } else {
            let vcode = new MODEL.Vcode({"phone": this.request.query.phone});
            yield vcode.save();
            alidayuServs.sendVcode({
                "phone": vcode.phone,
                "code": vcode.code
            });
            this.body = {
                "status": "ok",
                "message": "ok"
            };
        }
    }
});

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
    let result = yield MODEL.Vcode.findOne({
        "phone": this.request.query.phone,
        "code": this.request.query.code,
        "createdAt": {"$gt": Date.now() - CONFIG.vcode.effectiveTime}
    });
    if (result == null) {
        this.body = {
            "status": "error",
            "message": "验证码错啦或过期啦～"
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
