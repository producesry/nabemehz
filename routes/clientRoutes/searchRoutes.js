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
 * POST /search/word/:word
 * Request:
 *      Param:
 *          word String //搜索的关键词，目前只支持单个关键词
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
router.post('search/word/:word', function *() {
    let labelIds = yield MODEL.Label.distinct('_id', {"name": new RegExp(this.params.word)});

    let categoryLabelArray = yield MODEL.Category.distinct('label', {"name": new RegExp(this.params.word)});
    let categoryLabels = [];
    /**
     * Fast unique.
     */
    {
        let tempObject = {};

        for (let labelId of categoryLabelArray) {
            tempObject[labelId.toString()] = 0;
        }
        for (let labelId of labelIds) {
            tempObject[labelId.toString()] = 0;
        }

        for (let labelId in tempObject) {
            categoryLabels.push(labelId);
        }
    }

    this.body = {
        "doctors": yield MODEL.Doctor.find({
            "$or": [
                {"name": this.params.word},
                {"speciality": this.params.word}
            ]
        }),
        "videos": yield MODEL.Video.find({"label": {"$in": categoryLabels}})
    };
});

/**
 * 查找项目
 * POST /search/category/:category
 * Request:
 *      Param:
 *          category String //项目关键词，目前只支持单个关键词
 * Response:
 *      Body:
 *          [
 *              {Video Object}
 *          ]
 */
router.post('search/category/:category', function *() {
    let category = yield MODEL.Category.findOne({"name": this.params.category});
    if (category == null) {
        this.body = [];
    } else {
        this.body = yield MODEL.Video.find({"label": {"$in": category.label}});
    }
});

/**
 * Define routes end.
 */

/**
 * Export the router.
 */
module.exports = router;
