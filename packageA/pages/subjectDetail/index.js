// packageA/pages/subjectDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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

  goBack() {
    wx.navigateBack({
      delta: 1 // 这里的 delta 表示返回的层数，1 表示返回上一层，即返回到上一个页面
    });
  },
  goNext() {
    wx.navigateTo({
      url: `/packageA/pages/collectData/index?subject=${this.data.subjectKey}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({subjectKey:options.subject})
    console.log('携带参数',options.subject)
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