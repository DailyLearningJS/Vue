import Vue from 'vue'
import App from './App.vue'

import GlobalComponent from '@/components/GlobalComponent'
import TodoItem from '@/components/TodoItem'
Vue.config.productionTip = false

Vue.component('GlobalComponent', GlobalComponent)
Vue.component('TodoItem', TodoItem)

new Vue({
  render: h => h(App),
}).$mount('#app')
