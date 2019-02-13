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
    <h3>系统修饰符</h3>
    <!-- Alt + C -->
    <input @keyup.alt.67="alertMessage('alt + c')"> &nbsp;
    <button @click.alt="alertMessage('alt + 点击')"> do something </button>
    
    <hr>
    <h3>.exact 修饰符</h3>
    <button @click.alt.exact="alertMessage('有且只有 alt 被按下时触发')">有且只有 alt 被按下时触发</button> &nbsp;
    <button @click.exact="alertMessage('没有任何修饰符被按下才会触发')"> 没有任何系统修饰符被按下时候触发</button>











    <footer id="footer"></footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
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
      nextTodoId: 4
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
