<template>
   
        <div class="card new-task-card">
            <div class="card-header" :class="`has-background-${bgColor}`">
                <div v-if="label" class="card-header-title has-text-white">{{ label }}</div>
            </div>
            <div class="card-content has-background-link-light">
                <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"  
                 v-if="placeholder" class="textarea" :placeholder="placeholder" ref="textRef" />
            </div>
            <div class="card-footer field is-grouped is-grouped-right has-background-link-light">
               <slot name="buttons" />
            </div>
        </div>
</template>


<script setup>
import {ref} from 'vue'

const textRef = ref(null)

const focusTextarea = () => {
    textRef.value.focus();
}

defineExpose({ focusTextarea })

const props = defineProps({
    modelValue:{
        type:String,
        required:true
    },
    label:{
        type:String,
        required:true
    },
    placeholder:{
        type:String,
    },
    bgColor:{
        type:String,
        required:true
    }
})


const emit =  defineEmits(['update:modelValue'])

</script>