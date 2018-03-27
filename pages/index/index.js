//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    question: {
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
          "type": "oneline-multiselect-title",
          "titles": [
            "从不",
            "偶尔\n<3次/周",
            "经常\n>=3次/周"
          ]
        },
        {
          "type": "oneline-multiselect-item",
          "title": "自制鱼露",
          "itemNum": 3,
          "checkType": "checkbox"
        },
        {
          "type": "input-title-with-slide",
          "titles": [
            "持续 约",
            "@input",
            "年"
          ],
          "max": 40,
          "min": 0
        },
        {
          "type": "oneline-multiselect-item",
          "title": "虾油",
          "itemNum": 3,
          "checkType": "radio"
        },
        {
          "type": "input-title-with-slide",
          "titles": [
            "持续 约",
            "@input",
            "年"
          ],
          "max": 40,
          "min": 0
        },
        {
          "type": "oneline-multiselect-item",
          "title": "腌制食品",
          "itemNum": 3,
          "checkType": "radio"
        },
        {
          "type": "oneline-multiselect-item",
          "title": "隔夜菜",
          "itemNum": 3,
          "checkType": "radio"
        }
      ]
    },
    theIndex:5
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
