// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: { //获取的对象
      id: 1,
      img: 'http://127.0.0.1:3000/mycake/cake1.jpg',
      title: '奶油蛋糕',
      price: 100,
      stock: '有货',
      detail: '奶油蛋糕详情',
      parameter: '125g/个',
      service: '不支持退货'
    },
    curIndex: "0", //判断active
    num: 1, //数量 
  },

  //激活
  showDetail: function(e) {
    var that = this
    that.setData({
      curIndex: e.currentTarget.dataset.index
    })
  },
  //数量+1
  numAdd: function() {
    var that = this
    that.setData({
      num: ++that.data.num
    })
  },
  //数量-1
  numSub: function() {
    var that = this
    var n = --that.data.num
    if (n) {
      that.setData({
        num: n
      })
    } else {
      that.setData({
        num: 1
      })
    }
  },
  /*跳转购物车页面*/
  jumpCart:function(){
    wx.switchTab({
      url: "/pages/shop_car/shop_car",
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})