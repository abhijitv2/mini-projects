<template>
    <div class="card p-4 mb-5" :class="`has-background-${props.bgColor}-dark`">

        <label v-if="label" class="label has-text-white">{{ props.label }}</label>
        <div class="field">
            <div class="control">
                <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="textarea"
                    :placeholder='props.placeholder' ref="textRef" v-autofocus maxlength="100" />
            </div>
        </div>


        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        </div>

    </div>
</template>
   
   
<script setup>
import { ref } from 'vue'

const textRef = ref(null)

const props = defineProps({
    label: {
        type: String
    },
    placeholder: {
        type: String,
        default: 'type something...'
    },
    bgColor: {
        type: String
    },
    modelValue: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const textareaFocus = () => {
    textRef.value.focus()
}

defineExpose({ textareaFocus })

</script>