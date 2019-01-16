<template>
    <div>
        <div style="background:red;width:200px;height:200px;margin:0 auto;">
            <img src="../assets/logo.png" alt="error">
        </div>
        <div>{{msg}}</div>
    </div>
</template>
<script>
export default {
    name: 'GlobalComponent',
    data () {
        return {
            msg: 'this is the global component'
        }
    }
}
</script>

