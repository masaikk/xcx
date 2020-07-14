//Page Object
Page({
  data: {
    numb:5201314,
    message:"424324234324",
    poe:{
      name:"saisnas",
      num:8778,
    },
    checks:{
      box1:true,
      box2:false,
    },
    dalist:[
      {
        name:'lbw',
        id:183,
        isu:true,
      },
      {
        name:'cdf',
        id:535,
        isu:true,
      },
      {
        name:'pdg',
        id:752,
        isu:false,
      },

    ],
    
  },
  inputHandle(e){
    //console.warn(e.detail.value)
    wx.showToast({
      title: e.detail.value,
      duration:1000,
    })
    //this.message=e.detail.value;
    this.setData({
      message:e.detail.value,
    })
  },
  click(e){
    
    if(e.target.dataset.op=="s")
      this.setData({
        numb:this.data.numb+1,
      });
  },
  
  //options(Object)
  onLoad: function(options){
    
    
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});