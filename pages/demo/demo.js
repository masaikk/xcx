//Page Object
Page({
  data: {
    imgnum:2,
    imgsrc:"http://119.23.182.180/project/jp2.jpg",
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
    //this.message=e.detail.value;
    this.setData({
      message:e.detail.value,
    })
  },
  showInfo(e){
    this.setData({
      imgnum:((this.data.imgnum+1)>4?2:this.data.imgnum+1 ),
      imgsrc:"http://119.23.182.180/project/jp"+this.data.imgnum+".jpg",
    })
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