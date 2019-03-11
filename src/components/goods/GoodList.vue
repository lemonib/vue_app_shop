<template>
	<div class="goods-list">
		<!-- <router-link class="goods-item" v-for="item in goodslist" :to="'/home/goodsinfo/'+item.id" tag="div">
			<img :src="item.img_url" alt="">
			<h1 class="title">{{item.titile}}</h1>
			<div class="info">			
			<p class="price">
				<span class="now">￥{{item.sell_price}}</span>
				<span class="old">￥{{item.old_price}}</span>
			</p>
			<p class="sell">
				<span>热卖中</span>
				<span>{{item.stock_quantity}}</span>
			</p>
		</div>
		</router-link> -->
		
		<!-- 网页中有两种跳转方式：1.使用标签a -->
		<!-- 2.编程式导航window.location.href -->
		<div class="goods-item" v-for="item in goodslist" @click="goodsinfo(item.id)">
			<img :src="item.img_url" alt="">
			<h1 class="title">{{item.titile}}</h1>
			<div class="info">			
			<p class="price">
				<span class="now">￥{{item.sell_price}}</span>
				<span class="old">￥{{item.old_price}}</span>
			</p>
			<p class="sell">
				<span>热卖中</span>
				<span>{{item.stock_quantity}}</span>
			</p>
		</div>
		</div>

		<mt-button type="danger" size="large" @click="getmore">加载更多</mt-button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
		return{
			pageindex:1,
			goodslist:[]
		}
			
		},
		created(){
			this.getGoodelist()
		},
		methods:{
			getGoodelist(){
				this.$http.get('http://127.0.0.1:4000/goods?pageindex='+this.pageindex).then(result=>{
					if(result.body.status===0){
						this.goodslist = this.goodslist.concat(result.body.message)
					}
				})
			},
			getmore(){
				this.pageindex++
				this.getGoodelist()
			},
			// 使用js形式进行导航
			goodsinfo(id){
				//1.
				//this.$router.push('/home/goodsinfo/'+id)
				//2.
				this.$router.push({path:'/home/goodsinfo/'+id})
				// this.$router.push({name:'goodslist',parms:{id}})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		padding:6px;
		justify-content: space-between;
		.goods-item{
			width: 49%;
			border: 1px solid #ccc;
   			box-shadow: 0 0 8px #ccc;
    		margin: 4px 0;
    		padding:2px;
    		display: flex;
    		flex-direction: column;
    		justify-content: space-between;
    		h1{
    			font-size: 18px;
    		}
			img{
				width: 100%;
			}
			.info{
		      background-color: #eee;
		      p{
		        margin: 0;
		        padding: 5px;
		      }
		      .price{
		        .now{
		          color: red;
		          font-weight: bold;
		          font-size: 16px;
		        }
		        .old{
		          text-decoration: line-through;
		          font-size: 12px;
		          margin-left: 10px;
		        }
		      }
		      .sell{
		        display: flex;
		        justify-content: space-between;
		        font-size: 13px;
		      }
		    }
		}
	}
</style>