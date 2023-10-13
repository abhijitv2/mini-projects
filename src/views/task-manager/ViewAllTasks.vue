<template>
    <NavBar name="Task Manager" bgColor="warning" txtColor="black"/>
    <div class="all-tasks has-text-centered mt-4">
        <h2 class="py-4 font-weight-700 has-text-white">View Your Tasks</h2>
        <div class="select">
            <select  v-model="option">
                <option value="0">All</option>
                <option value="1">In Progress</option>
                <option value="2">Completed</option>
            </select>
        </div>
        <div class="tasks">
            <div class="table-container ">
                <table class="table is-bordered is-hoverable ">
                    <thead>
                        <tr>
                            <th>Task ID</th>
                            <th>Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ViewTask v-for="task in taskList" :task="task" />
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<script setup>
import NavBar from "@/components/layout/NavBar.vue";
import { useStoreTasks } from "@/stores/storeTasks";
import ViewTask from "@/components/tasks/ViewTask.vue";
import { ref, computed } from "vue";


let storeTasks = useStoreTasks();
const  filteredData = ref(null);
const option = ref('0');
filteredData.value = storeTasks.tasks;


// const getSelectedTask = (e) => {
//     filteredData.value = storeTasks.getFilteredTask(e.target.value);
//     taskList = filteredData;
// }


const taskList = computed(()=>{  if(option.value === "0") return filteredData.value;
                                return storeTasks.getFilteredTask(option.value);
});


</script>