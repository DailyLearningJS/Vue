import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lodash from 'lodash'

Vue.config.productionTip = false
Vue.prototype._ = lodash

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
