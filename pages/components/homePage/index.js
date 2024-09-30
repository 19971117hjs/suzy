Component({
  behaviors: [],
  properties: {

  },
  data: {
    backgroundImageUrl:'/pages/assets/img/header2.png'
  },
  lifetimes: {
    created() {

    },
    attached() {

    },
    moved() {

    },
    detached() {

    },
  },
  methods: {
    doShare(){
      wx.navigateTo({
        url: '/packageB/pages/collect/index'
      });
    },
    cardClick(e){
      let key = e.currentTarget.dataset.value
      if(key==='gold'){
        // wx.navigateTo({
        //   url: `/packageB/pages/goldHome/index`
        // });
        wx.navigateTo({
          url: `/gold/pages/home/index`
        });

      }else{
        wx.navigateTo({
          url: `/packageA/pages/subjectDetail/index?subject=${key}`
        });

      }
    
    }
  },
});