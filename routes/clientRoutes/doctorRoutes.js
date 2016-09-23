/**
 * Routes for doctor.
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
 * 医生详情页面
 * GET /doctor/:doctorId
 * Request:
 *      Param:
 *          doctorId 医生的_id
 * Response:
 *      Body:
 *          {Doctor Object}
 */
router.get('doctor/:doctorId', function *() {
    this.body = yield MODEL.Doctor.findOne({"_id": this.params.doctorId}).populate("related");
});

/**
 * 获取认证医生列表
 * GET /doctors
 * Request:
 *      Query String:
 *          province = String//省，可填可不填
 *          city = String//市，可不填，如果填了市就一定要有省
 * Response:
 *      Body:
 *          [
 *              {Doctor Object}
 *          ]
 */
router.get('doctors', function *() {
    let query = {};
    if (this.request.query.province) {
        query.location = {};
        query.location.province = this.request.query.province;

        if (this.request.query.city) {
            query.location.city = this.request.query.city;
        }
    }
    this.body = yield MODEL.Doctor.find(query).limit(CONFIG.doctor.listLimit);
});

/**
 * 获取地区列表
 * GET /provinces
 * Response:
 *      Body:
 *          [
 *              {Province Object}
 *          ]
 */
router.get('provinces', function *() {
    this.body = yield MODEL.Province.find();
});

/**
 * Define routes end.
 */

/**
 * Export the router.
 */
module.exports = router;
