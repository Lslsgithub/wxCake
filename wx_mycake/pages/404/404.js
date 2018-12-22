// pages/404/404.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemImg:"http://127.0.0.1:3000/mycake/404.png",
    s:5,
    timer:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var timer=setInterval(function(){
      console.log(1)
      that.data.s--;
      that.setData({
        s: that.data.s
      });
      if (!that.data.s) {
        clearInterval(timer)
        wx.navigateBack({
          url: options.path //跳转时传递的数据
        })
      }
    },1000)
    that.setData({
      timer:timer
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { //返回来时页面，清除定时器
    var that=this
    clearInterval(that.data.timer)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})