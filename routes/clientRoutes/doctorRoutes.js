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
 * Define routes end.
 */

/**
 * Export the router.
 */
module.exports = router;
