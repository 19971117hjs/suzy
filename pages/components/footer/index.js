// pages/components/footer/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
   hasBack:{
     type:Boolean,
     default:false
   },
   backName:{
     type:String,
     default:''
   },
   confirmName:{
      type:String,
      default:''
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
    goBack(){
      this.triggerEvent('back')
    },
    goNext(){
      this.triggerEvent('next')
    }
  }
})