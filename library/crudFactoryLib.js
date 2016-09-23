/**
 * A factory for generating CRUD routers with a model.
 */

'use strict';

/**
 * Modules.
 */

const Router = require('koa-router');
const Pluralize = require('pluralize');

/**
 * CRUD factory.
 * @param {String} modelName - A name of model which belong to global.MODEL .
 * @return {Router} - This router can be used by upstream router.
 */
module.exports = function (modelName) {
    this.modelName = modelName;

    /**
     * Create this router branch.
     */
    this.router = new Router();

    const region = this;

    /**
     * Get one item.
     * GET item/:itemId
     * Response:
     *      Body:
     *          {Item Object}
     */
    this.router.get(region.modelName.toLowerCase() + '/:' + region.modelName.toLowerCase() + 'Id', function *() {
        this.body = yield MODEL[region.modelName].findById(this.params[region.modelName.toLowerCase() + 'Id']);
    });

    /**
     * Get some item.
     * GET items
     * Response:
     *      Body:
     *          [
     *              {Item Object}
     *          ]
     */
    this.router.get(Pluralize(region.modelName.toLowerCase()), function *() {
        this.body = yield MODEL[region.modelName].find();
    });

    /**
     * Create a new item.
     * POST item
     * Request:
     *      Body:
     *          {Item Object}
     * Response:
     *      Body:
     *          {Item Object}
     */
    this.router.post(region.modelName.toLowerCase(), function *() {
        let newItem = new MODEL[region.modelName](this.request.body);
        this.body = yield newItem.save();
    });

    /**
     * Create some new items.
     * POST items
     * Request:
     *      Body:
     *          [
     *              {Item Object}
     *          ]
     * Response:
     *      Body:
     *          [
     *              {Item Object}
     *          ]
     */
    this.router.post(Pluralize(region.modelName.toLowerCase()), function *() {
        this.body = yield MODEL[region.modelName].create(this.request.body);
    });

    /**
     * Modify one item.
     * PUT item/:itemId
     * Request:
     *      Body:
     *          {Item Object}
     * Response:
     *      Body:
     *          {Item Object}
     */
    this.router.put(region.modelName.toLowerCase() + '/:' + region.modelName.toLowerCase() + 'Id', function *() {
        this.body = yield MODEL[region.modelName].findOneAndUpdate(
            {"_id": this.params[region.modelName.toLowerCase() + 'Id']},
            {"$set": this.request.body},
            {"new": true}
        );
    });

    /**
     * Delete one item.
     * DELETE item/:itemId
     * Response:
     *      Body:
     *          {Item Object}
     */
    this.router.delete(region.modelName.toLowerCase() + '/:' + region.modelName.toLowerCase() + 'Id', function *() {
        this.body = yield MODEL[region.modelName].findOneAndRemove({"_id": this.params[region.modelName.toLowerCase() + 'Id']});
    });

    return this.router;
};
