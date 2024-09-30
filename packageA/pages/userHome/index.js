Page({
  data: {
    tabIdx:1,
    queryList:[{label:'全部',value:'-1'},{label:'语文',value:'1'},{label:'数学',value:'2'},{label:'英语',value:'3'}],
    queryValue:'-1'
  },
  changeTab(e){
    this.setData({tabIdx:e.currentTarget.dataset.idx})
    console.log('zzzz',e.currentTarget.dataset.idx)
  },
  changeQueryValue(e){
    this.setData({queryValue:e.currentTarget.dataset.value})
  },
  goHome(){
    wx.redirectTo({
        url: "/pages/index/index",
      });
    
  },
  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onShareAppMessage() {
    return {
      title: "",
    };
  },
});
