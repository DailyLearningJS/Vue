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
import BaseCheckbox from '@/components/BaseCheckbox'
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
Vue.component('base-checkbox', BaseCheckbox)
Vue.component('sync-component', {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    changeString () {
      this.$emit('update:title', this.reverseMessage)
    }
  },
  computed: {
    reverseMessage () {
      return this.title.split('').reverse().join('')
    }
  },
  template: `
  <div>
    <h3 style="background:yellow;color:red;font-size:20px;">{{title}}</h3><br/>
    <el-button @click="changeString">点我改变字符串</el-button>
  </div>
  `
})
Vue.component('slot-component', {
  template: `
    <div>
      <slot><el-tag type="danger">普通插槽没有内容哦</el-tag></slot><br/>
      <slot name="content">具名插槽没有内容哦</slot><br/>
      <slot name="slotProp" :user="user"> slot prop插槽没有内容哦 </slot>
    </div>
  `,
  data () {
    return {
      user: {
        name: '糖·少',
        sex: 'boy',
        age: 0
      }
    }
  }
})
Vue.component('slot-other-component', {
  template: `
    <div>
      <slot :user="user"><el-tag type="danger">普通插槽没有内容哦</el-tag></slot>
    </div>
  `,
  data () {
    return {
      user: {
        name: '糖·少',
        sex: 'boy',
        age: 0
      }
    }
  }
})
Vue.component('todo-slot', {
  data () {
    return {
      filterTodos: [
        {id: 1, text: '健身', isComplete: false},
        {id: 2, text: '睡懒觉', isComplete: true},
      ]
    }
  },
  template: `
    <ul>
      <li v-for="todo in filterTodos" :key="todo.id">
        <slot :todos="todo">
          这条信息没有内容哦  （应该出现{{todo.text}}才对哦）
        </slot>
      </li>
    </ul>
  `
})
const requireComponent = require.context(
  './components/tempComponents',
  false,
  /_base-[\w-]+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
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
