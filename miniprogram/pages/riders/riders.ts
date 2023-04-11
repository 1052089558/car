// pages/riders/riders.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userlist: [
      {
      type:"input",
      label: "姓名",
      placeholder:"请输入姓名"
      },
      {
        type:"input",
        label: "手机号",
        placeholder:"请输入手机号"
        },
    
    ],
    history:[
      {
        title:"张三",
        note:"15945641687",
        type:"swipercell"
      },
      {
        title:"李四",
        note:"15945641687",
        type:"swipercell"
      },
      {
        title:"王五",
        note:"15945641687",
        type:"swipercell"
      }
    ]
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