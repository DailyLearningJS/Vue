export default {
  data () {
    return {
      mixinMessage: "I'm 糖少"
    }
  },
  created () {
    this.$notify({
      type: 'success',
      title: 'hello',
      message: this.mixinMessage
    })
  },
  methods: {
    addData () {
      console.log('我是mixin 公共addData方法')
    },
    tempData () {
      console.log('我是mixin 公共tempData方法')
    }
  }
}