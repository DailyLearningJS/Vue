import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import GlobalComponent from '@/components/GlobalComponent'
import TodoItem from '@/components/TodoItem'
import PropRules from '@/components/PropRules'
import BootStrap from '@/components/BootstrapDateInput'
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.component('GlobalComponent', GlobalComponent)
Vue.component('TodoItem', TodoItem)
Vue.component('blog-post', {
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
Vue.component('prop-rules', PropRules)
Vue.component('bootstrap-date', BootStrap)
const requireComponent = require.context(
  './components/tempComponents',
  false,
  /_base-[\w-]+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  console.log(componentConfig)
  const componentName = upperFirst(
    camelCase(
      fileName.replace(/^\.\/_/, '').replace(/\.\w+$/, '')
    )
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  render: h => h(App),
}).$mount('#app')

// new Vue().$mount('#app-test')
