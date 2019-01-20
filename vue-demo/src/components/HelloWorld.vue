<template>
  <div class="hello">
    <div class="fix">
      <ul>
        <li>
          <a href="header">
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

      <hr>
      <h3>内联处理器传递特殊变量</h3>
      <button @click="warning('this is a tip :D', $event)"></button>
    </div>

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
    width: 20px;
    height: 20px;
    margin: 10px;
    box-shadow:0 0 10px #2b2424;
    border-radius: 50%;
    overflow:hidden;
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
</style>
