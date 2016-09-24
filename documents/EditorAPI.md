声明了如下item：
[video](../models/videoModel.js)
[doctor](../models/doctorModel.js)
[label](../models/labelModel.js)
[category](../models/categoryModel.js)
[live](../models/liveModel.js)
[hot](../models/hotModel.js)
[banner](../models/bannerModel.js)
[topic](../models/topicModel.js)
[bootstrap](../models/bootstrapModel.js)
[rebate](../models/rebateModel.js)

所有item的API接口一样，在这里只写一套，以item代指上述所有item。

注意，在文档中的“items”表示的是item的复数形式，如果item为“category”，则items应该为“categories”。

此文档中的所有API的前缀都是/api/v1/editor/

所有API都需要在Authorization请求头传Token，只有role为editor的用户才可以访问。

```javascript
/**
 * Get one item.
 * GET item/:itemId
 * Request:
 *      Query String:
 *          population = String//Property names which are split by ','
 *      Param:
 *          itemId String//The _id of this item.
 * Response:
 *      Body:
 *          {Item Object}
 */
/**
 * Get some item.
 * GET items
 * Request:
 *      Query String:
 *          property = String//Any property of this item or sub-document.
 *          population = String//Property names are split by ','
 * Response:
 *      Body:
 *          [
 *              {Item Object}
 *          ]
 */
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
/**
 * Modify one item.
 * PUT item/:itemId
 * Request:
 *      Param:
 *          itemId String//The _id of this item.
 *      Body:
 *          {Item Object}
 * Response:
 *      Body:
 *          {Item Object}
 */
/**
 * Delete one item.
 * DELETE item/:itemId
 * Request:
 *      Param:
 *          itemId String//The _id of this item.
 * Response:
 *      Body:
 *          {Item Object}
 */
```