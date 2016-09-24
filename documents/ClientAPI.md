此文档中的所有API的前缀都是/api/v1

```javascript
/**
 * 获取启动页图片链接
 * GET /bootstrap
 * Response:
 *      Body:
 *          {Bootstrap Object}
 */
/**
 * 获取首页最上banner，最左上搜索热词（项目热词+热门医生），【查看项目】的项目分类信息，专题信息
 * GET /main
 * Response:
 *      Body:
 *          {
 *              "banners": [
 *                  {Banner Object}
 *              ],
 *              "search": {
 *                  "hot" :{
 *                      "words": [String],
 *                      "doctors": [String]
 *                  }
 *              }
 *              "categories": [
 *                  {Category Object}
 *              ],
 *              "topics": [
 *                  {Topic Object}
 *              ]
 *          }
 */
/**
 * 获取首页下方用户可能感兴趣的视频
 * GET /more
 * Request:
 *      Query String:
 *          topic = String //选定主题的_id
 * Response:
 *      Body:
 *          [
 *              {Video Object}
 *          ]
 */
/**
 * 获取验证码
 * POST /vcode
 * Request:
 *      Query String:
 *          phone = String //手机号
 * Response:
 *      Body:
 *          {
 *              "status": "ok"||"error", //API执行状态
 *              "message": String //如果status为error，这里会有错误信息
 *          }
 *
 */
/**
 * 登录或注册
 * POST /login
 * Request:
 *      Query String:
 *          phone = String //手机号
 *          code = String //验证码
 * Response:
 *      Header:
 *          Authorization: Token //Token，客户端需要存在本地，并在调用任何需要使用用户会话的API的时候附上此Token
 *      Body:
 *          {
 *              "status": "ok"||"error", //API执行状态
 *              "message": String //如果status为error，这里会有错误信息
 *          }
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
/**
 * 获取地区列表
 * GET /provinces
 * Response:
 *      Body:
 *          [
 *              {Province Object}
 *          ]
 */
/**
 * 视频详情
 * GET /video/:videoId
 * Request:
 *      Param:
 *          videoId 视频的_id
 * Response:
 *      Body:
 *          {Video Object}
 */
/**
 * 点击想做
 * POST /video/:videoId/like
 * Request:
 *      Param:
 *          videoId 视频的_id
 *      Header:
 *          Authorization: Token //客户端本地记录的Token
 * Response:
 *      Body:
 *          {Video Object}
 */
/**
 * 获取直播页面
 * GET /live
 * Response:
 *      Body:
 *          {Live Object}
 */
/**
 * 用户点击想看
 * POST /live/:liveId/like
 * Request:
 *      Param:
 *          liveId 直播的_id，通常为GET /live返回Body的next._id
 *      Header:
 *          Authorization: Token //客户端本地记录的Token
 * Response:
 *      Body:
 *          {Live Object}
 */
/**
 * 提交返利
 * POST /rebate
 * Request:
 *      Header:
 *          Authorization: Token //客户端本地记录的Token
 *      Body:
 *          {
 *              "ticket": String,//小票图片地址
 *              "before": String,//整形前图片地址
 *              "after": String//整形后图片地址
 *          }
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
```
