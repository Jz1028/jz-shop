const pathLib = require('path');
const resolve = dir => pathLib.join(__dirname, dir)

// 项目的主要配置文件
module.exports = {
	// webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
	chainWebpack: config => {
		//修改文件引入自定义路径
		config.resolve.alias
			.set('@', resolve('src'))
      .set('_api', resolve('src/api'))
			.set('_c', resolve('src/components'))
			.set('_assets', resolve('src/assets'))
			.set('_lib', resolve('src/lib'))
			.set('_css', resolve('src/assets/css'))
			.set('_img', resolve('src/assets/img'))
	}
}
