<template>
    
        <NavBar name="NOTEBALLS" bgColor="success" txtColor="white" />
        <div class="notes">
            <AddEditNote label="Add New Note" placeholder="Add a new note" bgColor="success" v-model="newNote"
                ref="textareaRef">
                <template #buttons>
                    <button class="button is-link has-background-success" :disabled="!newNote" @click="addNote">Add New
                        Note</button>

                </template>
            </AddEditNote>


            <div class="search-note ">
                <input class="input is-medium" type="text" placeholder="Search Note..." v-model="search">
            </div>

            <Notes v-for="note in arr" :note="note" :key="note.id" />

        </div>
   
</template>




<script setup>
import NavBar from "@/components/layout/NavBar.vue"
import Notes from '@/components/notes/Notes.vue'
import AddEditNote from "@/components/notes/AddEditNote.vue"
import { ref, computed, reactive } from 'vue'

import { useStoreNotes } from '@/stores/storeNotes';

const newNote = ref('');
const notesArr = ref('');
const textareaRef = ref(null);
const storeNotes = useStoreNotes();
const search = ref('');

notesArr.value = storeNotes.notes;

const addNote = () => {
    console.log("New note: ", newNote.value);
    storeNotes.addNote(newNote.value);
    newNote.value = "";
    textareaRef.value.textareaFocus();
}



const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})



const arr = computed(() => {
    const searchText = search.value.trim().toLowerCase();
    if (!searchText) return storeNotes.notes;

    return storeNotes.searchNotes(searchText)
})


</script>
