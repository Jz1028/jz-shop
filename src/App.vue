<template>
	<div id="app">
		<router-view></router-view>
		<main-tab-bar/>
	</div>
</template>

<script>
	import MainTabBar from '_c/mainTabbar/MainTabBar'

	export default {
		name: 'App',
		components: {
			MainTabBar
		},
		mounted() {
			console.log(process.env.NODE_ENV);
		}
	}
</script>

<style>
	@import "~_css/base.css";
</style>
