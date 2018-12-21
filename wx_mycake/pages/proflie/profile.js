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
    var self=this
    console.log(self)
    wx.getUserInfo({
      success:res=>{
        self.setData({
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName
        })
      }
    })
    console.log(this.avatarUrl,this.nickName)
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