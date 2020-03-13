// pages/home/home.js
Page({

   /**
    * 页面的初始数据
    */
   data: {

      imgUrls:[
         'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
         'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
         'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      // 自动切换时间间隔
      interval:5000,
      // 滑动动画时长
      duration:1000,
      // 是否显示面板指示点
      indicatorDots:true,
      // 指示点颜色
      indicatorColor:"#ffffff",
      // 当前选中的指示点颜色
      activecolor:"#2971f6",
      // 是否自动切换
      autoplay:true,

      // audio组件
      musicinfo: {
         poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
         name: '此时此刻',
         author: '许巍',
         src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',

   // 地图组件
         latitude: 22.540503,
         longitude: 113.934528,
         markers: [
         {
            id: 1,
            latitude: 22.540503,
            longitude: 113.934528,
            title: '深圳腾讯大厦'
         },
         // {
         //       id: 2,
         //       latitude: 22.540576,
         //       longitude: 113.933790,
         //       title: '万利达科技大厦'
         // },
         // {
         //       id: 3,
         //       latitude: 22.522807,
         //       longitude: 113.935338,
         //       title: '深圳腾讯滨海大厦'
         // },
         // {
         //       id: 4,
         //       latitude: 22.547400,
         //       longitude: 113.944370,
         //       title: '腾讯C2'
         // },   
      ],
},

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
     

      }
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