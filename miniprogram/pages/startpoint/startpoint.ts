// pages/startpoint/startpoint.ts
var app: IAppOption = getApp();
interface suggestion {
  title?: any;
  id?: any;
  addr?: any;
  city?: any;
  district?: any;
  latitude?: any;
  longitude?: any;
}[]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:"泉州市",
    search:"",
    showview:false,
    suggestion:[] as any
  },

  /**
   * 生命周期函数--监听页面加载
   */
  cityChange(){
console.log(111);
wx.reLaunch({
  url:'/pages/citychoose/citychoose'
}
  
)
  },
  position(e:any){
    var _this = this;
    //调用关键词提示接口
    app.globalData.qqmapsdk.getSuggestion({
      //获取输入框值并设置keyword参数
      keyword:e.detail.value, //用户输入的关键词，可设置固定值,如keyword:'KFC'
      region: this.data.city, //设置城市名，限制关键词所示的地域范围，非必填参数
      page_size:8,//展示个数
      success: function (res:any) {//搜索成功后的回调
        console.log(res);
        let sug = [];
        for (var i = 0; i < res.data.length; i++) {
          sug.push({ // 获取返回结果，放到sug数组中
            title: res.data[i].title,
            id: res.data[i].id,
            addr: res.data[i].address,
            city: res.data[i].city,
            district: res.data[i].district,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng
          });
        }
        _this.setData({
          showview: false
        })
        _this.setData({ //设置suggestion属性，将关键词搜索结果以列表形式展示
              suggestion: sug
        });
        console.log("hhh",_this.data.suggestion);
        
       
       
        
      },
      fail: function (error:any) {
        console.error(error+"失败");
        _this.setData({
          showview: true
        })
      },
   
    });

  },
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})