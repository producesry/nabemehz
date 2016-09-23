/**
 * Routes for label.
 */

'use strict';

/**
 * Modules.
 */

const Router = require('koa-router');

/**
 * Libraries.
 */

const CRUDFactoryLib = require('../../library/crudFactoryLib');

/**
 * Create this router branch.
 */
const router = new Router();

/**
 * Define routes start.
 */

router.use((new CRUDFactoryLib('Label')).routes());

/**
 * Define routes end.
 */

/**
 * Export the router.
 */
module.exports = router;
