<template>
    <div v-if="value">
        <div style="background:red;width:200px;height:200px;margin:0 auto;">
            <img src="../assets/logo.png" alt="error">
        </div>
        <div>{{msg}}</div>
        <div>{{value}}</div>
        <input type="text" v-model="value" @input="$emit('input', $event.target.value)" v-show="false">
    </div>
</template>
<script>
export default {
    name: 'GlobalComponent',
    props: ['value'],
    data () {
        return {
            msg: 'this is the global component'
        }
    }
}
</script>

