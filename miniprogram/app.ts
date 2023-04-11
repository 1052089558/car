// import Http from '../miniprogram/common/js/http'
const QQMapWX = require('./utils/qqmapsdk');
App<IAppOption>({
  globalData: {
    userInfo: undefined,
    forminfo: {
      user: "",
      password: "",
    },
    address: {},//经纬度
    location:{},
    qqmapsdk:'',
    baseApiUrl:'http://47.111.171.41:10035/travel/',
    application:{},
    token:""
  },
  onLaunch() {
    //获取地址
    this.globalData.qqmapsdk= new QQMapWX({key:'MPLBZ-WFTLR-FRWWW-WZJ3S-T5WZ3-EEFUJ'})
    wx.getLocation({
      type: 'gcj02',  //获取位置的类型 可选 gcj02和wgs84 默认wgs84
      isHighAccuracy: true, //开启精准 默认不开启
      success: (res) => {
        console.log('位置信息', res)
        const latitude = res.latitude  //纬度
        const longitude = res.longitude //经度
        const speed = res.speed
        const accuracy = res.accuracy
        const positionObj = {
          latitude,
          longitude,
          speed,
          accuracy
        }
        this.globalData.address = positionObj
        this.globalData.qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
         
          success: (res:any)=> {
            this.globalData.location=res.result
          },
        })
        
      },
      fail: () => {
        wx.redirectTo({
          url: '/pages/login/login'
        })
        wx.showToast({
          title:"请授权地理位置",
          icon:"error"
        })
      }
    })
   
   
// this.globalData.http=Http()
    console.log("app",this.globalData)
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
    //
 
  },
})