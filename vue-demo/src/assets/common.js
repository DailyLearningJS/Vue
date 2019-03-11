export default {
  data () {
    return {
      mixinMessage: "hello, i'm 糖少"
    }
  },
  created () {
    this.$alert(this.mixinMessage, '注意', {
      confirmButtonText: '确定',
      callback: () => {
        this.$message({
          type: 'success',
          message: "朕知道了 = = "
        })
      }
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