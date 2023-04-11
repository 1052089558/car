/// <reference path="./types/index.d.ts" />
interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    forminfo?:any,
    address?:any,
    qqmapsdk?:any,
    location?:any,
    baseApiUrl?:any
    application?:any,
    token?:any,
  }
  onLaunch?:any,
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}