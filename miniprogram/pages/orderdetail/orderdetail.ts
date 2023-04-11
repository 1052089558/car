// pages/orderdetail/orderdetail.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordertype:null,
    orderdetail:[] as any,
    historyfield:[
      {
        data: "usetime"
      },
      {
        label: "用车时间",
        data: "usetime"
      }, {
        label: "乘车人",
        data: "address"
      }
    ],
    topdata:[
      {
        label:'申请时间',
        data:"2022-12-06 16:13"
      },{
        label:"申请人",
        data:"王钢铁"
      }
    ]
    
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options:any)  {
    let ordertype:any =JSON.parse(options.type);
    let orderdetail:any=[JSON.parse(options.detail).detail];
   
    
     this.setData({
       'ordertype':ordertype,
       'orderdetail':orderdetail
     })
     //判断订单类型
     switch(ordertype){
       case "0":
        wx.setNavigationBarTitle({
           title:"已批准"
        })
         break;
         case "1":
          wx.setNavigationBarTitle({
             title:"已驳回"
          })
           break;
           case "2":
          wx.setNavigationBarTitle({
             title:"已派车"
          })
          let target:any=[
            {
              label:'驾驶员',
              data:"王钢铁"
            },{
              label:"车身颜色",
              data:"黑色"
            },{
              label:"车辆品牌",
              data:"大众"
            }
          ]
          this.setData({
            'topdata':target
          })
           break;
           case "4":
            wx.setNavigationBarTitle({
               title:"待支付"
            })
             break;
        default:
          break;
     }
  
   console.log("this.data",this.data);
   
   

                             
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