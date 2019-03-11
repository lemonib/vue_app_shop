<template>
	<div class="newsinfo-container">
		<h3 class="title">{{newsinfo.title}}</h3>
		<p class="subtitle">
			<span>发表时间{{newsinfo.add_time|dateFormat}}</span>
			<span>点击次数{{newsinfo.click}}</span>
		</p>
		<hr>

		<div class="content" v-html="newsinfo.content"></div>

		<!-- 评论区 -->
		<comment-box :id="this.id"></comment-box>
	</div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
import {Toast} from 'mint-ui'
	export default{
		data(){
			return {
				id: this.$route.params.id,
				newsinfo:{}
			}
		},
		created(){
			this.getNewsInfo()
		},
		methods:{
			getNewsInfo(){
				this.$http.get('http://127.0.0.1:4000/newsinfo/'+this.id).then(result=>{
					if(result.body.status === 0){
						this.newsinfo = result.body.message[0]
					}else{
						Toast("获取新闻失败！")
					}
				})
			}
		},
		components:{
			"comment-box":comment
		}
	}
</script>

<style lang="scss" >
	.newsinfo-container{
		padding: 0 4px;
		.title{
			font-size: 16px;
			text-align: center;
			margin:15px 0;
			color: red;
		}
		.subtitle{
			font-style: 13px;
			color:#226aff;
			display: flex;
			justify-content: space-between;
		}
		.content{
			img{
				width: 100%;
			}
		}
	}
</style>