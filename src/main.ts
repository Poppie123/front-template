import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Select } from 'element-ui';
import service from "./utils/https";

Vue.prototype.$https = service; // 其他页面在使用 axios 的时候直接  this.$http 就可以了

Vue.use(Button)
Vue.use(Select)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
