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
import commonMixins from '@/assets/common.js'
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
  created () {
    console.log(this.$root, this.$parent)
    this.$on('click', () => {
      console.log('您处罚了点击事件')
    })
    this.$off('click', () => {
      console.log('监听了移除点击事件')
    })
    this.$once('click', () => {
      console.log('一次性监听点击事件')
    })
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
Vue.component('inject-component', {
  inject: ['rootStr'],
  methods: {
    doSomething () {
      console.log('已经触发点击事件', this.rootStr.split('').reverse().join(''))
      this.rootStr = this.rootStr.split('').reverse().join('')
    }
  },
  template: `
  <div>
    <el-tag type="danger">避免直接更改inject获取到的值  直接更改控制台会报error 且不会直接对根实例造成影响！！！</el-tag><br>
    {{rootStr}} <el-button @click="doSomething">点我尝试更改rootStr内容</el-button>
  </div>
  `
})

Vue.component('digui-component', {
  props: ['children'],
  template: `
  <span  style="margin-left:10px;">
    <span v-if="children.children">{{children.text}}--></span>
    <span v-else style="color:red;">{{children.text}}</span>
    <digui-component v-if="children.children" :children="children.children"></digui-component>
  </span>
  `
})

Vue.component('hello-me', {
  template: '#hello-world'
})


Vue.component('v-once-component', {
  data () {
    return {
      rootStr: "my name is 糖少, i'm a boy"
    }
  },
  methods: {
    doSomething () {
      console.log('已经触发点击事件', this.rootStr.split('').reverse().join(''))
      this.rootStr = this.rootStr.split('').reverse().join('')
    }
  },
  template: `
  <div v-once>
    <el-tag type="success">你会发现不能操作更改哦</el-tag><br>
    {{rootStr}} <el-button @click="doSomething">点我尝试更改rootStr内容</el-button>
  </div>
  `
})

Vue.component('mixin-component', {
  created () {
    console.log('mixin-component created周期函数调用')
  },
  data () {
    return {
      num: 0
    }
  },
  mixins: [commonMixins],
  methods: {
    addData () {
      this.num ++ 
    }
  },
  template: `<div>
  {{num}}<br>
  <el-button size="mini" type="success" @click="addData">点我调用addData</el-button>
  <el-button size="mini" type="danger" @click="tempData">点我调用tempData</el-button>
  </div>`
})

Vue.directive('focus', {
  inserted: (el, binding, vnode, oldVnode) => {
    console.log("全局指令inserted调用", el, binding, vnode, oldVnode)
  },
  update: (el) => {
    console.log("全局指令update调用", el)
  }
})

Vue.component('anchored-heading', {
  render: function(createElement){
    return createElement(
      'h' + this.level,
      this.$slots.default
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

Vue.filter('toBeUpper', function(value) {
  if (!value) return ''
  return value.toUpperCase()
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
