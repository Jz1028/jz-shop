<template>
	<div>
		<h2>首页</h2>
		<p>{{stateMsg}}</p>
		<button @click="handleChange">更改</button>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex'

	export default {
		name: "Home",
		computed: {
			...mapGetters(['stateMsg'])
		},
		methods: {
			...mapActions(['change']),
			handleChange() {
				this.change('change')
			}
		},
	}
</script>

<style scoped>

</style>
