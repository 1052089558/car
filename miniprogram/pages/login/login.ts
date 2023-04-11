import api from '../../apis/api'
var app: IAppOption = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: false,
    form: {
      user: '',
      password: ''
    }
  },
  travelChange() {
    this.setData({
      flag: !this.data.flag,
    });
  },
  submit(e: submitForm) {
  //   let forminfo:any = e.detail.value
  //   console.log("forminfo",forminfo)
  //   app.globalData.forminfo = forminfo;
  //   const data ={
  //     'password':forminfo.password,
  //     'username':forminfo.user,
  //     'type':"1"
  //   }
  //  api.getLogin(data).then((res)=>{
  //    console.log(res);
  //  })
    // if(forminfo.user=="123"&&forminfo.password=="123"){
    //   if(JSON.stringify(app.globalData.address)=="{}"){
    //      wx.showToast({
    //        title:"请授权位置信息",
    //        icon:"error"
    //      })
    //      return 
    //   }
      wx.navigateTo({
        url:'/pages/home/home'
      })
    //   console.log(app.globalData.address);
    //   wx.showToast({
    //     icon:'success',
    //     title:"登录成功"
    //   })
    // }else{
    //   wx.showToast({
    //     icon:'success',
    //     title:"登录失败"
    //   })
    // }
  },

  getPhoneNumber(e: submitForm) {
    if (e.detail.errMsg == "getPhoneNumber:fail user deny") {
       wx.showToast({
         icon:"none",
         title:"请允许获取手机号"
       })
    }else if(e.detail.errMsg=="getPhoneNumber:ok"){
       wx.navigateTo({
         url:"/pages/home/home"
       })
    }

  },
  goProtocol() {
    console.log(app.globalData)
    wx.navigateTo({
      url: "/pages/protocol/protocol",
    });
    wx.setNavigationBarTitle({
      title: '用车服务协议',
    })
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