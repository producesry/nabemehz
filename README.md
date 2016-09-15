# nabemehz

移动端交互图：[Modao](https://modao.cc/app/4f53762a751f4fed80f093078c01645a38447f5e)
CMS交互图：[Modao](https://modao.cc/app/b1f37e8fabf352c06603dc6d50d9531b144eea57)

服务器：139.129.211.175 Yrs20160504

## Action
* 图片大小未确定，全是示例，需要开发给建议
* 升级用第三方，所以不需要api。
* 系统通知用第三方, 所以也不需要api

## 移动端API
统一前缀/api/v1/

### 首页
```javascript
# 获取首页最上banner，最左上搜索热词（项目热词+热门医生），【查看项目】的项目分类信息，专题信息
GET /main

response: {
    "banners": [ // 3-6个不等
	{
	    "pic": "http://placehold.it/350x150/00ff00/ffffff",
            "bannerType": "video", // 最近两期视频，直播剪辑版（也是视频）
            "title": "【肤若凝脂】一言不合就变白,美白大法来也",
            "videoId": "5705c240f648e134dc8d2a0d" // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
	    },
        {
            "pic": "http://placehold.it/350x150/00ff00/ffffff",
            "bannerType": "video", // 同上
            "title": "【肤若凝脂】一言不合就变白,美白大法来也",
            "videoId": "5705c240f648e134dc8d2a01" // 同上
        },
        {
            "pic": "http://placehold.it/350x150/0000ff/ffffff",
            "bannerType": "rebate", // 进入返利页面
        },
	    {
	        "pic": "http://placehold.it/350x150/ffff00/ffffff",
	        "bannerType": "live" // 直播预告，进入直播页面
	    },
        {
            "pic": "http://placehold.it/350x150/ff00ff/ffffff",
            "bannerType": "ad", // 广告，进入内置webview
            "url": "http://www.baidu.com"
        }
    ],
    "search": {
        "hot": {
            "words": ["祛痘","水光针","双眼皮","开眼角","隆胸","瘦脸","祛皱","嫩肤"], // 热词
            "doctors": ["周敏如","陈焕然","栾杰"] // 热门医生
        }
    },
    "categories": [ 
	    {
	        "icon": "http://placehold.it/80x80/ff0000/ffffff", // 图标
            "name": "嘴唇" // 显示文字
        },
        {
            "icon": "http://placehold.it/80x80/00ff00/ffffff", // 图标
            "name": "玻尿酸" // 显示文字
        },
        {
            "icon": "http://placehold.it/80x80/0000ff/ffffff", // 图标
            "name": "提拉紧致" // 显示文字
        },
        {
            "icon": "http://placehold.it/80x80/ffff00/ffffff", // 图标
            "name": "双眼皮" // 显示文字
        },
        {
            "icon": "http://placehold.it/80x80/00ffff/ffffff", // 图标
            "name": "隆鼻" // 显示文字
        },
        {
            "icon": "http://placehold.it/80x80/ff00ff/ffffff", // 图标
            "name": "嫩肤" // 显示文字
        },
        {
            "icon": "http://placehold.it/80x80/ff0000/000000", // 图标
            "name": "自体脂肪填充" // 显示文字
        },
        {
            "icon": "http://placehold.it/80x80/00ff00/000000", // 图标
            "name": "隆胸" // 显示文字
        }
    ],
    "topics": [ // 专题
        {
            "sequence": 001, //数字
            "header": {
                "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片一定有
                "video": "http://techslides.com/demos/sample-videos/small.mp4", // 视频可能没有,如果没有就不显示播放按钮
            },
            "videos": [
                {               
                    "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
                    "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
                    "like": 18460, // 想做的数量
                    "title": "【肤若凝脂】一言不合就变白,美白大法来也"
                },
                {               
                    "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
                    "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片 
                    "like": 18460, // 想做的数量
                    "title": "【基础知识】整容,你的医生医院选对了么?"
                },
                {               
                    "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
                    "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
                    "like": 18460, // 想做的数量
                    "title": "【肤若凝脂】一言不合就变白,美白大法来也"
                },
                {               
                    "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
                    "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
                    "like": 18460, // 想做的数量
                    "title": "【基础知识】整容,你的医生医院选对了么?"
                },
                {               
                    "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
                    "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
                    "like": 18460, // 想做的数量
                    "title": "【肤若凝脂】一言不合就变白,美白大法来也"
                },
                {               
                    "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
                    "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
                    "like": 18460, // 想做的数量
                    "title": "【基础知识】整容,你的医生医院选对了么?"
                },
                {               
                    "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
                    "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
                    "like": 18460, // 想做的数量
                    "title": "【肤若凝脂】一言不合就变白,美白大法来也"
                },
                {               
                    "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
                    "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
                    "like": 18460, // 想做的数量
                    "title": "【基础知识】整容,你的医生医院选对了么?"
                }
            ]
        }
    ],
}

```

### 首页更多视频
```javascript
# 获取首页下方用户可能感兴趣的视频
GET /more?topic=1 // topic为用户当前所选专题

response:[ //大概10-15个
    {               
        "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
        "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
        "like": 18460, // 想做的数量
        "title": "【肤若凝脂】一言不合就变白,美白大法来也"
    },
    {               
        "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
        "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
        "like": 18460, // 想做的数量
        "title": "【基础知识】整容,你的医生医院选对了么?"
    },
    ...
]
```

### 视频
```javascript
# 视频详情页面
GET /video/:id 

response: {
    "_id": "id",
    "url": "http://techslides.com/demos/sample-videos/small.mp4", // 视频链接
    "pic": "http://placehold.it/350x150/0000ff/ffffff", // 图片
    "title": "【面部雕塑】整形从鼻子开始,一鼻擎天我最美", // 标题
    "like": 18460, // 想做的数量
    "doctor":{
        "_id":"id",
        "avatar": "http://placehold.it/80x100/0000ff/ffffff", // 头像
        "name": "周敏如",
        "nick": "美鼻王子", // 行业外号
        "experience": "“美鼻王子”，国内最著名的鼻部权威专家之一。中国整形美容协会会员，不辣不辣不辣不辣不辣吹上天。。。" // 执业经历
    },
    "related": [ // 相关视频 0-5个,可能没有
        {               
            "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
            "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
            "like": 18460, // 想做的数量
            "title": "【肤若凝脂】一言不合就变白,美白大法来也"
        },
        {               
            "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
            "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
            "like": 18460, // 想做的数量
            "title": "【基础知识】整容,你的医生医院选对了么?"
        },
        ...
    ]
}

# 点击用户想做
POST /video/:id/like
 
header://request的header
    Authorization: token//用户token

response: {} // 返回结果同上面GET /video/:id ,前端逻辑可以直接在前端+1,不用依靠后端返回值。
```

### 医生
```javascript
# 医生详情页面
GET /doctor/:id

response:{
    "_id":"id",
    "avatar": "http://placehold.it/80x100/0000ff/ffffff", // 头像
    "name": "周敏如",
    "nick": "美鼻王子", // 行业外号
    "title": "主任医生", // 职称
    "hospital": "八大处医院", // 医院名称
    "tel": "01088888888", // 联系电话（座机或手机）
    "address": "北京市东城区王府井帅府园1号", // 医院地址
    "experience": "“美鼻王子”，国内最著名的鼻部权威专家之一。中国整形美容协会会员，不辣不辣不辣不辣不辣吹上天。。。", // 执业经历
    "speciality": ["隆鼻","鼻尖整形","鼻尖综合","希腊鼻","鹰钩鼻"],
    "rebate": true, // 有些医生能谈下返利，有些不同，返利具体数额视医生决定
    "related": [ // 相关视频 0-5个,可能没有
        {               
            "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
            "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
            "like": 18460, // 想做的数量
            "title": "【肤若凝脂】一言不合就变白,美白大法来也"
        },
        {               
            "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
            "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
            "like": 18460, // 想做的数量
            "title": "【基础知识】整容,你的医生医院选对了么?"
        },
        ...
    ]
}

```


### 搜索
```javascript
# 搜索内容

POST /search?word=xxx
response: {
    doctors: [
        {
            "_id":"id",
            "avatar": "http://placehold.it/80x100/0000ff/ffffff", // 头像
            "name": "周敏如",
            "nick": "美鼻王子", // 行业外号
            "title": "主任医生", // 职称
            "speciality": ["隆鼻","鼻尖整形","鼻尖综合","希腊鼻","鹰钩鼻"],
        },
        {
            "_id":"id",
            "avatar": "http://placehold.it/80x100/0000ff/ffffff", // 头像
            "name": "周敏如",
            "nick": "美鼻王子", // 行业外号
            "title": "主任医生", // 职称
            "speciality": ["隆鼻","鼻尖整形","鼻尖综合","希腊鼻","鹰钩鼻"],
        },
        {
            "_id":"id",
            "avatar": "http://placehold.it/80x100/0000ff/ffffff", // 头像
            "name": "周敏如",
            "nick": "美鼻王子", // 行业外号
            "title": "主任医生", // 职称
            "speciality": ["隆鼻","鼻尖整形","鼻尖综合","希腊鼻","鹰钩鼻"],
        },        
    ],
    videos: [
        {
            "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
            "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
            "like": 18460, // 想做的数量
            "title": "【肤若凝脂】一言不合就变白,美白大法来也"
        },
        {
            "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
            "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
            "like": 18460, // 想做的数量
            "title": "【基础知识】整容,你的医生医院选对了么?"
        },
        ...
    ]
}
```

### 查找项目
```javascript
POST /search?category=xxx
response: [
    {
        "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
        "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
        "like": 18460, // 想做的数量
        "title": "【肤若凝脂】一言不合就变白,美白大法来也"
    },
    {
        "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
        "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
        "like": 18460, // 想做的数量
        "title": "【基础知识】整容,你的医生医院选对了么?"
    },
    ...
]
```

### 认证医生
```javascript
GET /doctors
response: [ // 大概20个左右
    {
        "_id":"id",
        "avatar": "http://placehold.it/80x100/0000ff/ffffff", // 头像
        "name": "周敏如",
        "nick": "美鼻王子", // 行业外号
        "title": "主任医生", // 职称
        "speciality": ["隆鼻","鼻尖整形","鼻尖综合","希腊鼻","鹰钩鼻"],
    },
    {
        "_id":"id",
        "avatar": "http://placehold.it/80x100/0000ff/ffffff", // 头像
        "name": "周敏如",
        "nick": "美鼻王子", // 行业外号
        "title": "主任医生", // 职称
        "speciality": ["隆鼻","鼻尖整形","鼻尖综合","希腊鼻","鹰钩鼻"],
    },
    {
        "_id":"id",
        "avatar": "http://placehold.it/80x100/0000ff/ffffff", // 头像
        "name": "周敏如",
        "nick": "美鼻王子", // 行业外号
        "title": "主任医生", // 职称
        "speciality": ["隆鼻","鼻尖整形","鼻尖综合","希腊鼻","鹰钩鼻"],
    },
]
```

### 直播
```javascript
# 直播页面
GET /live
response: {
    "next": {
        "_id": "id",
        "pic": "http://placehold.it/350x150/00ff00/ffffff",
        "url": "第三方直播链接", // 根据链接打开web浏览器,
        "title": "baby之欧式大双,汝等之肚脐眼儿?",
        "like": 463422, // 想看人数
        "doctor":{
            "_id":"id",
            "avatar": "http://placehold.it/80x100/0000ff/ffffff", // 头像
            "name": "周敏如",
            "nick": "美鼻王子", // 行业外号
            "experience": "“美鼻王子”，国内最著名的鼻部权威专家之一。中国整形美容协会会员，不辣不辣不辣不辣不辣吹上天。。。" // 执业经历
        },
    },
    "preview": [
        {
            "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
            "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
            "like": 18460, // 想做的数量
            "title": "【肤若凝脂】一言不合就变白,美白大法来也"
        },
        {
            "_id": "5705c240f648e134dc8d2a0d", // 见视频请求，http://domain/api/v1/video/5705c240f648e134dc8d2a0d
            "pic": "http://placehold.it/350x150/0000ff/ffffff", // 显示图片
            "like": 18460, // 想做的数量
            "title": "【肤若凝脂】一言不合就变白,美白大法来也"
        },
    ]
}

# 点击用户想看// TODO: PRD中没有这个按钮，需要添加
POST /live/:id/like 

header://request的header
    Authorization: token//用户token

response: {} // 返回结果同上面GET /live,前端逻辑可以直接在前端+1,不用依靠后端返回值。
```

### 返利（上传图片）
```javascript
// TODO: 还没做完
POST /rebate/ticket
POST /rebate/before
POST /rebate/after

header://request的header
    Authorization: token//用户token

response: {
    "status": "ok", // or "error"
    "message": ""
}
```


### 登录
```javascript
# 获取验证码
POST /vcode?phone=13912345678
body: {}
response: {
    "status": "ok", // or "error"
    "message": ""
} 

POST /login?phone=13912345678&code=1234
body: {}

header://response的header
    Authorization: token//这个是在response的header里的，客户端拿到请记录到本地，

response: { 
    "status": "ok", // or "error"
    "message": ""
}  
```
## 后台API
// TODO: 还没做完

// TODO: 直播页面添加选择直播医生的配置项
 