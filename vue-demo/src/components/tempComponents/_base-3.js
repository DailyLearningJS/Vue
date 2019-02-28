import Vue from 'vue'
const componenta = {
    template: "<template><el-tag type='danger'>标签三</el-tag></template>"
}
new Vue({
    components: {
        'base-3': componenta
    }
})