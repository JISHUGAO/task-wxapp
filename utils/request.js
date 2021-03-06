const utils = require('./util.js')

const get = (url, data, success, fail) => {
  var app = getApp()
  wx.request({
    url: utils.getApi(url), //仅为示例，并非真实的接口地址
    data: data,
    method: 'get',
    header: {
      'content-type': 'application/json', // 默认值
      'Authorization': 'Bearer ' + (app === 'undefined' ? '' : app.globalData.token)
    },
    success: function (res) {
      success(res)
    }
  })
}

const post = (url, data, success, fail) => {
  const app = getApp()
  wx.request({
    url: utils.getApi(url), //仅为示例，并非真实的接口地址
    data: data,
    method: 'post',
    header: {
      'content-type': 'application/json', // 默认值
      'Authorization': 'Bearer ' + (app === 'undefined' ? '' : app.globalData.token)
    },
    success: function (res) {
      success(res)
    }
  })
}

module.exports = {
  get,
  post
}