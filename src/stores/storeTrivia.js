import { defineStore } from "pinia";

export const useStoreTrivia = defineStore('storeTrivia', {
    state: () => {
        return {
            triviaDB : [],
            result:[],
            score:0
        }
    },
    actions: {
        addTriviaDB(data) {
            data.map(item => {
               let id = Math.floor(Math.random() * 100);

                let obj = {
                    id: id,
                    question: item.question,
                    answer: item.correct_answer,
                    incorrect_answers: item.incorrect_answers
                }

                this.triviaDB.unshift(obj)
            })
           
            console.log("trivia after adding: ", this.triviaDB);


        },
        storeResult(arr) {
            this.result = arr;
        },
        setScore(val){
            this.score = val;
        }
        
    }
})