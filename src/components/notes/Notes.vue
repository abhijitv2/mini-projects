<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="columns is-mobile has-text-grey-light mt-2">
                    <small class="column has-text-right">{{ noteCharLength() }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="`editNote/${note.id}`" href="#" class="card-footer-item has-text-weight-semibold">Edit</RouterLink>
            <a href="#" @click.prevent="openModal(note.id)" class="card-footer-item has-text-weight-semibold">Delete</a>
        </footer>
    </div>
</template>


<script setup>
import Swal from 'sweetalert2';
import { useStoreNotes } from '../../stores/storeNotes';

const storeNotes = useStoreNotes()

const emit = defineEmits(['openModal'])

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})


const openModal = (id) => {
    Swal.fire({
        title: 'Delete Note',
        text: "Do you want to delete this Note? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Delete"

    }).then(function (result) {
        if (result.value) {
            storeNotes.deleteNote(id)

            Swal.fire(
                "Deleted!",
                "Your note has been deleted.",
                "success"
            )
        }
    });

}

const noteCharLength = () => {
    if (props.note?.content?.length === 1) {
        return "1 character"
    }
    else {
        return props.note?.content?.length + " characters"
    }
}



</script>