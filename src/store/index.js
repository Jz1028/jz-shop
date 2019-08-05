import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		msg: 'this is hello word'
	},
	mutations:{
		change(state, newVal) {
			state.msg = newVal
		}
	},
	actions: {
		change({commit}, newVal) {
			commit('change', newVal)
		}
	},
	getters: {
		stateMsg: state => state.msg
	},
	modules: {}
})

export default store
