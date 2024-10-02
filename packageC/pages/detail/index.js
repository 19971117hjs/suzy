// packageC/pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight:0,
    userData:{
      name:'张三',
      studyNum:107.95,
      per1:'92%',
      schoolLevel:1,
      schoolLevelList:['40%','10%','30%','20%','5%'],
      studentList: [
        { schoolName: "xx学校", name: "xxx", studyNum: "123.99" },
        { schoolName: "xx学校", name: "xxx", studyNum: "123.99" },
        { schoolName: "xx学校", name: "xxx", studyNum: "123.99" },
      ]
    },
    schoolLevelList:[
      {label:'顶尖985',value:'2.24%'},
      {label:'重点211',value:'4.9%'},
      {label:'一本大学',value:'15.76%'},
      {label:'普通本科',value:'26.9%'},
      {label:'本科以下',value:'50.2%'},
    ],
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

  /**
   * 生命周期函数--监听页面加载
   */
  goBack() {
    wx.navigateBack({
      delta: 1 
    });
  },
  onLoad(options) {
    wx.getSystemInfo({
      success: (res) => {
        if (res.system.toLowerCase().indexOf('ios') > -1) {
          // iOS 设备，状态栏高度可能为 20
          this.setData({
            navBarHeight: res.statusBarHeight + 44
          });
        } else {
          // 非 iOS 设备，状态栏高度可能为 0
          this.setData({
            navBarHeight: res.statusBarHeight + 42
          });
        }
      }
    });

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