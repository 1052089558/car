// components/home/map/map.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lng: {
      type: Number,
      value: 0
    },
    lat: {
      type: Number,
      value: 0
    },
    width:{
      type:Number,
      value:600
    },
    height:{
      type:Number,
      value:300
    }
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    markers:[] as any
    // markers: [{ // 绘制浮标，传入JSON支持多个
    //   // iconPath: "/images/location.png", //浮标图片路径，推荐png图片
    //   id: 0, // Id支持多个，方便后期点击浮标获取相关信息
    //   latitude: 23.099994, // 经度
    //   longitude: 113.324520, //纬度
    //   width: 50, // 浮标宽度
    //   height: 50 // 浮标高度
    // }],
    // polyline: [{ // 绘制多边形区域，两个点绘制直线
    //   points: [ // 这里传入两个点是直线，如果传入三个点以上就会是首尾相连的多边形区域
    //     {
    //       longitude: 113.3245211,
    //       latitude: 23.10229
    //     }, {
    //       longitude: 113.3245220,
    //       latitude: 23.21229
    //     }],
    //     color: "#FF0000DD", // 设置颜色
    //     width: 2, // 设置线宽度 注：电脑模拟器无法预览测设设置，此设置需要手机测试
    //     dottedLine: true // 是否设置为虚线
    // }],
  },
  


  lifetimes: {
   
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      console.log('detachede map')
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
  
  }
})
