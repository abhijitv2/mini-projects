
<template>
    <NavBar name="Task Manager" bgColor="warning" txtColor="black" />
    <div class="task-dashboard">
        <AddEditTask v-model="taskContent" label="Edit Task" placeholder="Edit task..." bgColor="warning">

            <template #buttons>
                <button class="button is-info mr-4 mb-2" @click="$router.push('/task-manager')">Cancel</button>
                <button class="button is-warning mr-4 mb-2" @click="saveChanges">Edit Task</button>
            </template>
        </AddEditTask>
    </div>
</template>

<script setup>
import NavBar from "@/components/layout/NavBar.vue";
import {useStoreTasks} from "@/stores/storeTasks.js"
import {useRouter, useRoute} from 'vue-router'
import AddEditTask from '@/components/tasks/AddEditTask.vue';
import {ref} from 'vue';

const taskContent = ref('');
const router = useRouter();
const route = useRoute();
const storeTasks = useStoreTasks();


taskContent.value = storeTasks.getTaskContent(route.params.id)

const saveChanges = () => {
    storeTasks.editTask(taskContent,route.params.id);
    router.push('/task-manager')
}

</script>