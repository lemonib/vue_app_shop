<template>
	<div>
		<!-- 标题 -->
		<div class="imginfo-header">
		<h3 class="title">{{photoinfo.title}}</h3>
		<p class="subtitle">
			<span>发表时间{{photoinfo.add_time}}</span>
			<span>点击次数{{photoinfo.click}}</span>
		</p>
		<hr>
		</div>
		

		<!-- 缩略图 -->
		<div class="thumbs"><img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src"></div>
		
		<!-- 内容 -->
		<div class="content" v-html="photoinfo.content"></div>
		<!-- 评论 -->
		<cmt-box :id="id"></cmt-box>

	</div>
</template>

<script>
	import comment from './../subcomponents/comment.vue'

	export default{
		data(){
			return {
				photoinfo:{},
				id:this.$route.params.id,
				list:[]//缩略图数组
			}
		},
		created(){
			this.getPhotoinfo(),
			this.getThumbs()
		},
		methods:{
			getPhotoinfo(){
				this.$http.get('http://127.0.0.1:4000/getimginfo/'+this.id).then(result=>{
					if(result.body.status===0){
						this.photoinfo = result.body.message[0]
					}
				})
			},
			getThumbs(){
				this.$http.get('http://127.0.0.1:4000/getThumbs/'+this.id).then(result=>{
					if(result.body.status===0){
						result.body.message.forEach(item=>{
							item.w= 600;
							item.h= 400;
						})
					this.list=result.body.message	
				}
				})
			}
		},
		components:{
			'cmt-box':comment
		}

	}
</script>

<style lang="scss" scoped>
	.imginfo-header{
		padding:3px;
		h3{
			color:#26A2FF;
			font-size: 15px;
			text-align: center;
			margin:15px 0;
		}
		.subtitle{
			display: flex;
			justify-content: space-between;
		}
		.content{
			font-size: 30px;
		}
	}

	.thumbs{
		img{
			margin: 10px;
			box-shadow: 0 0 8px #999
		}
	}

</style>