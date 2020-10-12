<template>
	<div class="home">
		<!--    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<swiper :options="couponSwiperOption">
			<swiper-slide v-for='index in 5' :key='index'>
				<a>
					我是李子建{{index}}
				</a>
			</swiper-slide>
		</swiper>
		<div class="swiper-scrollbar on"></div>
		<div @click="copyFn()">点击复制</div>
		<router-link to="redPacket" style="color:red">开红包点击跳转</router-link>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from "@/components/HelloWorld.vue";
	import {getWelfareData} from "../api/index";
	export default {
		name: "Index",
		// components: {
		//   HelloWorld
		// },
		data() {
			return {
				copy: '我是李子建222',
				couponSwiperOption: { //banner轮播图
					autoplay: {
						delay: 1000, //1秒切换一次
					},
					loop: true,
					speed: 500,
					direction: 'vertical',
					observer:true,//修改swiper自己或子元素时，自动初始化swiper
					observeParents:true//修改swiper的父元素时，自动初始化swiper
				},
				welfare_data:{}
			}
		},
		mounted() {
			this.getIndex_state();
			// this.get_state();
		},
		methods: {
			copyFn() {
				this.$copyText(this.copy).then(function() {
						alert("复制成功!");
					},
					function() {
						alert("复制失败!");
					}
				);
			},
			getIndex_state(){
				getWelfareData().then(res=>{
					this.welfare_data=res.data;
					console.log(this.welfare_data);
				});
			},
			// get_state(){
			// 	const data={content:"111"};
			// 	getData(data).then(res=>{
			// 		console.log(res);
			// 	});
			// }
		}
	};
</script>

<style scoped src="../assets/css/index.css">

</style>
