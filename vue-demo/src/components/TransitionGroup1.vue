<template>
  <div>
    <el-button type="success" size="mini" @click="addData">ADD</el-button>
    <el-button type="danger" size="mini" @click="removeData">REMOVE</el-button>
    <el-button type="info" size="mini" @click="reverseData">REVERSE</el-button>
    <transition-group name="group1" tag="ul">
        <li v-for="item in dataList" :key="item"  class="list-item">{{item}}</li>    
    </transition-group>
  </div>
</template>
<style lang="scss" scoped>
ul {
  list-style: none;
}
.list-item{
  padding:5px;
}
.group1-move{
  transition: all 2s;
}
.group1-enter-active, .group1-leave-active{
  transition: all 1s;
}
.group1-enter{
  opacity: 0;
  transform: translateX(-30px);
}
.group1-leave-to{
  opacity: 0;
  transform: translateX(30px);
}
</style>

<script>
export default {
    data () {
        return {
            dataList: [1, 2, 3, 6, 7],
            tempNum: 8
        }
    },
    computed: {
      randomIndex () {
        let index = Math.floor(Math.random() * this.dataList.length)
        return index
      }
    },
    methods: {
      addData () {
        this.dataList.splice(this.randomIndex, 0, this.tempNum++)
      },
      removeData () {
        this.dataList.splice(this.randomIndex, 1)
      },
      reverseData () {
        this.dataList.reverse()
      }
    }
}
</script>

