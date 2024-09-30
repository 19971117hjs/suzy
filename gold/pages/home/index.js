// gold/pages/home/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight:0,
    isShowMore: false,
    queryValue: 1,
    tabIdx: 1,
    subject: "chinese",
    subjectDict: {
      chinese: {
        title: "语文",
        queryList: [
          { label: "zzzz1", value: 1 },
          { label: "zzzz1", value: 2 },
          { label: "zzzz1", value: 3 },
          { label: "zzzz1", value: 4 },
          { label: "zzzz1", value: 5 },
          { label: "zzzz1", value: 6 },
          { label: "zzzz1", value: 7 },
          { label: "zzzz1", value: 8 },
          { label: "zzzz1", value: 9 },
          { label: "zzzz1", value: 10 },
        ],
      },
      math: {
        title: "数学",
      },
      english: {
        title: "英语",
      },
    },
    title: "",
    studyNum: "120.5",
    userData: {
      name: "刘芳芳",
      gradeName: "初三",
      studyNumOld: "106.78",
      schoolData: [
        {
          label: "顶尖985",
          value: "45.4",
        },
        {
          label: "重点211",
          value: "23",
          isMax: true,
        },
        {
          label: "一本大学",
          value: "45.4",
        },
        {
          label: "普通本科",
          value: "45.4",
        },
        {
          label: "本科以下",
          value: "45.4",
        },
      ],
      schoolDataOld: [
        {
          label: "顶尖985",
          value: "15.1",
        },
        {
          label: "重点211",
          value: "54.4",
        },
        {
          label: "一本大学",
          value: "20.3",
        },
        {
          label: "普通本科",
          value: "45.4",
          isMax: true,
        },
        {
          label: "本科以下",
          value: "45.4",
        },
      ],
      studentList: [
        { schoolName: "xx学校", name: "xxx", studyNum: "123.99" },
        { schoolName: "xx学校", name: "xxx", studyNum: "123.99" },
        { schoolName: "xx学校", name: "xxx", studyNum: "123.99" },
      ],
    },
  },
  openMore() {
    this.setData({ isShowMore: true });
  },
  changeQueryValue(e) {
    this.setData({
      queryValue: e.currentTarget.dataset.value,
      isShowMore: false,
    });
  },
  changeTab(e) {
    this.setData({ tabIdx: e.currentTarget.dataset.idx });
    console.log("zzzz", e.currentTarget.dataset.idx);
  },
  last() {
    wx.navigateBack({
      delta: 1,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({ title: "语文" });
   
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
            navBarHeight: res.statusBarHeight + 46
          });
        }
      }
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
