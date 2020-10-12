module.exports = {
	lintOnSave:false,//禁止严格模式
  // 配置跨域代理
    devServer: {
        // Paths
        host: 'localhost',
        port: '8080',
        https: false,
        open: true,
        proxy: {
          '/': { // 匹配所有以 '/api'开头的请求路径
            target: 'http://activity.jy131.cn/', // 代理目标的基础路径
            changeOrigin: true, // 支持跨域
            pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
              '^/': ''
            }
          },
		  // '/api': { // 匹配所有以 '/api'开头的请求路径
		  //   target: 'https://setting.qtonghua.com', // 代理目标的基础路径
		  //   changeOrigin: true, // 支持跨域
		  //   pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
		  //     '^/api': ''
		  //   }
		  // }
        },
    },
	// //修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
	// chainWebpack: config =>{
	//   config.plugin('html').tap(args => {
	// 	  args[0].title = "宝贝商城";
	// 	  return args;
	// 	})
	// }
}