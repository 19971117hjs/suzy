Component({
  properties: {
    title: {
      type: String,
      value: "默认标题",
    },
    bgImage: {
      type: String,
      value: "",
    },
    hasLogo: {
      type: Boolean,
      value: false,
    },
    hasNull: {
      type: Boolean,
      value: false,
    }
  },
  data: {
    statusBarHeight: 0,
  },
  attached() {
    const { statusBarHeight } = wx.getSystemInfoSync();
    console.log(
      "%c Line:17 🌮 statusBarHeight",
      "color:#3f7cff",
      statusBarHeight
    );
    this.setData({
      statusBarHeight,
    });
  },
  methods: {
    goHome() {
      wx.navigateTo({
        url: "/packageA/pages/userHome/index",
      });
    },
  },
});
