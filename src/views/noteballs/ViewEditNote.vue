<template>
   
    <NavBar name="NOTEBALLS" bgColor="success" txtColor="white"/>
    <div class="noteball-wrapper column is-three-quarters">
    <AddEditNote
    bgColor="link"
    v-model="noteContent"
    label="Edit Note"
    placeholder="Edit note..."
    >
    <template #buttons>
        <button  class="button is-primary has-text-black p-2 mt-2 float-end" @click="saveChanges">Save Changes</button>
        <button  class="button is-light has-text-black p-2 mt-2 mx-2 float-end" @click="router.push('/note-taking-app')">Cancel</button>
    </template>
    </AddEditNote>
    </div>


</template>


<script setup>
import NavBar from "@/components/layout/NavBar.vue"
import AddEditNote from '@/components/notes/AddEditNote.vue';
import {useStoreNotes} from "@/stores/storeNotes.js"
import {useRouter, useRoute} from "vue-router"
import {ref} from "vue"

const storeNotes = useStoreNotes()
const router = useRouter()
const route = useRoute()

const noteContent = ref('')
    noteContent.value= storeNotes.getNoteContent(route.params.id)
    console.log(noteContent.value)


const saveChanges = () => {
    storeNotes.editNote(route.params.id, noteContent.value)
    router.push('/note-taking-app')
}


</script>

<style scoped>
.noteball-wrapper{
    margin: 50px auto 0px auto;
}
</style>