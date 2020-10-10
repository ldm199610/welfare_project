import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
	 meta: {
			title: '首页入口'
		  }
  },
  // {
  //   path: "/",
  //   name: "Index",
  //   //路由级代码拆分
  //   //这将为此路由生成一个单独的块（about.[hash].js）
  //   //当访问路由时延迟加载。
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/index.vue")
  // }
];

const router = new VueRouter({
mode:'history',
  routes
});

export default router;
