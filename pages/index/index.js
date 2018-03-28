//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    questions: [
      {
        "tags": [
          0,
          1
        ],
        "notNull": true,
        "title": "您多久吃一次腌制食品？",
        "type": "select",
        "items": [
          "经常吃",
          "偶尔吃",
          "从来不吃"
        ]
      },
      {
        "tags": [
          0,
          1,
          2
        ],
        "title": "请从下列症状中选出符合您近期情况的症状？",
        "type": "multiSelect",
        "items": [
          "牙龈肿痛",
          "口干",
          "便秘"
        ]
      },
      {
        "tags": [
          0
        ],
        "title": "填写您最近使用的药物名称",
        "type": "addableBlank",
        "placeholder": [
          " 药物名称",
          "添加药品"
        ]
      },
      {
        "tags": [
          0,
          1,
          2,
          3
        ],
        "notNull": true,
        "title": "请填写您的体重",
        "type": "blank",
        "placeholder": [
          "请输入体重"
        ],
        "tips": {
          "front": "体重",
          "back": "千克"
        }
      },
      {
        "tags": [
          0,
          1,
          2,
          3
        ],
        "title": "您是否吸烟？",
        "type": "flexible",
        "components": [
          {
            "type": "selectItem",
            "items": [
              "是",
              "否"
            ]
          },
          {
            "type": "inputTitleWithSlide",
            "titles": [
              "若是，您吸烟约",
              "@input",
              "年"
            ],
            "max": 40,
            "min": 0,
            "default": 20
          },
          {
            "type": "inputTitleWithSlide",
            "titles": [
              "平均吸烟约",
              "@input",
              "支/天"
            ],
            "max": 40,
            "min": 0,
            "default": 20
          },
          {
            "type": "inputTitleWithSlide",
            "titles": [
              "现戒烟",
              "@input",
              "年"
            ],
            "max": 40,
            "min": 0,
            "default": 20
          }
        ]
      },
      {
        "tags": [
          0,
          1,
          2,
          3
        ],
        "title": "您是否食用以下食品？",
        "type": "flexible",
        "components": [
          {
            "type": "onelineMultiSelectTitle",
            "titles": [
              "从不",
              "偶尔\n<3次/周",
              "经常\n>=3次/周"
            ]
          },
          {
            "type": "onelineMultiSelectItem",
            "title": "自制鱼露",
            "itemNum": 3,
            "checkType": "radio"
          },
          {
            "type": "inputTitleWithSlide",
            "titles": [
              "持续 约",
              "@input",
              "年"
            ],
            "max": 40,
            "min": 0,
            "default": 20
          },
          {
            "type": "onelineMultiSelectItem",
            "title": "虾油",
            "itemNum": 3,
            "checkType": "radio"
          },
          {
            "type": "inputTitleWithSlide",
            "titles": [
              "持续 约",
              "@input",
              "年"
            ],
            "max": 40,
            "min": 0,
            "default": 20
          },
          {
            "type": "onelineMultiSelectItem",
            "title": "腌制食品",
            "itemNum": 3,
            "checkType": "radio"
          },
          {
            "type": "onelineMultiSelectItem",
            "title": "隔夜菜",
            "itemNum": 3,
            "checkType": "radio"
          }
        ]
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
