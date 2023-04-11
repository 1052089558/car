
const num = 11;
Page({

  /**
   * 页面的初始数据
   */

  data: {
    current: 1,
    autoplay: true,
    duration: 500,
    num: 9,
    interval: 5000,
    celllist: [
      {
        title: "用车审批",
        note: `有${num}个订单待审批`,
        righticon: "chevron-right",
      }
    ],
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
        orderno: "CCCCCCC2022",
        status:"2"
      },
      {
        type: [
          "包车(2小时)",
          "公务接待",
        ],
        usetime: "2022-9-9 10:00:00",
        address: `南安市人民政府`,
        driver: `王部长`,
        orderno: "CCCCCCC2022",
        status:"4"
      },
      {
        type: [
          "包车(2小时)",
          "公务接待",
        ],
        usetime: "2022-9-9 10:00:00",
        address: `南安市人民政府`,
        driver: `王部长`,
        orderno: "CCCCCCC2022",
      }
    ],
    swiperList: [
      {
        image: `https://tdesign.gtimg.com/site/swiper/03.png`,
      },
      {
        image: `https://tdesign.gtimg.com/site/swiper/04.png`,
      }
    ],
    visible: false,
  },
 
  handlePopup() {
    this.setData({
      visible: true
    })
  },
  handleAction(){
console.log(111);
wx.navigateTo({
  url: '/pages/applycar/apply'
})
  },
  usecar() {
    console.log("11")
    wx.navigateTo({
      url: '/pages/applycar/apply'
    })
  },
  cellClick(e:any) {
    console.log(e)
    if(e.detail.title=="用车审批"){
      wx.navigateTo({
        url:'/pages/permission/permission'
      })
    }
  },
  orderDetail(e:any){
    console.log("orderdetail", e)
    if(e.detail.status==null) return
    let type:string =JSON.stringify(e.detail.status);

    let detail = JSON.stringify(e);
    wx.navigateTo({
      url: `/pages/orderdetail/orderdetail?type=${type}&detail=${detail}`,
    })
  },
  onVisibleChange(e: submitForm) {
    this.setData({
      visible: e.detail.visible,
    });
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