<template>
	<div class="cmt-container">
		<h1>
			评论
		</h1>
		<hr>
		<textarea  placeholder="最多输入120字" maxlength="120"  v-model="msg"></textarea>
		<mt-button type="primary" size="large" @click="post">发表评论</mt-button>

		<div class="cmt-list">
			<div class="cmt-item" v-for="(item,i) in comments" :key="item.username">
				<div class="cmt-title">
					{{i+1}}&nbsp;&nbsp;用户：{{item.username}}&nbsp;&nbsp;发表时间：{{item.add_time|dateFormat}}
				</div>
				<div class="cmt-body">
					{{item.content === 'undefined' ? '空内容':item.content}}
				</div>
			</div>
		</div>

		<mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
	</div>
</template>

<script>
import {Toast} from 'mint-ui'
	export default{
		data(){
			return {
				pageIndex:1,
				comments:[],
				msg: "",
			}
		},
		created(){
			this.getComments()
		},
		methods:{
			getComments(){
				this.$http.get("http://127.0.0.1:4000/comments/"+this.id+"?pageIndex="+this.pageIndex).then(result=>{
					if(result.body.status===0){
						// this.comments = result.body.message
						//每当获取新数据时，拼接老数据
						this.comments = this.comments.concat(result.body.message)
					}else{
						Toast('获取失败')
					}
				})
			},
			getmore(){
				this.pageIndex++
				this.getComments()
			},
			// post(){
			// 	if(this.msg.trim().length===0){
			// 		return Toast('内容为空')
			// 	}
			// 	this.$http
			// 	.post('http://127.0.0.1:4000/postcomment/'+this.$route.params.id,{content:this.msg.trim()})
			// 	.then(function(result){
			// 		if(result.body.status===0){
			// 			var cmt = {username:'匿名用户',add_time:Date.now(),content:this.msg.trim()}
			// 				}
			// 			this.comments.unshift(cmt)
			// 			this.msg=''
			// 	})
			// },
			post(){
				if (this.msg.trim().length === 0) {
       				 return Toast("评论内容不能为空！");
      				}
				var cmt = {username:'匿名用户',add_time:Date.now(),content:this.msg.trim()}
				this.comments.unshift(cmt)
				this.msg=''
			},
		},
		props:["id"]
	}

</script>

<style lang="scss" scoped>
	.cmt-container{
		h1{font-size: 18px;}
		textarea{
			font-size: 14px;
			height: 85px;
			margin: 0;
		}
		.cmt-list{
			margin: 5px 0;
			.cmt-item{
				font-size: 13px;
				.cmt-title{
					line-height: 30px;
					background-color:#ccc;

				}
				.cmt-body{
					line-height: 35px;
					text-indent: 2em;
				}
			}
		}
	}
</style>