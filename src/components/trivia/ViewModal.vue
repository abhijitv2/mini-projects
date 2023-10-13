<template>
     <div class="modal is-active p-2">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head has-background-warning">
                <p v-if="props?.modalFlag === 1" class="modal-card-title has-text-weight-semibold	">Warning</p>
                <p v-else-if="props?.modalFlag === 2" class="modal-card-title has-text-weight-semibold	">Submit Quiz</p>
                <button class="delete" aria-label="close" @click="$emit('closeModal')"></button>
            </header>
            <section class="modal-card-body">
              <span v-if="props?.modalFlag === 1" class="has-text-weight-semibold	">Please answer all the questions!</span>
              <span v-else-if="props?.modalFlag === 2" class="has-text-weight-semibold	">Do you want to submit the Quiz?</span>
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end ">
                <button v-if="props?.modalFlag === 1" class="button has-background-warning has-text-weight-semibold	" @click="$emit('closeModal')">Ok</button> 
                <button v-else-if="props?.modalFlag === 2" class="button has-text-weight-semibold	" @click="$emit('closeModal')">Cancel</button> 
                <button v-if="props?.modalFlag === 2" class="button has-background-warning has-text-weight-semibold	" @click="$emit('submitQuiz')">Ok</button> 
            </footer>
        </div>
    </div>
</template>


<script setup>

const props = defineProps({
    modalFlag:{
        type: Number
    }
})

</script>

