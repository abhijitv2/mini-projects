import { defineStore } from "pinia";

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: 'id1',
                    content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
                },
                {
                    id: 'id2',
                    content: 'This is  shorter note.'
                },
                {
                    id: 'id3',
                    content: 'This is  short note.'
                }
            ]
        }
    },
    actions: {
        addNote(newNote) {
            let date = new Date().getTime(),
                id = date.toString();

            let note = {
                id,
                content: newNote
            }
            console.log(note)

            this.notes.unshift(note)


        },
        editNote(id, note) {
            this.notes.findIndex((item) => { if (item.id === id) { item.content = note } })
        },
        deleteNote(id) {
            this.notes = this.notes.filter(item => item.id !== id )
        }
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter((item) => { return item.id === id })[0].content
            }
        },
        searchNotes:(state)=>{
            return (term)=>{
                return state.notes.filter((item)=>{return item.content.toLowerCase().includes(term)})
            }
        }
    }
})