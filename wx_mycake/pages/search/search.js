// pages/search/search.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    searchList:"",
    searchImg:"http://127.0.0.1:3000/mycake/search.png"
  },

/*输入时触发，获取输入框中的值*/
  input(e){
  var that=this;
  that.setData({
    value:e.detail.value
   })
if (that.data.value) { //输入框中有值时，才发送请求
   wx.showToast({
     title: '搜索中...',
     icon:"loading"
   })
   //根据输入的值，请求数据
    wx.request({
      url: 'http://127.0.0.1:3000/search?sc='+that.data.value,           
      success: (res) => {
        wx.hideLoading()
        if(!that.data.value){
          wx.showToast({
            title: '没有这类商品',
            icon:"none",
            duration:1500
          })
        }else{
        this.setData({
          searchList: res.data
        })
      }
      }
    })
  }else{ //输入框中没有值，清空列表
    that.setData({
      searchList:""
    })
  }

  },
/*清除输入框中的值*/
clearInput(){
  var that = this;
  that.setData({
    value: "",
    searchList:""
  })
},


 
  onLoad: function (options) {
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