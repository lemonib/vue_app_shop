// 导入 http 内置模块
const http = require('http')
// 这个核心模块，能够帮我们解析 URL地址，从而拿到  pathname  query 
const urlModule = require('url')

var querystring = require('querystring');

// 创建一个 http 服务器
const server = http.createServer((function(req,res){
    res.writeHead(200,{
   "Access-Control-Allow-Origin":'*',
   "Access-Control-Allow-Methods":"*",
   "Access-Control-Allow-Headers":"Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE"
    })
  })) 


// 监听 http 服务器的 request 请求
server.on('request', function (req, res) {

  // const url = req.url
  const { pathname, query,search,path } = urlModule.parse(req.url, true)
   

  if (pathname === '/getlist') {
    // 拼接一个合法的JS脚本，这里拼接的是一个方法的调用
    // var scriptStr = 'show()'

    var data = {
      status:0,
      message:[
      {img:'https://img1.360buyimg.com/pop/jfs/t1/15688/24/7720/72727/5c6f5678Eb6239bd6/464c647bfa3d371c.jpg'},
      {img:'http://www.005.tv/uploads/allimg/181106/49-1Q1061A02Q51.jpg'},
      {img:'http://www.005.tv/uploads/allimg/181106/49-1Q1061A056331.jpg'},
      ]
    }

    var scriptStr = JSON.stringify(data)
    // res.end 发送给 客户端， 客户端去把 这个 字符串，当作JS代码去解析执行
    res.end(scriptStr)
  } 


  if (pathname === '/getlist/27') {
    // 拼接一个合法的JS脚本，这里拼接的是一个方法的调用
    // var scriptStr = 'show()'

    var data = {
      status:0,
      message:[
      {img:'http://img5.imgtn.bdimg.com/it/u=3048374264,1425869473&fm=26&gp=0.jpg'},
      {img:'http://img3.imgtn.bdimg.com/it/u=2488985592,3060567427&fm=26&gp=0.jpg'},
      ]
    }

    var scriptStr = JSON.stringify(data)
    // res.end 发送给 客户端， 客户端去把 这个 字符串，当作JS代码去解析执行
    res.end(scriptStr)
  } 


  //
  if (pathname === '/newslist') {
    // 拼接一个合法的JS脚本，这里拼接的是一个方法的调用
    // var scriptStr = 'show()'

    var data = {
      status:0, 
      message:[
      {id:13,title:'1季度多房产跌幅超50%',add_time:new Date(),zaiyao:'已经陆续发布',click:1,imgurl:'https://images.gitee.com/uploads/64/2252064_lemonib.png?1540351167'},
      {id:14,title:'2季度多房产跌幅超50%',add_time:new Date(),zaiyao:'已经陆续发布',click:1,imgurl:'https://images.gitee.com/uploads/64/2252064_lemonib.png?1540351167'},
      {id:15,title:'3季度多房产跌幅超50%',add_time:new Date(),zaiyao:'已经陆续发布',click:1,imgurl:'https://images.gitee.com/uploads/64/2252064_lemonib.png?1540351167'},
      {id:16,title:'1季度多房产跌幅超50%',add_time:new Date(),zaiyao:'已经陆续发布',click:1,imgurl:'https://images.gitee.com/uploads/64/2252064_lemonib.png?1540351167'},
      {id:17,title:'2季度多房产跌幅超50%',add_time:new Date(),zaiyao:'已经陆续发布',click:1,imgurl:'https://images.gitee.com/uploads/64/2252064_lemonib.png?1540351167'},
      {id:18,title:'3季度多房产跌幅超50%',add_time:new Date(),zaiyao:'已经陆续发布',click:1,imgurl:'https://images.gitee.com/uploads/64/2252064_lemonib.png?1540351167'},
      {id:19,title:'1季度多房产跌幅超50%',add_time:new Date(),zaiyao:'已经陆续发布',click:1,imgurl:'https://images.gitee.com/uploads/64/2252064_lemonib.png?1540351167'},
      {id:24,title:'2季度多房产跌幅超50%',add_time:new Date(),zaiyao:'已经陆续发布',click:1,imgurl:'https://images.gitee.com/uploads/64/2252064_lemonib.png?1540351167'},
      {id:25,title:'3季度多房产跌幅超50%',add_time:new Date(),zaiyao:'已经陆续发布',click:1,imgurl:'https://images.gitee.com/uploads/64/2252064_lemonib.png?1540351167'},
      {id:29,title:'1季度多房产跌幅超50%',add_time:new Date(),zaiyao:'已经陆续发布',click:1,imgurl:'https://images.gitee.com/uploads/64/2252064_lemonib.png?1540351167'},
      {id:34,title:'2季度多房产跌幅超50%',add_time:new Date(),zaiyao:'已经陆续发布',click:1,imgurl:'https://images.gitee.com/uploads/64/2252064_lemonib.png?1540351167'},
      {id:45,title:'3季度多房产跌幅超50%',add_time:new Date(),zaiyao:'已经陆续发布',click:1,imgurl:'https://images.gitee.com/uploads/64/2252064_lemonib.png?1540351167'},
      ]
    }

    var scriptStr = JSON.stringify(data)
    // res.end 发送给 客户端， 客户端去把 这个 字符串，当作JS代码去解析执行
    res.end(scriptStr)
  }


  //newsinfo 
  var data13 = {
      status:0, 
      message:[
      {id:13,title:'买房还是不买房',click:2,add_time:'2015-04-23',content:"<p>占位</p>"}
      ]
    }
  if (pathname === '/newsinfo/13') {
   

    var scriptStr = JSON.stringify(data13)
    res.end(scriptStr)
  }
  if (pathname === '/newsinfo/14') {
    var data = {
      status:0, 
      message:[
      {id:14,title:'买房还是不买房',click:2,add_time:'2015-04-23',content:'<p>占位</p>'}
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }
  if (pathname === '/newsinfo/15') {
    var data = {
      status:0, 
      message:[
      {id:15,title:'买房还是不买房',click:2,add_time:'2015-04-23',content:'<p>占位</p>'}
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }
  if (pathname === '/newsinfo/16') {
    var data = {
      status:0, 
      message:[
      {id:16,title:'买房还是不买房',click:2,add_time:'2015-04-23',content:'<p>占位</p>'}
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }


///////////////////////
  if (path === '/comments/1?pageIndex=1') {

    var data = {
      status:0, 
      message:[
      {username:'1是我啊',add_time:'2015-04-23',content:'占位1'},
      {username:'2是我啊',add_time:'2015-05-23',content:'占位2'},
      {username:'3是我啊',add_time:'2015-06-23',content:'占位3'},
      {username:'4是我啊',add_time:'2015-07-23',content:'占位4'},
      {username:'5是我啊',add_time:'2015-08-23',content:'占位5'},
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }
  if (path === '/comments/2?pageIndex=1') {

    var data = {
      status:0, 
      message:[
      {username:'1是我啊',add_time:'2015-04-23',content:'占位1'},
      {username:'2是我啊',add_time:'2015-05-23',content:'占位2'},
      {username:'3是我啊',add_time:'2015-06-23',content:'占位3'},
      {username:'4是我啊',add_time:'2015-07-23',content:'占位4'},
      {username:'5是我啊',add_time:'2015-08-23',content:'占位5'},
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }
    if (path === '/comments/13?pageIndex=1') {

    var data = {
      status:0, 
      message:[
      {username:'1是我啊',add_time:'2015-04-23',content:'占位1'},
      {username:'2是我啊',add_time:'2015-05-23',content:'占位2'},
      {username:'3是我啊',add_time:'2015-06-23',content:'占位3'},
      {username:'4是我啊',add_time:'2015-07-23',content:'占位4'},
      {username:'5是我啊',add_time:'2015-08-23',content:'占位5'},
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }
  if (path === '/comments/13?pageIndex=2') {


    var data = {
      status:0, 
      message:[
      {username:'6是我啊',add_time:'2015-04-23',content:'占位1'},
      {username:'7是我啊',add_time:'2015-05-23',content:'占位2'},
      {username:'8是我啊',add_time:'2015-06-23',content:'占位3'},
      {username:'9是我啊',add_time:'2015-07-23',content:'占位4'},
      {username:'10是我啊',add_time:'2015-08-23',content:'占位5'},
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }



  if (path === '/comments/14?pageIndex=1') {


    var data = {
      status:0, 
      message:[
      {username:'1是我啊',add_time:'2015-04-23',content:'占位1'},
      {username:'2是我啊',add_time:'2015-05-23',content:'占位2'},
      {username:'3是我啊',add_time:'2015-06-23',content:'占位3'},
      {username:'4是我啊',add_time:'2015-07-23',content:'占位4'},
      {username:'5是我啊',add_time:'2015-08-23',content:'占位5'},
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }
  if (path === '/comments/15?pageIndex=1') {


    var data = {
      status:0, 
      message:[
      {username:'1是我啊',add_time:'2015-04-23',content:'占位1'},
      {username:'2是我啊',add_time:'2015-05-23',content:'占位2'},
      {username:'3是我啊',add_time:'2015-06-23',content:'占位3'},
      {username:'4是我啊',add_time:'2015-07-23',content:'占位4'},
      {username:'5是我啊',add_time:'2015-08-23',content:'占位5'},
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }

  /////////////////////
  // if (pathname === '/postcomment/13') {
    
  //   var str="";
  // req.on('data',function(data){
  //   str+=data;
  // });
  // req.on('end',function(callback){
  //   var newdata=str;//即得到JSON形式的数据。这种方式处理过POST请求的数据较为方便。
  //   data13.message.unshift(newdata)
  // });
  


  //   var suc = {
  //     status:0, 
  //     message:"评论成功"
  //   }

  //   var scriptStr = JSON.stringify(suc)
  //   res.end(scriptStr)
  // }

  if (pathname === '/imgcategory') {
    var data = {
      status:0, 
      message:[
      {id:1,title:'家具生活'},
      {id:2,title:'摄影设计'},
      {id:3,title:'明星美女'},
      {id:4,title:'游戏原画'},

      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }

  if (pathname === '/imglist/0') {
    var data = {
      status:0, 
       message:[
      {id:1,title:'图片1',img_url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3790431093,4032359656&fm=200&gp=0.jpg',zaiyao:"就这样吧"},
      {id:2,title:'图片2',img_url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3256702015,2512953713&fm=26&gp=0.jpg',zaiyao:"就这样吧"},
      {id:3,title:'图片3',img_url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1358592268,3170923049&fm=200&gp=0.jpg',zaiyao:"就这样吧"},
      {id:4,title:'图片4',img_url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1954831688,863401485&fm=200&gp=0.jpg',zaiyao:"就这样吧"},
      {id:5,title:'图片1',img_url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3790431093,4032359656&fm=200&gp=0.jpg',zaiyao:"就这样吧"},
      {id:6,title:'图片2',img_url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3256702015,2512953713&fm=26&gp=0.jpg',zaiyao:"就这样吧"},
      {id:7,title:'图片3',img_url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1358592268,3170923049&fm=200&gp=0.jpg',zaiyao:"就这样吧"},
      {id:8,title:'图片4',img_url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1954831688,863401485&fm=200&gp=0.jpg',zaiyao:"就这样吧"},

      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }

  if (pathname === '/imglist/1') {
    var data = {
      status:0, 
      message:[
      {id:2,title:'图片2',img_url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3256702015,2512953713&fm=26&gp=0.jpg',zaiyao:"就这样吧"},
      {id:3,title:'图片3',img_url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1358592268,3170923049&fm=200&gp=0.jpg',zaiyao:"就这样吧"},

   

      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }



  if (pathname === '/getimginfo/1') {
    var data = {
      status:0, 
      message:[
      {id:1,title:"清新有活力！",click:4,add_time:new Date(),content:'<p>滴哦啊哇哈哈我很可能会</p>'}
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }

  if (pathname === '/getThumbs/1') {
    var data = {
      status:0, 
      message:[
      {src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=402138213,872829727&fm=26&gp=0.jpg'},
      {src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1663569599,3565035418&fm=26&gp=0.jpg'},
      {src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2697799203,2713814743&fm=200&gp=0.jpg'},
      {src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1414463699,2214571264&fm=200&gp=0.jpg'},
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }


  /////////
  if (path === '/goods?pageindex=1') {


    var data = {
      status:0, 
      message:[
      {id:27,title:'华为手机',add_time:'2015-03-22',zaiyao:'不想写摘要',click:'10',
      img_url:'https://m.360buyimg.com/babel/jfs/t18157/222/1822300674/231514/6c179af8/5ad87390N086a3c91.jpg!q70.jpg',
      sell_price:2199,old_price:2499,stock_quantity:60},
      {id:37,title:'苹果手机',add_time:'2015-03-22',zaiyao:'不想写摘要',click:'10',
      img_url:'https://m.360buyimg.com/babel/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg!q70.jpg',
      sell_price:2199,old_price:2499,stock_quantity:60},
      {id:47,title:'小米手机',add_time:'2015-03-22',zaiyao:'不想写摘要',click:'10',
      img_url:'https://m.360buyimg.com/babel/jfs/t19912/33/927199229/297549/8c269ff0/5b0fca0fN8d5600df.jpg!q70.jpg',
      sell_price:2199,old_price:2499,stock_quantity:60},
      {id:37,title:'苹果手机',add_time:'2015-03-22',zaiyao:'不想写摘要',click:'10',
      img_url:'https://m.360buyimg.com/babel/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg!q70.jpg',
      sell_price:2199,old_price:2499,stock_quantity:60},
      {id:47,title:'小米手机',add_time:'2015-03-22',zaiyao:'不想写摘要',click:'10',
      img_url:'https://m.360buyimg.com/babel/jfs/t19912/33/927199229/297549/8c269ff0/5b0fca0fN8d5600df.jpg!q70.jpg',
      sell_price:2199,old_price:2499,stock_quantity:60},
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }
  if (path === '/goods?pageindex=2') {


    var data = {
      status:0, 
      message:[
      {id:26,title:'华为手机',add_time:'2015-03-22',zaiyao:'不想写摘要',click:'10',
      img_url:'https://m.360buyimg.com/babel/jfs/t18157/222/1822300674/231514/6c179af8/5ad87390N086a3c91.jpg!q70.jpg',
      sell_price:2199,old_price:2499,stock_quantity:60},
      {id:36,title:'苹果手机',add_time:'2015-03-22',zaiyao:'不想写摘要',click:'10',
      img_url:'https://m.360buyimg.com/babel/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg!q70.jpg',
      sell_price:2199,old_price:2499,stock_quantity:60},
      {id:46,title:'小米手机',add_time:'2015-03-22',zaiyao:'不想写摘要',click:'10',
      img_url:'https://m.360buyimg.com/babel/jfs/t19912/33/927199229/297549/8c269ff0/5b0fca0fN8d5600df.jpg!q70.jpg',
      sell_price:2199,old_price:2499,stock_quantity:60}
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }

  if (path === '/goods/goodsinfo/27') {


    var data = {
      status:0, 
      message:[
      {id:101,title:'无线麦克风',add_time:'2012-10-1-1',goods_no:"SD123456",
      stock_quantity:20,market_price:2999,sell_price:2111}
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }

   if (path === '/goods/goodsinfo/37') {


    var data = {
      status:0, 
      message:[
      {id:101,title:'无线麦克风',add_time:'2012-10-1-1',goods_no:"SD123456",
      stock_quantity:20,market_price:2999,sell_price:2111}
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  }

  if (path === '/goods/getdesc/27') {


    var data = {
      status:0, 
      message:[
      {title:'vivo',content:'<img src="//img10.360buyimg.com/imgzone/jfs/t1/3291/18/11869/39915/5bd16abfE36fbf758/15a15f18afd7ae2d.jpg"><img src="http://img10.360buyimg.com/imgzone/jfs/t1/1773/15/14075/161041/5bd9c3c1E129f06a5/637d40e830d95344.jpg" usemap="#Map457"> &nbsp;<map name="Map457"><area shape="rect" coords="81,158,255,408" href="//coupon.jd.com/ilink/couponSendFront/send_index.action?key=d6fece1566d74f17a107a50b1008080e&amp;roleId=15495195&amp;to=https://sale.jd.com/act/fxsPg3pquZ.html" target="_blank"><area shape="rect" coords="281,154,586,273" href="//coupon.jd.com/ilink/couponSendFront/send_index.action?key=2479d08bc2c64bf7868ef051dd627355&amp;roleId=15495199&amp;to=https://sale.jd.com/act/fxsPg3pquZ.html" target="_blank"><area shape="rect" coords="274,291,583,410" href="//coupon.jd.com/ilink/couponSendFront/send_index.action?key=37a84221207745b5861e144f2992a35e&amp;roleId=15495207&amp;to=https://sale.jd.com/act/fxsPg3pquZ.html" target="_blank"><area shape="rect" coords="616,153,917,274" href="//coupon.jd.com/ilink/couponSendFront/send_index.action?key=5a5744dd9b954ebaaeb6f2a7f8000075&amp;roleId=15495202&amp;to=https://sale.jd.com/act/fxsPg3pquZ.html" target="_blank"><area shape="rect" coords="611,295,912,409" href="//coupon.jd.com/ilink/couponSendFront/send_index.action?key=c726118f2d774ef790497ebc0cf2fbd1&amp;roleId=15495211&amp;to=https://sale.jd.com/act/fxsPg3pquZ.html" target="_blank"></map><img src="http://img10.360buyimg.com/imgzone/jfs/t1/5828/35/14362/202132/5bdba55cE9f974fb5/dc78e48910ab9083.jpg" usemap="#Map"><map name="Map"><area shape="rect" coords="21,29,975,270" href="https://item.jd.com/34250730122.html" target="_blank"><area shape="rect" coords="19,288,341,511" href="https://sale.jd.com/act/pBHQhKqn0Fio3.html" target="_blank"><area shape="rect" coords="662,290,964,508" href="https://sale.jd.com/act/li51Ss8Nz6Zq7WPh.html" target="_blank"><area shape="rect" coords="346,289,650,513" href="https://bt.jd.com/v3/activity/openNew_open" target="_blank"></map><img src="//img10.360buyimg.com/imgzone/jfs/t1/3069/8/16035/105146/5be2ced8E0473df64/84566adf12f937a6.jpg"></p>'}
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  
  }

  if (path === '/goods/getcar/27') {


    var data = {
      status:0, 
      message:[
      {cou:1,id:27,title:'小米手机',sell_price:2199,thumb:'https://m.360buyimg.com/babel/jfs/t1/2958/12/12051/135263/5bd194beE631c58c2/2e33fd750b8a8096.jpg!q70.jpg'}
      ]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  
  }



if (path === '/goods/getcar/27,37') {


    var data = {
      status:0, 
      message:[
      {cou:1,id:27,title:'小米手机',sell_price:2111,thumb:'https://m.360buyimg.com/babel/jfs/t1/2958/12/12051/135263/5bd194beE631c58c2/2e33fd750b8a8096.jpg!q70.jpg'},
      {cou:1,id:37,title:'华为手机',sell_price:2111,thumb:'https://m.360buyimg.com/babel/jfs/t1/2958/12/12051/135263/5bd194beE631c58c2/2e33fd750b8a8096.jpg!q70.jpg'}]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  
  }

  if (path === '/goods/getcar/37,27') {


    var data = {
      status:0, 
      message:[
      {cou:1,id:27,title:'小米手机',sell_price:211,thumb:'https://m.360buyimg.com/babel/jfs/t1/2958/12/12051/135263/5bd194beE631c58c2/2e33fd750b8a8096.jpg!q70.jpg'},
      {cou:1,id:37,title:'华为手机',sell_price:2111,thumb:'https://m.360buyimg.com/babel/jfs/t1/2958/12/12051/135263/5bd194beE631c58c2/2e33fd750b8a8096.jpg!q70.jpg'}]
    }
    var scriptStr = JSON.stringify(data)
    res.end(scriptStr)
  
  }

})

// 指定端口号并启动服务器监听'192.168.43.135'
server.listen(4000, function () {
  console.log('server listen at http://127.0.0.1:4000')
})