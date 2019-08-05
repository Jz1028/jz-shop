import axios from 'axios'
import {
	baseURL
} from '@/config'
class HttpRequest {
	constructor(baseUrl = baseURL) {
		this.baseUrl = baseUrl
		this.queue = {}
	}
	request(options) {
		const instance = axios.create()
		options = Object.assign(this.getInsideConfig(), options)
		this.interceptors(instance, options.url)
		return instance(options)
	}
	getInsideConfig() {
		const config = {
			baseUrl: this.baseUrl,
			headers: {}
		}
		return config
	}
	interceptors(instance, url) {
		instance.interceptors.request.use(config => {
			//添加全局的loading...
			//Spin.show()
			if (!Object.keys(this.queue).length) {}
			config.headers['Authorization']=localStorage.getItem('token')
			this.queue[url] = true
			return config
		}, error => {
			return Promise.reject(error)
		})
		instance.interceptors.response.use(res => {
			//添加全局的loading...
			//Spin.show()
			delete this.queue[url]
			const {
				data
			} = res
			return data
		}, error => {
			delete this.queue[url]
			return Promise.reject(error)
		})
	}

}
export default HttpRequest
e
e
