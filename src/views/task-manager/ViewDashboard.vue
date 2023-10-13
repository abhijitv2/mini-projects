<template>
    <NavBar name="Task Manager" bgColor="warning" txtColor="black"/>
    <div class="task-dashboard">
        <div class='has-text-right'><RouterLink to="/all-tasks" class="button is-info mt-2 mr-2">View All Tasks</RouterLink></div>
      

        <AddEditTask v-model="newTask" label="Add New Task" placeholder="Write some task..." bgColor="info" ref="textRef">

            <template #buttons>
                <button class="button is-info mr-4 mb-2" >Cancel</button>
                <button class="button is-success mr-4 mb-2" @click="addTask">Create Task</button>
            </template>
        </AddEditTask>


        <div v-if="!storeTasks.tasksLoaded" class="loader-wrapper">
            <div class="loader is-loading"></div>
        </div>

        <div v-if="!storeTasks.tasks.length"
            class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6">
            No Tasks Added...
        </div>

        <template v-else>
            <div class="table-container ">
                <table class="table is-bordered is-hoverable ">
                    <thead>
                        <tr>
                            <th>Task ID</th>
                            <th>Task</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Task v-for="task in storeTasks.tasks" :key="task.id" :task="task" />
                    </tbody>
                </table>
            </div>
        </template>






    </div>
</template>

<script setup>
import NavBar from "@/components/layout/NavBar.vue";
import { useStoreTasks } from "@/stores/storeTasks.js"
import Task from "@/components/tasks/Task.vue"
import AddEditTask from "@/components/tasks/AddEditTask.vue";
import {ref, onMounted} from 'vue'

const storeTasks = useStoreTasks()
const newTask = ref('')
const textRef = ref(null)

const addTask = () => {
    storeTasks.addTask(newTask.value);
    newTask.value=''
    textRef.value.focusTextarea()
}

onMounted(()=>{
    textRef.value.focusTextarea()
})

</script>