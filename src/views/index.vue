<template>
	<div id="index">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<!-- 
		<ul>
			<li v-for='(item,key) in welfare_data.make_money_rank' :key='key'>
				{{item.nick_name}}
			</li>
		</ul>
		<div @click="copyFn()">点击复制</div> -->
		<div class="header">
			<swiper :options="couponSwiperOption" v-if='welfare_data.make_money_des!=undefined'>
				<swiper-slide v-for='(item,key) in welfare_data.make_money_des' :key='key' class='flex align-Center'>
					<img src="../assets/img/notice.png"/>
					<a class="flex_1">
						{{item.label}}
					</a>
				</swiper-slide>
			</swiper>
			<div class="my_gold flex align-Center flex-column">
				<p class="gold text_over">999999</p>
				<div class="flex align-Center">
					元<img src="../assets/img/arrow.png"/>
				</div>
			</div>
		</div>
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
