import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import router from './router.js'

//
import VueResource from 'vue-resource'
Vue.use(VueResource)


import Vuex from 'vuex'
Vue.use(Vuex)



// 每次刚进入 网站，肯定会 调用 main.js 在刚调用的时候，先从本地存储中，把 购物车的数据读出来，放到 store 中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
	state:{
		car: car,//购物车数据{id:,cout:,price,selected:false'购物车中是否被选中'}
	},
	mutations:{
		addtocar(state,goodsinfo){
			var flag = false	

			state.car.some(item => {
		        if (item.id == goodsinfo.id) {
		          item.count += parseInt(goodsinfo.count)
		          flag = true
		          return true
		        }
		      })
			if(!flag){
				state.car.push(goodsinfo)
			} 
			// 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
      		localStorage.setItem('car', JSON.stringify(state.car))
		},
		updateGoodsInfo(state,goodsinfo){
			state.car.some(item=>{
				if (item.id == goodsinfo.id) {
		          item.count= parseInt(goodsinfo.count)
		          return true
		      }
			})
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		removeFromcar(state,id){
			state.car.some((item,i)=>{
				if(item.id==id){
					state.car.splice(i,1)
					return true
				}
			})
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		updateGoodsSelected(state,info){
			state.car.some(item=>{
				if(item.id==info.id){
					item.selected=info.selected
				}
			})
			localStorage.setItem('car',JSON.stringify(state.car))
		}
		
	},
	getters:{
		getAllcount(state){
			var c = 0;
			state.car.forEach(item=>{
				c+=item.count
			})
			return c
		},
		getGoodsCount(state){
			var o = {}
			state.car.forEach(item=>{
				o[item.id] = item.count
			})
			return o
		},
		getGoodsSelected(state){
			var s = {}
			state.car.forEach(item=>{
				s[item.id] = item.selected;
			})
			return s
		},
		getGoodsCountAndAmount(state){
			var o = {count:0,amountp:0}
			state.car.forEach(item=>{
				if(item.selected){
					o.count+=item.count
					o.amountp+=item.price*item.count
				}
			})
			return o
		}
	}
})

// Vue.http.option.root = 'http://localhost:4000'
Vue.http.options.emulataJSON=true
//
import app from './App.vue'


//mint-UI
// import{Header,Swipe, SwipeItem,Button,Lazyload}from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


//MUI
import './lib/mui/css/mui.min.css'
import './lib//mui/css/icons-extra.css'


// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//导入时间插件
import monent from 'moment'




Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
	return monent(dataStr).format(pattern)
})


var vm = new Vue({
	el:'#app',
	render:c=>c(app),//替换#app为APP.vue的组件
	router,//挂载如有对象
	store,
})