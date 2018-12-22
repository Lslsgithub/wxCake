// pages/msg/msg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop_class:[], 
    acIndex:1 ,
    tar:"",
    cList:[] 
  },

//加载分类列表选项
classList:function(){
  wx.request({
    url: 'http://127.0.0.1:3000/cList',
    success:(res)=>{
      this.setData({cList:res.data})
    }
  })
},
//加载商品分类
  clickList: function (e) {
    //判断e,
    e = e || {currentTarget: {dataset:{index:1}}}
    wx.showLoading({
      title: "正在加载数据"
    }); 
    wx.request({
      url: 'http://127.0.0.1:3000/shop_class',
      success: (res) => {
        wx.hideLoading();
        this.setData({ shop_class: res.data})
      }
    })
    this.setData({
      acIndex: e.currentTarget.dataset.index
    })
  },
/*查看商品详情*/
info:function(){
  wx.navigateTo({
    url: '/pages/detail/detail',
  })
},

  onLoad: function (options) {
    //页面首次加载
    this.classList() 
    this.clickList()
  },

 
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {}
})