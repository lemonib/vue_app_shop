import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import CartContainer from './components/tabbar/CartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewList from './components/news/Newlist.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PthotoList from './components/photos/photoList.vue'
import PthotoInfo from './components/photos/photoinfo.vue'
import GoodList from './components/goods/GoodList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
  {path:'/',redirect:'/home'},
  {path:'/home',component:HomeContainer},
  {path:'/member',component:MemberContainer},
  {path:'/cart',component:CartContainer},
  {path:'/search',component:SearchContainer},
   {path:'/home/newlist',component:NewList},
    {path:'/home/newlist/:id',component:NewsInfo},
     {path:'/home/photolist',component:PthotoList},
     {path:'/home/photoinfo/:id',component:PthotoInfo},
     {path:'/home/goodslist',component:GoodList},
     {path:'/home/goodsinfo/:id',component:GoodsInfo,name:'goodslist'},
     {path:'/home/goodsdesc/:id',component:GoodsDesc,name:'goodsdesc'},
     {path:'/home/goodscomment/:id',component:GoodsComment,name:'goodscomment'},
    // account  goodslist
  ],
  linkActiveClass:'mui-active' //覆盖默认路由	高亮的类
})

// 把路由对象暴露出去
export default router