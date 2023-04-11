// components/orderlist/orderlist.ts

Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  externalClasses:["bottom-slot-class"],
  properties: {
    fieldlist: {
      type: Array,
      value: []
    },
    bottomslot:{
      type: Boolean,
      value: false
    },
    // orderslot:{
    //   type:Boolean,
    //   value:false
    // },
    orderlist: {
      type: Array,
      optionalTypes:[Object],
      value: [],
    },
   
    check: {
      type: Boolean,
      value: false
    },
    title: {
      type: String
    },
    scrolly: {
      type: Boolean,
      value: false
    },
    scrollHeight: {
      type: String,
      value: "100%"
    }, 
    disabled: {
      type: Boolean,
      value: false
    },
    status:{
      type:Boolean,
      value:false
    }
  },
  observers: {
    // 'orderdetail': function(orderdetail:any) {
    //   // 在 numberA 或者 numberB 被设置时，执行这个函数
    //   this.setData({
    //     orderdetail:orderdetail
    //   })
   
      
    // }
  },
  lifetimes: {
    attached () {
    },
    detached () {
      // 在组件实例被从页面节点树移除时执行
   
    },
    ready() {
      console.log(this.data.orderlist);
      
    },
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    orderDetail(e: any) {
      let item: object = e.currentTarget.dataset.item
      this.triggerEvent("orderDetail", item)
    },
    radioChange(e: any) {
      console.log(e);
      let target: Boolean = e.detail.checked
      this.triggerEvent("radioChange", target)
    }

  }
})
