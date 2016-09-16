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
 * Response:
 *      Body:
 *          [
 *              {Doctor Object}
 *          ]
 */
router.get('doctors', function *() {
    this.body = yield MODEL.Doctor.find().limit(CONFIG.doctor.listLimit);
});

/**
 * Define routes end.
 */

/**
 * Export the router.
 */
module.exports = router;
