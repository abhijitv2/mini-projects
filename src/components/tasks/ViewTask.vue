<template>
    <tr>
        <td>{{ task.id }}</td>
        <td class="has-text-left">{{ task.content }} </td>
    </tr>
    
</template>


<script setup>
    const props = defineProps({
        task:{
            type: Object,
            required: true
        }
    })
</script>