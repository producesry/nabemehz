/**
 * Routes for hot.
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

router.use((new CRUDFactoryLib('Hot')).routes());

/**
 * Define routes end.
 */

/**
 * Export the router.
 */
module.exports = router;
