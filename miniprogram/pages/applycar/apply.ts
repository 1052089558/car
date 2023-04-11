// pages/applycar/apply.ts
var app: IAppOption = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabvalue: 0,
    mode: '',
    payvisity: false,
    carvisity: false,
    playvalue: "",
    address: "请选择出发地",
    playtype: [
      { label: "统付支付(A类)", value: 0 },
      { label: "统付支付(B类)", value: 1 }
    ],
    cartype: [{
      label: "公务接待"
    }, {
      label: "重要会议"
    }, {
      label: "视察调研"
    }],
    datetimevisible: false,
    datetime: new Date().getTime(),
    datetimeText: '',
    userlist: [
      {
        title: "乘车人",
        note: `仅自己`,
        righticon: "chevron-right",
      },
      {
        title: "用车时间",
        note: `2022-12-07 09:30`,
        righticon: "chevron-right",
      },
      {
        title: "出发地",
        note: `选择出发地`,
        righticon: "chevron-right",
      },
      {
        title: "支付方式",
        note: `请选择支付方式`,
        righticon: "chevron-right",
      },

    ],
    carlist: [
      {
        title: "用车类型",
        note: `请选择用车类型`,
        righticon: "chevron-right",
      },
      {
        title: "用车说明",
        note: `请填写用车说明`,
        righticon: "chevron-right",
      },
      {
        type: "tags",
        tags: [
          {
            name: "舒适型",
            value: "0",
            url: "https://tdesign.gtimg.com/site/swiper/04.png"
          },
          {
            name: "商务型",
            value: "1",
            url: "https://tdesign.gtimg.com/site/swiper/04.png"
          },
          {
            name: "中巴",
            value: "2",
            url: "https://tdesign.gtimg.com/site/swiper/04.png"
          },
          {
            name: "大巴",
            value: "3",
            url: "https://tdesign.gtimg.com/site/swiper/04.png"
          },
        ]
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  userClick(e: any) {
    let target = e.detail.title
    switch (target) {
      case "乘车人":
        wx.navigateTo({
          url: '/pages/riders/riders'
        })
        break;
      case "出发地":
        wx.navigateTo({
          url: '/pages/startpoint/startpoint'
        })
        break
      case "用车时间":
        this.setData({
          datetimevisible: true
        })
        break;
      case "支付方式":
        this.setData({
          payvisity: true
        })
        break;
      case "用车类型":
        this.setData({
          carvisity: true
        })
        break;
      default:
        break;
    }
  },
  //车辆点击事件
  carClick(e: any) {
    let target = e.detail.title;
    switch (target) {
      case "用车类型":
        this.setData({
          carvisity: true
        })
        break;
      case "用车说明":
        wx.navigateTo({
          url: '/pages/explain/explain'
        })
        break;
      default:
        break;
    }
  },
  //确定时间
  dateChange(e: any) {
    console.log("e", e)
    this.setData({
      'userlist[1].note': e.detail.value
    })
  },
  //地图游标事件
  markertap(e: any) {
    console.log("e", e)
  },
  //支付方式更新
  payChange(e: any) {
    console.log("hh", e);
    this.setData({
      'userlist[3].note': e.detail.label
    })
    if (e.detail.label[0] == "统付支付(B类)") {
      this.setData({
        'carlist[0].type': 'hide'
      })
    } else {
      this.setData({
        'carlist[0].type': null
      })

    }
  },
  submitapply(e:any) {
    console.log("申请",e);
    
    // wx.navigateTo({
    //   url: '/pages/permission/permission'
    // })
  },
  carChange(e: any) {
    this.setData({
      'carlist[0].note': e.detail.label
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
    let address = app.globalData.location.address
    this.setData({
      'userlist[2].note': address
    })
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