// pages/proflie/profile.js
Page({

  data: {
    nickName:"",
    avatarUrl:""
  },
//跳转收货地址
  addr(){
    wx.navigateTo({
      url: '/pages/addr/addr',
    })
  },

  onLoad: function () {
    var that=this
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({  //获取用户信息
            success(res) {
              //console.log(res.userInfo)
              that.setData({
                nickName:res.userInfo.nickName,
                avatarUrl:res.userInfo.avatarUrl
              })
            }
          })
  },

 
  onReady: function () {

  },


  onShow: function () {

  },


  onHide: function () {

  },

 
  onUnload: function () {

  },


  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },


  onShareAppMessage: function () {

  }
})