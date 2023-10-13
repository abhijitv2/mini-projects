<template>
<NavBar name="Trivia Quiz" bgColor="white" txtColor="danger" />
<div class="is-flex is-justify-content-center">
    <div class="quiz-start-box">
        <RouterLink class="button is-info is-text-white is-large start-btn" to="/trivia-quiz/question">Start Quiz</RouterLink>

        <div class="qdetail">
            <ul>
                <li>Total of 5 questions</li>
                <li>No Negative Markings</li>
                <li>Your score will be displayed once you finish the quiz</li>
            </ul>
        </div>
    </div>
</div>

</template>


<script setup>
import {useStoreTrivia} from "../../stores/storeTrivia.js"
import NavBar from "@/components/layout/NavBar.vue";
import {ref, watchEffect} from "vue"
import axios from 'axios'

const storeTrivia = useStoreTrivia();




const fetchQuestions = async() => {

        storeTrivia.triviaDB = [];
        storeTrivia.result = [];
        storeTrivia.score = 0;
    
        const response = await axios.get('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple').then((res)=>{ return res}); 
        storeTrivia.addTriviaDB(response.data.results);
}

watchEffect(()=>{
    fetchQuestions()
})




</script>

<style scoped>
.quiz-start-box{
    background: #fff;
    display: flex;
    flex-direction: column;
    gap:30px;
    margin-top:150px;
    height: 300px;
    width: 500px;
    padding: 60px 30px 30px 30px;
    align-items:center;
}


ul{
    margin-top: 30px;
}

ul li{
    font-weight: bolder;
    font-size: 14px;
    list-style-type: disc;
}

body{
    background: #fff !important;
}

.qdetail{
    display: flex;
    justify-content: center;
}

</style>