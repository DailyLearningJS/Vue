<template>
    <div>
        {{`${id}、  ${title}`}} <button @click="$emit('remove')">click me to remove</button>
    </div>
</template>
<script>
export default {
    name: 'todo-item',
    props: ['title', 'id']
}
</script>

