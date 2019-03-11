<template>
	<div>
		
	<!-- 	<mt-swipe :auto="4000">
  		<mt-swipe-item>1</mt-swipe-item>
  		<mt-swipe-item>2</mt-swipe-item>
  		<mt-swipe-item>3</mt-swipe-item> -->

<!--   		<mt-swipe :auto="4000">
  		<mt-swipe-item v-for="item in lunbotuList" :key="item.img">
  			<img :src="item.img" alt="">
  		</mt-swipe-item>
  		</mt-swipe> -->
  		<swipe :lunbotuList="lunbotuList" :isfull="true"></swipe>
		<!-- 九宫格改造 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		                   <img src='../../images/menu1.png'>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src='../../images/menu2.png'>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                   <img src='../../images/menu3.png'>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src='../../images/menu4.png'>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src='../../images/menu5.png'>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src='../../images/menu6.png'>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 

	</div>
</template>


<script>
	import {Toast} from 'mint-UI'
	import swipe from '../../components/subcomponents/swipe.vue'
	export default{
		data(){
			return {
				lunbotuList:[]
			};
		},
		created(){
			this.getlunbotu();
		},
		methods:{
			getlunbotu(){
				this.$http.get('http://127.0.0.1:4000/getlist').then(result=>{

					if(result.body.status == 0){
						this.lunbotuList = result.body.message;

					}else{
						Toast('加载轮播图失败')
					}
				});
			}
			
		},
		components:{
			swipe
		}
	}	
</script>


<style scoped>
	img{
		width:100%;
		height: 100%
	}
	.mui-grid-view.mui-grid-9{
		background-color: #fff;
		
	}
	.mui-grid-view.mui-grid-9 img{
		width: 60px;
		height: 60px;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border:0;
	}
</style>