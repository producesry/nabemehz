/**
 * Routes for search.
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
 * 搜索内容
 * POST /search
 * Request:
 *      Query String:
 *          word = String //搜索的关键词，目前只支持单个关键词
 * Response:
 *      Body:
 *          {
 *              "doctors": [
 *                  {Doctor Object}
 *              ],
 *              "videos": [
 *                  {Video Object}
 *              ]
 *          }
 */
router.post('search', function *() {
    this.body = {
        "doctors": yield MODEL.Doctor.find({
            "$or": [
                {"name": this.request.query.word},
                {"speciality": this.request.query.word}
            ]
        }),
        "videos": yield MODEL.Video.find({"label": this.request.query.word})
    };
});

/**
 * Define routes end.
 */

/**
 * Export the router.
 */
module.exports = router;
