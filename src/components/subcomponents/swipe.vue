<template>
	<div>
		<!-- 父组件向子组件传值 -->
		<mt-swipe :auto="4000">
  		<mt-swipe-item v-for="item in lunbotuList" :key="item.img">
  			<img :src="item.img" alt="" :class="{'full':isfull}">
  			<!--  -->
  		</mt-swipe-item>
  		</mt-swipe>
	</div>
</template>

<script>
	export default{
		props:["lunbotuList","isfull"]
	}
</script>

<style scoped>
	.mint-swipe{
		text-align: center;
		height: 200px;
	}
/*	.mint-swipe-item:nth-child(1){
		background-color: red;
	}
	.mint-swipe-item:nth-child(2){
		background-color: yellow;
	}
	.mint-swipe-item:nth-child(3){
		background-color: blue;
	}*/
	img{
		/*width:100%;*/
		height: 100%
	}
	.full{
		width: 100%;
	}
</style>