import Vue from 'vue'
import store from './store'
import axios from './requests'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
