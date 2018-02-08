//logs.js
const util = require('../../utils/util.js')
const api = require('../../api/index.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
