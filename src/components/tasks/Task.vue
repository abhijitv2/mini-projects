<template>
    <tr>
        <td>{{ task.id }}</td>
        <td>{{ task.content }} <template v-if="task.completed"><span class="tag is-success">Completed</span></template></td>
        <td>
            <RouterLink class="button is-info" :to="`/editTask/${task.id}`"> Edit</RouterLink> <button
                class="button is-danger" @click="modals.deleteTask = true">Delete</button> <button class="button is-success"
                @click="storeTasks.markCompleted(task.id)">Mark As Completed</button>
        </td>
    </tr>
    <TaskDeleteModal v-if="modals.deleteTask" v-model="modals.deleteTask" :taskId="task.id" />
</template>

<script setup>
import { useStoreTasks } from '../../stores/storeTasks';
import TaskDeleteModal from './TaskDeleteModal.vue';
import { reactive } from 'vue'

const storeTasks = useStoreTasks()

const prop = defineProps({
    task: {
        type: Object,
        required: true
    }
})

const modals = reactive({
    deleteTask: false
})


</script>