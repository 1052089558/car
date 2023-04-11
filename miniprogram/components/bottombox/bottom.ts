// components/bottombox/bottom.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: '',
    },
    value: {
      type: Number,
      optionalTypes: [String, Object],
      value: 0
    },
    visible: {
      type: Boolean,
      value: false,
    },
    title: {
      type: String,
      value: ''
    },
    typelist:{
      type:Array,
      value:[]
    },
    leftbtn: {
      type: String,
      value: "取消"
    },
    rightbtn: {
      type: String,
      value: "确定"
    },
    format: {
      type: String,
      value: ''
    }
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
    onConfirm(e:any){
    let target= e.detail
    this.triggerEvent("onConfirm",target);
    }
    
  }
})
