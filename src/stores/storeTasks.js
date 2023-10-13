import { defineStore } from "pinia"

export const useStoreTasks = defineStore('storeTasks', {
    state: () => {
        return {
            tasks: [{ id: "0023", content: "Study Vue.js", completed: true },
            { id: "5342", content: "Study React.js", completed: false }],
            tasksLoaded: true
        }
    },
    actions: {
        addTask(newTask) {
            let currentDate = new Date().getTime(),
                id = currentDate.toString()

            let task = {
                id,
                content: newTask,
                completed: false
            }
            this.tasks.unshift(task)
        },
        editTask(editedTask, id) {
            let taskIndex = this.tasks.findIndex((item) => { return item.id === id })
            this.tasks[taskIndex].content = editedTask
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter((item) => { return item.id !== id })
        },
        markCompleted(id) {
            let taskIndex = this.tasks.findIndex((item) => { return item.id === id })
            this.tasks[taskIndex].completed = true;
        }
    },
    getters: {
        getTaskContent: (state) => {
            return (id) => { return state.tasks.filter((item) => { return item.id === id })[0].content }
        },

        getTasks: (state) => {
            return () => { return state.tasks }
        },
        getFilteredTask: (state) => {
            return (val) => {
                if (val === "0") return state.tasks;
                if (val === "1") return state.tasks.filter((item) => { return item.completed === false });
                if (val === "2") return state.tasks.filter((item) => { return item.completed === true });
            }
        }
    }
})

