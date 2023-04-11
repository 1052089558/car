Component({
  /**
   * 组件的属性列表
   */

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    height: {
      type: Number,
    },
    celllist: {
      type: Array,
      value: []

    },
  },
  // externalClasses: ['t-class','t-class-label'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    cellClick(e: any) {
      let target = e.currentTarget.dataset.item
      this.triggerEvent("cellClick", target)
    },
    onTabsClick(e: any) {
      let target = e.detail;
      this.triggerEvent("onTabsClick", target)
    },
    changeTag(e: any) {
  //  this.data.celllist.forEach((t) => {
  //       let target = t.tags
  //       console.log("t", target)
  //       if (target != undefined) {
  //         target.forEach((i: any) => {
  //           i.checked = false
  //           console.log("i", i)
           
  //         })
  //       }
  //     })


  
      let target = e.detail
      console.log("ee",e)
      this.triggerEvent("changeTag", target)
    }
  }
})
