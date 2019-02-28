<template>
    <el-tag type="info">{{title}}</el-tag>
</template>
<script>
export default {
    data () {
        return {
            title: '标签一'
        }
    }
}

// export const render = function(c) {
//     return c('el-tag',{
//         type:'info'
//     },['标签一'])
// }
</script>
