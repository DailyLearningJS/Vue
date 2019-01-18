<template>
  <div class="hello">
    <h3>全局components注册 使用</h3>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
