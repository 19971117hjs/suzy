// packageA/components/msgDialog/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow:true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    open(){
      this.setData({'isShow':true})
    },
    goNext(){
      this.setData({'isShow':false})
    }
  }
})