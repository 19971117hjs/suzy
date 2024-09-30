// packageA/pages/evaluation/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stepIdx:1,
    percentage:50,
    isCheck:false,
    subjectKey:'',
    subjectName:'',
    projectKey:'',
    selectProjectKey:'',
    projectName:'',
    schoolIdx:'',
    schoolOptions:['顶尖985','重点211','一本大学','普通本科','本科以下'],
    subjectOptions:[{value:'chinese',text:'语文'},{value:'math',text:'数学'},{value:'english',text:'英语'}],
    projectOptons:[
      { name: '1年级报告自知则知之',value:0,id:'sadsdasd0',studyNum:'190.99',school:'顶尖985'},
      { name: '1年级报告自知则知之2',value:1,id:'sadsdasd1',studyNum:'190.99',school:'一本学校'},
      { name: '1年级报告自知则知之3',value:2,id:'sadsdasd2',studyNum:'190.99',school:'顶尖985'},
      { name: '1年级报告自知则知之4',value:3,id:'sadsdasd3',studyNum:'190.99',school:'顶尖985'},
      { name: '1年级报告自知则知之告自知则知之告自知则知之5',value:4,id:'sadsdasd4',studyNum:'190.99',school:'顶尖985'},
    ],

    showDict:{
      subject:false,
      project:false
    }
  },
  changeProject(event){
    let key = event.currentTarget.dataset.value
    if(key===this.data.selectProjectKey){
     key=''
    }
    this.setData({'selectProjectKey':key})
  },
  onClosePopup(event){
    let key = event.currentTarget.dataset.value
    this.setData({ [`showDict.${key}`]: false });
  },
  onConfirmPopup(event){
    let key = event.currentTarget.dataset.value
   
    console.log('zzzzz----',event.detail)
    if(key==='subject'){
      const { value,index } = event.detail;
      this.setData({'projectKey':'','projectName':'','subjectKey':index,'subjectName':value.text})
    }else{
      this.setData({'projectKey':this.data.selectProjectKey})
    }
    // this.setData({[`formData.${key}`]:index,[`formData.${key}Name`]:value.text})
    // console.log(`当前值：${value}, 当前索引：${index}`,);
    this.setData({ [`showDict.${key}`]: false });
  },
  showPopup(event){
    let key = event.currentTarget.dataset.value
    console.log('showPopup--',key)
    if(key==='project'){
      this.setData({ [`showDict.${key}`]: true ,selectProjectKey:this.data.projectKey});
    }else{
      this.setData({ [`showDict.${key}`]: true });
    }
  
  },
  last(){
   let idx = this.data.stepIdx
   if(idx===2){
    this.setData({'stepIdx':1})
   }else{
     this.goBack()
   }
  },
  next(){
    let idx = this.data.stepIdx
    if(idx===1){
      this.setData({'isCheck':true})
      if(this.data.subjectKey==='' || this.data.projectKey===''){
       return
      }
      this.setData({'stepIdx':2})
    }else{
      // 提交
    }
  },
  toHome(){
   wx.redirectTo({
     url: '/pages/index/index',
   })
  },
  goBack() {
    wx.navigateBack({
      delta: 1 
    });
  },
  selectSchool(event){
    let schoolIdx = event.currentTarget.dataset.value
    this.setData({'schoolIdx':schoolIdx})
  },
  selectSubject(event){
    let subjectKey = event.currentTarget.dataset.value
    this.setData({'subjectKey':subjectKey})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('测评页面的路由参数',options)
    const app = getApp();
    app.setWatcher(this);
  },
  watch:{
   projectKey(val){

     let str = ''
     if(val!==''){
      let idx = this.data.projectOptons.findIndex(v => v.id===val)
      if(idx!==-1){
        str = this.data.projectOptons[idx].name
      }
     }
     console.log('watch-----',val,str)
    this.setData({'projectName':str})
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