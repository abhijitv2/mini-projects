<template>
    <div class="modal is-active p-2">
        <div class="modal-background"></div>
        <div class="modal-card " ref="modalCardRef">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete Note</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
               Are you sure you want to delete this note?
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end">
                <button class="button" @click="closeModal">Cancel</button>
                <button class="button is-danger" @click="storeTasks.deleteTask(taskId)" >Delete</button>
            </footer>
        </div>
    </div>
</template>



<script setup>
import {useStoreTasks} from "@/stores/storeTasks.js"
import { onClickOutside } from '@vueuse/core'
import {ref} from 'vue'

const storeTasks = useStoreTasks()
const modalCardRef = ref(null);

const props = defineProps({
    modelValue:{
        type:Boolean,
        required:true
    },
    taskId:{
        type:String,
        required:true
    }
})

const closeModal = () => {
    emit('update:modelValue', false)
}

onClickOutside(modalCardRef,closeModal)

const emit = defineEmits(['update:modelValue'])



</script>