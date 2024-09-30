// packageA/pages/collectData/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCheck:false,
    subjectKey:'',
    bgImg:'/packageA/assets/img/blue-bg.png',
    showDict:{
      sex:false,
      grade:false,
      rank:false
    },
    selectDict:{
      sex:[{ text: '男',value:0},{ text: '女',value:1}],
      grade:[{ text: '1年级',value:0},{ text: '2年级',value:1},{ text: '3年级',value:2},{ text: '4年级',value:3}],
      rank:[{ text: '前5%',value:0},{ text: '前10%',value:1},{ text: '前20%',value:2},{ text: '前40%',value:3}]

    },
    formData:{
      name:'',
      sex:'',
      sexName:'',
      grade:'',
      gradeName:'',
      rank:'',
      rankName:'',
    }

  },
  onClosePopup(event){
    let key = event.currentTarget.dataset.value
    this.setData({ [`showDict.${key}`]: false });
  },
  onConfirmPopup(event){
    let key = event.currentTarget.dataset.value
    const { value,index } = event.detail;
    console.log('zzzzz',event.detail)
    this.setData({[`formData.${key}`]:index,[`formData.${key}Name`]:value.text})
    console.log(`当前值：${value}, 当前索引：${index}`,);
    this.setData({ [`showDict.${key}`]: false });
  },
  showPopup(event){
    let key = event.currentTarget.dataset.value
    this.setData({ [`showDict.${key}`]: true });
  },
  changeName(event){
    this.setData({'formData.name':event.detail})
  },
  goBack() {
    wx.navigateBack({
      delta: 1 
    });
  },
  openMsg(){

    if (this.childComponent) {
      this.childComponent.open('选择越真实，诊学越准确'); // 调用子组件的方法
    }
  },
  goNext(){
    let formData = this.data.formData
    this.setData({isCheck:true})
    // if(formData.sex==='' || formData.name==='' || formData.grade==='' || formData.rank === ''){
    //   return
    // }
  
    let subjectKey = this.data.subjectKey
    wx.navigateTo({
      url: `/packageA/pages/evaluation/index?sex=${formData.sex}&grade=${formData.grade}&rank=${formData.rank}&name=${formData.name}&subejct=${subjectKey}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({subjectKey:options.subject})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.childComponent = this.selectComponent('#msgDialogId');
    console.log('readey-----',this.childComponent)

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