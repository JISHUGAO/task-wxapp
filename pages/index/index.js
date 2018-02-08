const request = require('../../utils/request.js')
const app = getApp()
Page({
  onLoad () {
    
    console.log(123123, app)
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        // 登录
        wx.login({
          success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId

            request.post('login', { code: res.code, userInfo }, function (res) {
              app.globalData.token = res.data.token
              app.globalData.userInfo = res.data

              wx.navigateTo({
                url: '/pages/tasks/tasks'
              })
            })
          }
        })
      }
    })

  }
})