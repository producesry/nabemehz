/**
 * Routes for editor.
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
 * Controllers.
 */


/**
 * Create this router branch.
 */
const router = new Router({
    prefix: 'editor/'
});

// router.use(tokenMidw.verify(), function *(next) {
//     if (this.state.user.role !== 'editor') {
//         this.status = 403;
//     } else {
//         yield next;
//     }
// });

/**
 * Including routes.
 */

router.use(require('./videoRoutes').routes());
router.use(require('./doctorRoutes').routes());
router.use(require('./labelRoutes').routes());
router.use(require('./categoryRoutes').routes());
router.use(require('./liveRoutes').routes());
router.use(require('./hotRoutes').routes());
router.use(require('./bannerRoutes').routes());
router.use(require('./topicRoutes').routes());
router.use(require('./bootstrapRoutes').routes());
router.use(require('./rebateRoutes').routes());

/**
 * Define routes start.
 */



/**
 * Define routes end.
 */

/**
 * Export the router.
 */
module.exports = router;
