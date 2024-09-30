// gold/components/tabBox/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabBoxData: {
      type:Object,
      value:{
        title: "父母支持",
        list: [
          {
            title: "反馈(强化和提示)",
            num: 0.64,
            text: "在语文学习中，我总是能够从父母那里获得正反馈。我愿意和爸妈聊天，能在沟通中感受到他们的爱与支持。",
            stuList: [
              { school: "xxx大学", num: 1 },
              { school: "xxx大学", num: 2 },
              { school: "xxx大学", num: 3 },
              { school: "xxx大学", num: 4 },
            ],
            xList: ["完全不是", "不太符合", "一般符合", "比较符合", "完全符合"],
          },
          {
            title: "反馈(强化和提示)",
            num: 0.64,
            text: "在语文学习中，我总是能够从父母那里获得正反馈。我愿意和爸妈聊天，能在沟通中感受到他们的爱与支持。",
            stuList: [
              { school: "xxx大学", num: 1 },
              { school: "xxx大学", num: 2 },
              { school: "xxx大学", num: 3 },
              { school: "xxx大学", num: 4 },
            ],
            xList: ["完全不是", "不太符合", "一般符合", "比较符合", "完全符合"],
          },
          {
            title: "反馈(强化和提示)",
            num: 0.64,
            text: "在语文学习中，我总是能够从父母那里获得正反馈。我愿意和爸妈聊天，能在沟通中感受到他们的爱与支持。",
            stuList: [
              { school: "xxx大学", num: 1 },
              { school: "xxx大学", num: 2 },
              { school: "xxx大学", num: 3 },
              { school: "xxx大学", num: 4 },
            ],
            xList: ["完全不是", "不太符合", "一般符合", "比较符合", "完全符合"],
          },
        ],
       
      },
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    stuDict:['','A','B','C']
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
