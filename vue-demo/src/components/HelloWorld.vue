<template>
  <div class="hello">
    <div class="fix">
      <ul>
        <li>
          <a href="#header">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547988687702&di=f40e13b63185580154c73b2eb4c011bc&imgtype=0&src=http%3A%2F%2Fwww.51yuansu.com%2Fpic2%2Fcover%2F00%2F32%2F40%2F5810ee42c3e43_610.jpg" alt="error">
          </a>
          </li>
        <li>
          <a href="#footer">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547988687702&di=f40e13b63185580154c73b2eb4c011bc&imgtype=0&src=http%3A%2F%2Fwww.51yuansu.com%2Fpic2%2Fcover%2F00%2F32%2F40%2F5810ee42c3e43_610.jpg" alt="error">
          </a>
        </li>
      </ul>
    </div>
    <h3 id="header">全局components注册 使用</h3>
    <h3>{{ msg }}</h3>
    <global-component></global-component>
    <hr>
    <h3>v-once 使用</h3>
    <span>normal：{{num}}</span><span style="margin:30px;" v-once>v-once：{{num}}</span> <input type="button" @click="addNum" value="点我"/>
    <hr>
    <h3>v-html 使用</h3>
    代码为:{{htmlData}}&nbsp;&nbsp;&nbsp;&nbsp;效果为：<span v-html="htmlData"></span>
    <hr>
    <h3>计算值属性的 setter</h3>
    {{`${firstName}·${secondName}`}}  <input type="button" @click="fullName='糖 少'" value="点我赋值"/>
    <hr>
    <h3>dom复用(input内容不变)</h3>
    <template v-if="loginType === true">
      <label>Username</label>
      <input placeholder="Enter your username">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address">
    </template>
    <input type="button" value="点我切换" @click="loginType = !loginType">
    <hr>
    <h3>dom不复用(key值 input内容改变每次切换都会重新渲染)</h3>
    <template v-if="loginType === true">
      <label>Username</label>
      <input placeholder="Enter your username" key="username">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email">
    </template>
    <input type="button" value="点我切换" @click="loginType = !loginType">

    <hr>
    <h3>列表循环遍历(for & of)</h3>
    <ul>
      <li v-for="(item, index) in lists" :key="index">
        {{item.msg}}
      </li>
    </ul>
    <ol>
      <li v-for="(item, index) of lists" :key="index">
        {{item.msg}}
      </li>
    </ol>

    <hr>
    <h3>对象属性遍历</h3>
    <ul>
      <li v-for="(value, key, index) in obj" :key="key">
        {{`${index}、   ${key}: ${value}`}}
      </li>
    </ul>


    <hr>
    <h3>is 使用(组件使用防止浏览器解析出现问题)</h3>
    <div>
      <form @submit.prevent="addNewToDo">
        <label for="new-todo">Add a new todo</label>
        <input v-model="newTodoText" type="text" placeholder="填写相关内容">
        <button>Add</button>
      </form>
      <ul>
        <li
          is="todo-item"
          v-for="(item, index) in todos"
          :key="index"
          :title="item.title"
          :id="index+1"
          @remove="todos.splice(index, 1)"></li>
      </ul>
    </div>
    <hr>
    <h3>内联处理器传递特殊变量</h3>
    <button @click="warning('this is a tip :D', $event)">点我看看</button>

    <hr>
    <h3>事件修饰符</h3>
    <!-- stop 阻止事件冒泡 -->
    <div @click="parentPop">
      <button @click.stop="childPop" > stop 点我试试看 </button>
    </div>
    <!-- prevent 阻止表单提交刷新页面，阻止默认事件 -->
    <form @submit.prevent="warning">
      <button>prevent 点我上传表单</button>
    </form>
     <form @submit.prevent>
      <button>prevent 点我上传表单</button>
    </form>

    <!-- capture 优先调用本元素点击事件(捕获模式) -->
    <div @click.capture="parentPop" style="padding:20px;background:gray;">
      <button @click="childPop" > capture 点我试试看 </button>
    </div>


    <!-- self 只有当 event.tartget 是dom本身时才会触发 -->
    <div @click.self="parentPop" style="padding:20px;background:gray;">
      <button @click="childPop" > self 点我试试看 </button>
    </div>
    <!-- once 事件只会触发一次 -->
    <div>
      <button @click.once="childPop">点我只会触发一次</button>
    </div>
    
    <div style="height:60px;background:gray;overflow:hidden;" @scroll.passive="onScroll">
      <div style="height:200px;margin:20px;background:orange;"></div>
    </div>

    <hr>
    <h3>系统修饰符  ?????????????mac本如何实现监听ctrl+click事件</h3>
    <!-- Alt + C -->
    <input @keyup.alt.67="alertMessage('alt + c')"> &nbsp;
    <button @click.alt="alertMessage('alt + 点击')"> do something </button>
    <button @click.ctrl="alertMessage('ctrl + 点击')">点我监听ctrl + click</button>
    <hr>
    <h3>.exact 修饰符</h3>
    <button @click.alt.exact="alertMessage('有且只有 alt 被按下时触发')">有且只有 alt 被按下时触发</button> &nbsp;
    <button @click.exact="alertMessage('没有任何修饰符被按下才会触发')"> 没有任何系统修饰符被按下时候触发</button>

    <hr>
    <h3>复选框</h3>
    <input
      v-model="toggle"  
      type="checkbox"
      true-value="yes"
      false-value="no"
    >{{toggle}}

    <hr>
    <h3>单选按钮</h3>
    <input type="radio" v-model="pick" v-for="item in pickArr" :key="item" v-bind:value="item">{{pick}}

    
    <hr>
    <h3>lazy （默认情况v-model 在input事件触发时生效  如果想让其change事件生效的话 使用lazy 案例） </h3>
    input事件触发数据同步： <input type="text" v-model="notLazyText" /> {{notLazyText}}<br/>
    change时间触发数据同步： <input type="text" v-model.lazy="lazyText" /> {{lazyText}}

    <hr>
    <h3>v-model绑定数据处理(即使使用type=“number” 最终绑定的值也会为String类型)</h3>
    自动将用户输入的值转换为数值类型: <br/>
    <input v-model="notLazyText" /> "{{notLazyText}}"的数据类型是：{{typeof(notLazyText)}} &nbsp;&nbsp;&nbsp;
    <input v-model.number="lazyText" /> "{{lazyText}}"的数据类型是：{{typeof(lazyText)}}

    <hr>
    <h3>trim 去掉绑定值的前后空格符</h3>
    <input type="text" v-model.trim="notLazyText"> 去掉前后空格后的内容: "{{notLazyText}}"


    <hr>
    <h3>v-model简易实现</h3>
    输入传入组件内容: <input type="text" v-model="notLazyText">
    <global-component v-model="notLazyText"></global-component>

    <hr>
    <h3>全局、局部组件注册&require.context多表单全局注册</h3>
    <base-1></base-1>&nbsp;&nbsp;
    <base-2></base-2>

    <hr>
    <h3>prop大小写问题</h3>
    <blog-post postTitle="这条不生效哦"></blog-post> “”放到模板index.html文件中不生效“”
    <blog-post post-title="hello!"></blog-post>
    
    <hr>
    <h3>prop验证</h3>
    <!-- <prop-rules :propA="123" propB="this is a string" propC="this is required" propD="this have default string" :propE="{name: '糖少'}" propF="'other' is not in arr, so there is a eroor message here"></prop-rules> -->
    <prop-rules :propA="123" propB="this is a string" propC="this is required" propD="this have default string" :propE="{name: '糖少'}" propF="danger"></prop-rules>

    <hr>
    <h3>prop覆盖 替换合并已有特性</h3>
    <el-tag type="danger">注意：组件中没有声明的props会赋值到最外层的dom元素上！！！！ template 内层如果有div会赋值到div上面</el-tag><br/>
    <bootstrap-date  type="text" placeholder="时间输入框替换到文本输入框了哦" data-date-picker="activated" class="other-class"></bootstrap-date>


    <hr>
    <h3>自定义checkbox组件</h3>
    <el-tag type="danger">子组件model字段可以指定 v-model绑定属性名称以及相应的触发事件</el-tag>
    <base-checkbox v-model="lovingVueCheck"></base-checkbox>


    <hr>
    <h3>sync 练习</h3>
    原写法：
    <sync-component :title="message" @update:title="message = $event"></sync-component>
    sync语法糖写法：
    <sync-component :title.sync="message"></sync-component>

    <hr>
    <h3>插槽</h3>
    <slot-component>插槽demo</slot-component>
    <slot-component></slot-component>

    <hr>
    <h3>具名插槽(2.5版本下 具名插槽后备信息不展示 2.6之后解决)</h3>
    <slot-component>
      默认插槽信息
      <template v-slot:content>
        <el-tag  type="success" >这里是具名插槽信息哦</el-tag>
      </template>
    </slot-component>

    <hr>
    <h3>作用域插槽</h3>
    <slot-component>
      <template v-slot:slotProp="scopeProps">
        {{scopeProps}} <el-button @click="scopeProps.user.age++">点我涨岁数</el-button>
      </template>
    </slot-component>

    <hr>
    <h3>解构插槽</h3>
    <slot-other-component v-slot="{ user }">
      {{user.name}}
    </slot-other-component>
    <slot-other-component v-slot="{ user: person }">
      {{person.name}}
    </slot-other-component>

    <!-- 赋默认值写法不争取？？？？？？？？？？？？？？？？？？
    <slot-other-component v-slot="{ user = { name: 'xxxx'} }">
      {{user.name}}
    </slot-other-component> -->

    <hr>
    <h3>动态插槽</h3>
    <el-button @click="changeDynamicSlotName">点我动态切换插槽</el-button>
    <slot-component>
      <template v-slot:[dynamicSlotName]>
        {{dynamicSlotName === 'default' ? 'default 插槽' : dynamicSlotName === 'content' ? 'content 插槽' : 'slot prop插槽'}}
      </template>
    </slot-component>

    <hr>
    <h3>具名插槽缩写</h3>
    <slot-component>
      <template #content>这里是 content 内容</template>
      <template #slotProp>这里是 slotProp 内容</template>
      <template #default>这里是 default 内容</template>
    </slot-component>

    <hr>
    <h3>插槽实战练习 todolist</h3>
    <todo-slot>
     <template #default="{ todos }">
        <span v-if="todos.isComplete">✓</span>
        <span v-else>未完成{{todos.text}}</span>
     </template>
    </todo-slot>


    <hr>
    <h3>访问根元素 ？？？？？？？？？？？？？？？$root无法获取到相应内容 $parent可以</h3>
    
    <hr>
    <h3>依赖注入</h3>
    <inject-component></inject-component>

    <hr>
    <h3>程序化事件监听 ？？？？？？？？？？？？？？？？？？？？？？？待验证</h3>


    <hr>
    <h3>组件递归调用</h3>
    <digui-component :children="tree"></digui-component>


    <hr>
    <h3>内联模板 会覆盖掉默认的slot模板</h3>
    <slot-component inline-template>
      <div>
          <p>These are compiled as the component's own template.</p>
          <p>Not parent's transclusion content.</p>
      </div>
    </slot-component>

    <hr>
    <h3>x-template</h3>
    <hello-me></hello-me>

    <hr>
    <h3> 通过v-once 创建低开销的静态组件  </h3>
    <v-once-component></v-once-component>
    <hr>
    <h3> 单元素、组件过渡  </h3>
    <div id="demo">
      <button v-on:click="show = !show">
        Toggle
      </button>&nbsp;
      <span v-if="show">hello</span>&nbsp;
      <transition name="fade">
        <span v-if="show">hello</span>
      </transition>
    </div>


    <div id="example-1">
      <button @click="show = !show">
        Toggle render
      </button>
      <transition name="slide-fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <div id="example-2">
      <button @click="show = !show">Toggle show</button>
      <transition name="bounce">
        <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
      </transition>
    </div>

    <hr>
    <h3> transition 过渡持续时间  </h3>
    <button @click="show = !show">transition 持续时间  </button>
    <transition :duration="5000">
      <p v-if="show">hello</p>
    </transition>
    <transition :duration="{enter: 5000, leave: 8000}">
      <p v-if="show">hello</p>
    </transition>


    <hr>
    <h3>transition mode 练习</h3>
    <div>
      <h4>无mode </h4>
      <transition name="mode">
        <button @click="show = !show" :key="show ? 'on' : 'off'">{{show ? 'on' : 'off'}}</button>
      </transition>

      <h4>in-out</h4>
      <transition name="mode" mode="in-out">
        <button @click="show = !show" :key="show ? 'on' : 'off'">{{show ? 'on' : 'off'}}</button>
      </transition>

      <h4>out-in</h4>
      <transition name="mode" mode="out-in">
        <button @click="show = !show" :key="show ? 'on' : 'off'">{{show ? 'on' : 'off'}}</button>
      </transition>
    </div>
    

    <footer id="footer" style="padding-top: 60px;"></footer>
  </div>
