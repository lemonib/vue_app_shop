<template>
	<div class="shopcar-contaniner">
		<!-- 商品列表区 -->
		<div class="goods-list">
		<div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]"  @change="selectedchange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
						<img :src="item.thumb">
						<div class="info">
							<h1>{{item.title}}</h1>
							<p>
								<span class="price">￥{{item.sell_price}}</span>
								<numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
								<a href="#" @click.prevent="remove(item.id,i)">删除</a>
							</p>
						</div>
						

					</div>
				</div>
			</div>
		</div>
			<!-- 结算区域 -->
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
							<p>总计(不含运费)</p>
							<p>已勾选商品<span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>件,总价 ￥<span class="red">{{$store.getters.getGoodsCountAndAmount.amountp}}</span></p>
						</div>
							<mt-button type="danger">结算</mt-button>
						
					</div>
					
				</div>
			</div>
	</div>
</template>

<script>
	import numbox from '../subcomponents/shopcar_numberbox.vue'

	export default{
		data(){
			return{
				goodslist:[]
			}
		},
		created(){
			this.getGoodsList()
		},
		methods:{
			getGoodsList(){
				var idArr = []
				this.$store.state.car.forEach(item=>idArr.push(item.id))
				if(idArr.length <= 0){
					return;
				}
				this.$http.get('http://127.0.0.1:4000/goods/getcar/'+idArr.join(","))
				 .then(result => {
		          if (result.body.status === 0) {
		            this.goodslist = result.body.message;
		          }
		        })
			},
			remove(id,index){
				//删除store和goodlist中的商品信息
				this.goodslist.splice(index,1);
				this.$store.commit('removeFromcar',id)
			},
			selectedchange(id,val){
				//点击开关同步到store
				this.$store.commit('updateGoodsSelected',{id:id,selected:val})
			}
		},
		components:{
			numbox
		}
	}
</script>

<style lang="scss" scoped>
	.shopcar-contaniner{
		background-color: #eee;
		overflow: hidden;
		.goods-list{
			.mui-card-content-inner {
     		 display: flex;
     		 align-items: center;
    		}
			img{
				width: 60px;
			}
			.info{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.price{
					color: red;
				}
			}
			h1{
				font-size: 14px;
			}

		}
		.jiesuan {
		    display: flex;
		    justify-content: space-between;
		    align-items: center;
		    .red {
		      color: red;
		      font-weight: bold;
		      font-size: 16px;
       }
  }	}
</style>