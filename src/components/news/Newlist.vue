<template>
	<div>
		
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newlist/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.imgurl">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
								<span>{{item.add_time|dateFormat}}</span>
								<span>{{item.click}}</span>
							</p>
						</div>
					</router-link>
				</li>
			</ul>

	</div>
</template>

<script>
import {Toast} from 'Mint-UI'
	export default{
		data(){
			return {
				newslist:[]
			}
		},
		created(){
			this.getNewlist()
		},
		methods:{
			getNewlist(){
				this.$http.get('http://127.0.0.1:4000/newslist').then(result=>{
					if(result.body.status === 0){
						this.newslist = result.body.message
					}else{
						Toast('获取新闻列表失败')
					}
				})
			}
		},


	}

</script>

<style lang="scss" scoped>
	.mui-table-view{
		h1{font-size: 14px;}
		.mui-ellipsis{
			font-size:12px;
			color:#226aff;
			display: flex;
			justify-content: space-between;
		}
	}
</style>