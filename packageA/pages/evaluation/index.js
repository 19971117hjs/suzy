// packageA/pages/evaluation/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    queIdx:0,
    percentage:1.5,
    queList:[
      {name:'根据1学校往年的成绩，我相信自已在语文老师的帮助下，有机会考上理想的高中/大学。',idx:0,ansIdx:''},
      {name:'根据2学校往年的成绩，我相信自已在语文老师的帮助下，有机会考上理想的高中/大学。',idx:1,ansIdx:''},
      {name:'根据3学校往年的成绩，我相信自已在语文老师的帮助下，有机会考上理想的高中/大学。',idx:2,ansIdx:''},
      {name:'根据4学校往年的成绩，我相信自已在语文老师的帮助下，有机会考上理想的高中/大学。',idx:3,ansIdx:''},
    ],
    selectList:['完全不是','不太符合','一般符合','比较符合','完全符合'],
    subjectKey:'chinese',
    subjectDict:{
      chinese:{
        title:'语文',
        msg:'用数据解析语文潜能，掌握学习主动权'
      },
      math:{
       title:'数学',
       msg:'精准定位，全面评估，高效提升数学能力'
     },
     english:{
       title:'英语',
       msg:'系统分析英语学习模式，高效提升英语能力'
     }
    }
  },
  last(){
   let idx = this.data.queIdx
   if(!idx){
    this.goBack()
   }else{
     this.setData({'queIdx':idx-1})
   }
  },
  next(){
    let idx = this.data.queIdx
    if(idx==65){
      // 完成
    }else{
      this.setData({'queIdx':idx+1})
    }
    
  },
  goBack() {
    wx.navigateBack({
      delta: 1 
    });
  },
  selectAns(event){
    let idx = event.currentTarget.dataset.value
    let queIdx = this.data.queIdx
    console.log('ans---',idx)
    this.setData({[`queList[${queIdx}].ansIdx`]:idx})
    setTimeout(() => {
      this.setData({'queIdx':queIdx+1})
    },300)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('测评页面的路由参数',options)
    const app = getApp();
    app.setWatcher(this);
    this.setData({'subjectKey':options.subject})
  },
  watch:{
   queIdx(val){
    console.log('www----queIdx-----',val)
    let str = ((val+1)/66*100).toFixed(1)
    this.setData({'percentage':str})
   }
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