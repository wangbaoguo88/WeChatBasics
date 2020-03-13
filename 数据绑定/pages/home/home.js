// pages/home/home.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
         username:"张明",


         id: 233,
            itemurl:"/pages/home/imgshow/imgshow", 
         itemclass:"evevt-item", imagesrc:"https://hackwork.oss-cn-shanghai.aliyuncs.com/lesson/weapp/4/weapp.jpg",
      imagemode:"widthFix",
      imagewidth:"100%",


   love1:520,
   love2:"520",
   forever1:1314,
   forever2:"1314",
  

   // 数组[]
   newstitle:[
      "瑞幸咖啡：有望在三季度达到门店运营的盈亏平衡点",
      "腾讯：广告高库存量还是会持续到下一年",
      "上汽集团云计算数据中心落户郑州，总投资20亿元",
      "京东：月收入超2万元快递小哥数量同比增长163%",
      "腾讯：《和平精英》日活跃用户已超五千万",
   ],
      // 对象是一个包含相关数据和方法的集合（通常由一些变量和函数组成，我们称之为对象里面的属性和方法）{}。
   movie:
   {
      name:"肖申克的就独",
      englishname:"The Shawshank Redemption",
      country:"美国",
      year:"1994",     img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp",
      desc:"有的人的羽翼是如此光辉，即使世界上最黑暗的牢狱，也无法长久地将他围困！",
   },
   

   movies:
   [
      {
         name: "肖申克的救赎",
         englishname: "The Shawshank Redemption",
         country: "美国",
         year: 1994,
         img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp",
         desc: "有的人的羽翼是如此光辉，即使世界上最黑暗的牢狱，也无法长久地将他围困！",

         actor:[
            // 对象里面的属性
            {
               name:"蒂姆·罗宾斯",
               role:"安迪·杜佛兰"
            },
            {
               name: "摩根·弗里曼",
               role: "艾利斯·波伊德·瑞德"
            },
         ]
      },

      {
         name: "霸王别姬",
         englishname: "Farewell My Concubine",
         country: "中国",
         year: 1993,
         img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.webp",
         desc: "风华绝代",

         actor: [
            // 对象里面的属性
            {
               name: "张国荣",
               role: "程蝶衣"
            },
            {
               name: "张丰毅",
               role: "段小楼"
            },
         ]
      },

   ],


   grids:[
      {
               imgurl:"https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon1.png",
         title: "招聘",
      },

      {
         imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon2.png",
         title: "房产"
      },

      {
         imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon3.png",
         title: "二手车新车"
      },

      {
         imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon4.png",
         title: "二手"
      },

      {
         imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon5.png",
         title: "招商加盟"
      },

      {
         
         imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon6.png",
         title: "兼职"
      },

      {
         imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon7.png",
         title: "本地"
      },

      {
         imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon8.png",
         title: "家政"
      },

      {
         imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon9.png",
         title: "金币夺宝"
      },

      {
         imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon10.png",
         title: "送现金"
      },

   ],

   listicons:[
      {
         icon: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/listicons1.png",
         title: "我的文件",
         desc: ""
      },

      {
         icon: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/listicons2.png",
         title: "我的收藏",
         desc: "收藏列表"
      },

      {
         icon: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/listicons3.png",
         title: "我的邮件",
         desc: ""
      }
   ],


   

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