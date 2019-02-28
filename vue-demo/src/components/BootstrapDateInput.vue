<template>
    <input type="date" class="form-control">
    <!-- <div>  // $attrs 需要和inheritAttrs配合使用
        <input type="date" class="form-control" v-bind="$attrs">
    </div> -->
</template>
<style>
.form-control {
    width: 200px;
}
</style>

<script>
export default {
    // inheritAttrs: false, //没有props声明的属性不会赋值到根元素上
    data () {
        return {}
    },
    created () {
        console.log(this.$attrs)
    }
}
</script>
