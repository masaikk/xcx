// pages/hx/hx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    strsrc:"http://119.23.182.180/hexie/au/ready.wav",
    ausrc:"http://119.23.182.180/hexie/au/2.wav",
    endsrc:"http://119.23.182.180/hexie/au/end.wav",
    autitle:'',
    autype:1,
    auans:'',
    mess:'交替使用远近光灯的项目，远近光之间至少需要交替2次以上\n',
    aulist:[
      {
        'title':'在路边临时停车',
        'ans':'开启小灯（示宽灯）和危险警示灯（双闪）',
        'anstype':1
      },
      {
        'title':'进入无照明，照明不良的道路行驶时',
        'ans':'打开远光灯',
        'anstype':2
      },
      {
        'title':'准备会车',
        'ans':'打开近光灯',
        'anstype':3
      },
      {
        'title':'准备通过路口',
        'ans':'打开近光灯',
        'anstype':3
      },
      {
        'title':'请打开近光灯',
        'ans':'打开近光灯',
        'anstype':3
      },
      {
        'title':'同方向近距离跟车行驶',
        'ans':'打开近光灯',
        'anstype':3
      },
      {
        'title':'在有路灯，照明良好的道路上行驶时',
        'ans':'打开近光灯',
        'anstype':3
      },
      {
        'title':'准备超车',
        'ans':'交替使用远近光灯，灯光停留在近光灯',
        'anstype':4
      },
      {
        'title':'前方通过急弯',
        'ans':'交替使用远近光灯，灯光停留在近光灯',
        'anstype':4
      },
      {
        'title':'前方通过坡路',
        'ans':'交替使用远近光灯，灯光停留在近光灯',
        'anstype':4
      },
      {
        'title':'前方通过拱桥',
        'ans':'交替使用远近光灯，灯光停留在近光灯',
        'anstype':4
      },
      {
        'title':'前方通过人行横道',
        'ans':'交替使用远近光灯，灯光停留在近光灯',
        'anstype':4
      },
      {
        'title':'前方通过没有交通信号灯控制的路口',
        'ans':'交替使用远近光灯，灯光停留在近光灯',
        'anstype':4
      },

    ]

  },
  anstap(e){
    //console.warn(e.currentTarget.id);
    
    switch(e.currentTarget.id){
      case 'a1': {
        if(this.data.autype==2){
          wx.showToast({
            title: '正确',
          })}
        else{
          wx.showToast({
            title: '错误',
          })
        }
        break;
      };
      case 'a2': {
        if(this.data.autype==3){
          wx.showToast({
            title: '正确',
          })}
        else{
          wx.showToast({
            title: '错误',
          })
        }
        break;
      }
      case 'a3': {
        if(this.data.autype==4){
          wx.showToast({
            title: '正确',
          })}
        else{
          wx.showToast({
            title: '错误',
          })
        }
        break;
      }
      case 'a4': {
        if(this.data.autype==1){
          wx.showToast({
            title: '正确',
          })}
        else{
          wx.showToast({
            title: '错误',
          })
        }
        break;
      }

      default: console.warn(e.currentTarget.id);break;
    };
  },
  change(e){
    let aunum = Math.floor(Math.random() * (14 - 1))+1;
    this.setData({
      ausrc:"http://119.23.182.180/hexie/au/"+aunum+".wav",
      autype:this.data.aulist[aunum-1].anstype,
      autitle:this.data.aulist[aunum-1].title,
      auans:this.data.aulist[aunum-1].ans,
    });
    // console.warn(this.data.autype);
    // console.warn(this.data.autitle);
    wx.showToast({
      title: '更换成功',
      
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})