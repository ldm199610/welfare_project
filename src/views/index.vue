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
	// import {getData} from "../api/index";
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
				}
			}
		},
		mounted() {
			// this.getIndex_state();
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
				const data={_userid:"16990114482261",_token:"cfe43c17f4decdac8cbd284ecf89099c",content:"18"};
				getData(data).then(res=>{
					console.log(res);
				});
			}
		}
	};
</script>
<style scoped lang="scss">
	.swiper-container {
		height: 0.6rem;
	}
</style>
