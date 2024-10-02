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
    isShow:false,
    bgImg:'/packageA/assets/img/blue-bg.png',
    logoImg:'/packages/assets/img/msg-logo.png',
    content:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    open(content){
      this.setData({'isShow':true,'content':content})
    },
    goNext(){
      console.log('isShow-------goNext')
      this.setData({'isShow':false})
      this.triggerEvent('ok')
    }
  }
})