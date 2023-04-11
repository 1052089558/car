// pages/permission/permission.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
 value:'',
 history:'history',
 orderlist: [

  {
    type: [
      "包车(2小时)",
      "公务接待",
      "七座商务型"
    ],
    usetime: "2022-9-9 10:00:00",
    address: `南安市人民政府`,
    driver: `王部长`,
    订单号: "CCCCCCC2022",
  },
  {
    type: [
      "包车(2小时)",
      "公务接待",
    ],
    usetime: "2022-9-9 10:00:00",
    address: `南安市人民政府`,
    driver: `王部长`,
    订单号: "CCCCCCC2022",
  },
  {
    type: [
      "包车(2小时)",
      "公务接待",
    ],
    usetime: "2022-9-9 10:00:00",
    address: `南安市人民政府`,
    driver: `王部长`,
    订单号: "CCCCCCC2022",
  },
  {
    type: [
      "包车(2小时)",
      "公务接待",
    ],
    usetime: "2022-9-9 10:00:00",
    address: `南安市人民政府`,
    driver: `王部长`,
    订单号: "CCCCCCC2022",
  },
  {
    type: [
      "包车(2小时)",
      "公务接待",
    ],
    usetime: "2022-9-9 10:00:00",
    address: `南安市人民政府`,
    driver: `王部长`,
    订单号: "CCCCCCC2022",
  }
],
  },
  onIconTap(){
    console.log(111);
    wx.navigateTo({
      url:"/pages/history/history"
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
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