</template>
<style>
.mode-enter-active, .mode-leave-active {
  transition: all .5s ease;
}
.mode-enter, .mode-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
.mode-leave, .mode-enter-to {
  transform: translateX(0px);
  opacity: 1;
}
.v-enter, .v-leave-to {
  margin-left: 500px;
}
.v-leave, .v-enter-to {
  margin-left: -500px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5)
  }
  100% {
    transform: scale(1)
  }
}
</style>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      show: false,
      message: 'hello, everyone!',
      num: 0,
      htmlData: "<span style='color:red;'>这里是html语句哦~</span>",
      firstName: '-',
      secondName: '-',
      loginType: true,
      lists: [
        {msg: 'i love dog'},
        {msg: 'i love cat , too'},
        {msg: 'i love pig also'}
      ],
      obj: {
        name: '糖少',
        age: '18',
        sex: 'boy',
        hobby: 'eat'
      },
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4,
      toggle: '我现在还没有被点击哦',
      pick: '我还没有开始选择呢',
      pickArr: ['我是第一个哦~', '我是第二个呦！'],
      notLazyText: '',
      lazyText: '',
      lovingVueCheck: undefined,
      dynamicSlotName: 'default',
      tree: {
        text: '爷爷',
        children: {
          text: '爸爸',
          children: {
            text: '我'
          }
        }
      }
    }
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.secondName
      },
      set: function (newValue) {
        let arr = newValue.split(' ')
        this.firstName = arr[0]
        this.secondName = arr[1]
      }
    }
  },
  methods: {
    addNum () {
      this.num++
    },
    addNewToDo () {
      if(this.newTodoText.trim() === '') {
        alert('请填写新增内容后重试！')
        return
      }
      this.nextTodoId++
      this.todos.push({
        id: this.nextTodoId,
        title: this.newTodoText
      })
      this.newTodoText = ''
    },
    warning (message, event) {
      console.log(message, event)
      if (event) event.preventDefault()
      alert(message)
    },
    alertMessage (message) {
      alert(message)
    },
    parentPop () {
      alert('父弹窗出现')
    },
    childPop () {
      alert('子弹窗出现')
    },
    onScroll () {
      console.log('滚轮已经滑动')
    },
    changeDynamicSlotName () {
      let arr = ['default', 'content', 'slotProp']
      this.dynamicSlotName = arr[Math.floor(Math.random()*3)]
      console.log(this.dynamicSlotName)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.fix {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translate3d(0, -50%, 0);
  li {
    transition: .35s ease;
    width: 20px;
    height: 20px;
    margin: 10px;
    box-shadow:0 0 10px #2b2424;
    border-radius: 50%;
    overflow:hidden;
    &:hover {
      transform: scale(1.5);
    }
    &:nth-child(1){
      transform: rotate(180deg);
      &:hover {
        transform: scale(1.5) rotate(180deg);
      }
    }
    
    img {
      width: 20px;
      height: 20px;
    }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
div {
  margin: 10px;
}
</style>
