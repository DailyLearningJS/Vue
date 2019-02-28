<template>
  <div>
    <h4>单个类型传递: propA: {{propA}}   temp: <span class="action">{{temp}}</span></h4>
    <h4>多个类型传递: {{propB}}</h4>
    <h4>必填字段: {{propC}}</h4>
    <h4>带默认值字段: {{propD}}</h4>
    <h4>带默认值的对象和数组（必须从一个工厂函数中获取）: {{JSON.stringify(propE)}}</h4>
    <h4>自定义验证函数: {{propF}}</h4>
    <el-button @click="clickMe(true)">点我 (你会发现不可以直接更改prop属性哦  要改的话需要点后面)</el-button>
    <el-button @click="clickMe(false)">点我就没问题(将prop赋值给data内变量)</el-button>
  </div>
</template>
<style>
h4 {
  background: skyblue;
}
span.action {
  color:red;
  font-weight:3000;
  font-size:22px;
}
</style>

<script>
export default {
    props: {
        propA: Number,
        propB: [String, Number],
        propC: {
          type: String,
          required: true
        },
        propD: {
          type: String,
          default: 'hello world'
        },
        propE: {
          type: Object,
          default: function () {
            return {message: "hello , i'm a object "}
          }
        },
        propF: {
          validator: function (val) {
            return ['success', 'warning', 'danger'].indexOf(val) !== -1
          }
        }
    },
    data () {
      return {
        temp: this.propA
      }
    },
    methods: {
      clickMe (val) {
        if (!val) this.temp++
      }
    }
}
</script>

