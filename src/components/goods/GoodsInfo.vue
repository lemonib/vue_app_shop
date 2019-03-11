<template>
	<div class="goodsinfo-container">

		<transition 
		@before-enter="beforeEnter"
		@enter="Enter"
		@after-enter="afterEnter"
		><div class="ball" v-show="ballFlag" ref="ball"></div></transition>
	
		<!-- 轮播图 -->
		<div class="mui-card">
			<swipe :lunbotuList="lunbotuList" :isfull="false"></swipe> 		
		</div>

		<!-- 购买区域 -->
		<div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
							市场价:<del>${{goodsinfo.market_price}}</del>&nbsp;
							销售价：<span class="now_price">￥{{goodsinfo.sell_price}}</span>
						</p>
						<p>购买数量  <numberbox @getcount="getSelectedCount"  :max="goodsinfo.stock_quantity"></numberbox></p>
						<!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
            <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
						<p>
							<mt-button type="primary" size="small">立即购买</mt-button>
							<mt-button type="danger" size="small" @click="addtocar">加入购物车</mt-button>
						</p>
					</div>
				</div>
			</div>
		<!-- 商品参数区 -->
		<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品参数：{{goodsinfo.goods_no}}</p>
						<p>库存情况：{{goodsinfo.stock_quantity}}</p>
						<p>上线时间：{{goodsinfo.add_time|dateFormat}}</p>
						
					</div>
				</div>
				<div class="mui-card-footer">
						<mt-button type="primary" size="large" plain @click="goDsc(id)">图文介绍</mt-button>
						<mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button></div>
			</div>
	</div>
</template>

<script>
	import swipe from '../subcomponents/swipe.vue'
	import numberbox from '../subcomponents/goodsinfo_numberbox.vue'

	export default {
		data(){
			return{
				id:this.$route.params.id,
				lunbotuList:[],
				goodsinfo:{},
				ballFlag:false,
				selectedCount:1,//用户购买数量
			}
		},
		created(){
			this.getlunbotu()
			this.getgoodsinfo()
		},
		methods:{
			getlunbotu(){
				this.$http.get('http://127.0.0.1:4000/getlist/'+this.id).then(result=>{
					if(result.body.status === 0){
						this.lunbotuList = result.body.message;
					}
				})
			},
			getgoodsinfo(){
				this.$http.get('http://127.0.0.1:4000/goods/goodsinfo/'+this.id).then(result=>{
					if(result.body.status === 0){
						
						this.goodsinfo = result.body.message[0];
					}
				})
			},
			goDsc(id){
				this.$router.push({name:"goodsdesc",params:{id}})
			},
			goComment(id){
				this.$router.push({path:'/home/goodscomment/'+id})
			},
			addtocar(){
				this.ballFlag = !this.ballFlag;
				var goodsinfo = {
					id:this.id,
					count:this.selectedCount,
					price:this.goodsinfo.sell_price,
					selected:true}

					this.$store.commit('addtocar',goodsinfo)
				},//拼接出要保存到store里的商品对象
			beforeEnter(el){
				el.style.transform="translate(0,0)"
			},
			Enter(el,done){
				el.offsetWidth;
				// 小球动画优化思路：
			      // 1. 先分析导致 动画 不准确的 本质原因： 我们把 小球 最终 位移到的 位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
			      // 2. 只要分辨率和 测试的时候不一样，或者 滚动条有一定的滚动距离之后， 问题就出现了；
			      // 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
			      // 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
			      // 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()
			    const ballposition = this.$refs.ball.getBoundingClientRect();
			    const badgeposition = document.getElementById('badge').getBoundingClientRect()

			    const xDist = badgeposition.left-ballposition.left
			    const yDist = badgeposition.top -ballposition.top


				el.style.transform=`translate(${xDist}px,${yDist}px)`
				el.style.transition="all 1s cubic-bezier(.4,-0.3,1,.68)"
				done()
			},
			afterEnter(el){
				this.ballFlag= !this.ballFlag
			},
			getSelectedCount(count){
				this.selectedCount = count;
			}

		},
		components:{
			swipe,
			numberbox
		}
	}
</script>

<style lang="scss" scoped>
	.goodsinfo-container{
		background-color: #eee;
		overflow: hidden;
		.now_price{
			color:red;
			font-size: 15px;
			font-weight: bold;
		}
		.mui-card-footer{
			display: block;
			button{
				margin:10px 0;
			}
		}
		.ball{
			width: 15px;
			height: 15px;
			border-radius:50%;
			background-color: red;
			position: absolute;
			z-index:99;
			top:390px;
			left: 146px;
		}
	}


</style>