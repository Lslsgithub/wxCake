// pages/shop_news/shop_news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop_news: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNews()
  },
  //发送Ajax请求，请求新闻数据
  getNews: function () {
    wx.request({
      url: 'http://127.0.0.1:3000/cake_news',
      success: (res) => {
        this.setData({ shop_news: res.data })
      }
    })
  },

  //查看新品详情
  info: function () {
    wx.navigateTo({
      url: '/pages/detail/detail',
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
  onUnload: function () {

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