Page({
  data:{
    swiperImgUrls:[],
    menu:[],
    log:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.initData(options);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  itemClick:function(){
    console.log(e=>wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    }));
  },
  initData:function(options){
    this.setData({
      swiperImgUrls:[
        'http://ent.hangzhou.com.cn/images/attachement/jpg/site2/20161123/bc305bb44f14199f337611.jpg',
        'http://img1.imgtn.bdimg.com/it/u=3330999059,2221651524&fm=11&gp=0.jpg',
        'http://f.hiphotos.baidu.com/image/pic/item/b151f8198618367a9f738e022a738bd4b21ce573.jpg'
      ],
      menu:[
        {
          "url":"logs",
          "name":"房子",
          "icon":"../../res/image/icon_01.png"
        },
        {
          "url":"logs",
          "name":"车子",
          "icon":"../../res/image/icon_01.png"
        },
        {
          "url":"logs",
          "name":"票子",
          "icon":"../../res/image/icon_01.png"
        },
        {
          "url":"logs",
          "name":"马子",
          "icon":"../../res/image/icon_01.png"
        }
      ]
    });
  }
})