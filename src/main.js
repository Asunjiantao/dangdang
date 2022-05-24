import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.prototype.bus = new Vue()
Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// 配置跨域问题
axios.defaults.baseURL = '/api'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')