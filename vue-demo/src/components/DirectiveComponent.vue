<template>
    <div>
        <input v-model="text" type="text" placeholder="我是局部指令" v-temp>
    </div>
</template>
<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  directives: {
    temp: {
      inserted: el => {
        console.log('局部指令inserted已调用', el)
      },
      bind: el => {
        console.log('局部指令只初始化调用一次', el)
      },
      update: el => {
        console.log('局部指令更新调用', el)
      },
      componentUpdated: el => {
        console.log('局部指令componentUpdated已经调用', el)
      },
      unbind: el => {
        console.log('局部指令unbind已经调用', el)
      }
    }
  }
}
</script>
