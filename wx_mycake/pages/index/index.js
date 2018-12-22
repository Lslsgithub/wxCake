Page({
  data: {
    swiper_img: [],
    cake_menu: []
  },

  cakeNews: function(e) {
    if (e.target.dataset.id == 1) {
      wx.navigateTo({
        url: '/pages/shop_new/shop_new',
      })
    }
    else if(e.target.dataset.id==2){
      wx.navigateTo({
        url: '/pages/product/product',
      })
    } else if (e.target.dataset.id == 3){
      wx.navigateTo({
        url: '/pages/search/search',
      })
    } else{
      //获取当前页面url
      var pages=getCurrentPages() //获取当前页面信息
      var path=pages[0].route //获取当前页对象
      wx.navigateTo({
        url: '/pages/404/404?url='+path,
      })
    }
    
  },
  search:function(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getimgAjax()
  },

  /*创建函数，发送ajax请求图片*/
  getimgAjax: function() {
    //请求轮播图
    wx.request({
      url: 'http://127.0.0.1:3000/cakeimg',
        success: (res) => {
          this.setData({
            swiper_img: res.data
          })
        }
      }),
      //菜单
      wx.request({
      url: 'http://127.0.0.1:3000/cake_menu',
        success: (res) => {
          this.setData({
            cake_menu: res.data
          })
        }
      })
  },



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