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
            plan:{
              text:'反馈（强化与提示）效应量 1.01，至少影响 30 分的成绩。\n父母给孩子的支持，最重要的事不是辅导作业，而是给孩子提供反馈。\n反馈有两个主要作用，一是强化，二是提示。\n也即孩子做的好的方面用夸奖和赞赏来强化；坏的方面用批评指导来提示。',
              fullTextUrl:'',
              url:''
            },
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
            plan:{
              text:'反馈（强化与提示）效应量 1.01，至少影响 30 分的成绩。\n父母给孩子的支持，最重要的事不是辅导作业，而是给孩子提供反馈。\n反馈有两个主要作用，一是强化，二是提示。\n也即孩子做的好的方面用夸奖和赞赏来强化；坏的方面用批评指导来提示。',
              fullTextUrl:'',
              url:''
            },
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
            plan:{
              text:'反馈（强化与提示）效应量 1.01，至少影响 30 分的成绩。\n父母给孩子的支持，最重要的事不是辅导作业，而是给孩子提供反馈。\n反馈有两个主要作用，一是强化，二是提示。\n也即孩子做的好的方面用夸奖和赞赏来强化；坏的方面用批评指导来提示。',
              fullTextUrl:'',
              url:''
            },
            stuList: [
              { school: "xxx大学", num: 1 },
              { school: "xxx大学", num: 2 },
              { school: "xxx大学", num: 3 },
              { school: "xxx大学", num: 4 },
            ],
            xList: ["完全不是", "不太符合", "一般符合", "比较符合", "完全符合"],
          },
        ],
        isNull:false
       
      },
    },
    tabIdx:{
      type:Number,
      value:2
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    stuDict:['','A','B','C'],
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
