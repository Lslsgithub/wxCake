// pages/shop_detail/shop_list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    text: "",
    list: [], //商品列表
    pageIndex: 0, //页码
    pageSize: 7, //每页显示的数据量
    hasMore: true, //是否还有更多数据
  },
  //加载更多的数据
  loadMore: function () {
    //判断是否还有下一页
    if (!this.data.hasMore) {
      this.setData({ text: "没有更多了" })
      wx.showToast({
        title: '没有更多了',
        icon: "none"
      })
      return
    }
    //发送请求
    wx.request({
      url: 'http://127.0.0.1:3000/cakelist',
      data: {
        //pno:this.data.pageIndex+1
        pno: ++this.data.pageIndex,
        pageSize: this.data.pageSize
      },
      success: (res) => {
        //数据总页数
        var pageCount = res.data.pageCount
        //当前页数
        var pno = this.data.pageIndex
        //当前页内容
        var data = res.data.data
        //判断是否还有下一页
        var flag = pno < pageCount
        //拼接两页
        var list = this.data.list.concat(res.data.data)
        this.setData({
          list: list,
          //pageIndex:pno,
          hasMore: flag
        })
      }
    })
    //添加加载时的动画效果
    wx.showLoading({
      title: '正在加载....',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore()
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
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})