<template>
	<div>
		<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in categroy" :key="item.id" @tap="getAllImg(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>
			</div>

			<!-- 图片区 -->
				<ul class="photolist">
		  			<router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
		    			<img v-lazy="item.img_url">
		    			<div class="info">
		    				<h1 class="info-title">{{item.title}}</h1>
		    				<div class="info-body">{{item.zaiyao}}</div>
		    			</div>
	  				</router-link>
				</ul>
	</div>
</template>

<script>
	import mui from '../../lib/mui/js/mui.min.js'
	

	export default{
		data(){
			return {
				categroy:[],
				list:[] //图片列表
			}
		},
		created(){
			this.getAllCategroy()
			this.getAllImg(0)
		},
		mounted() {
		    mui(".mui-scroll-wrapper").scroll({
		      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		    });
		  },
		methods:{
			getAllCategroy(){
				this.$http.get('http://127.0.0.1:4000/imgcategory')
				.then(result=>{
					if(result.body.status===0){
						result.body.message.unshift({title:"全部",id:0})
						this.categroy = result.body.message
					}
				})
			},
			getAllImg(cateid){
				this.$http.get('http://127.0.0.1:4000/imglist/'+cateid)
				.then(result=>{
					if(result.body.status===0){
						this.list = result.body.message
					}
				})
			}
		},
	}
</script>

<style  lang="scss" scoped>
	* {
  touch-action: pan-y;
}
.photolist{
	list-style: none;
	margin:0;
	padding: 10px;
	padding-bottom:0;
	li{
		background-color: #ccc;
		text-align: center;
		margin-bottom:10px;
		box-shadow: 0 0 9px solid #fff;
		position:relative;
		img{
			width: 100%;
			vertical-align: middle;
		}
		image[lazy=loading] {
		  width: 40px;
		  height: 300px;
		  margin: auto;
		}
		
		.info{
			color:white;
			text-align: left;
			position: absolute;
			bottom:0;
			width: 100%;
			background-color: rgba(0,0,0,0.4);
			max-height: 80px;
			.info-title{
				font-size: 14px;
			}
			.info-body{
				font-size: 12px;
			}
		}

	}
}

</style>