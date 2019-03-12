<template>
    <span>
        {{this.text}}
    </span>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

