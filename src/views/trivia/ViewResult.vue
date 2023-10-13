<template>
 <NavBar name="Trivia Quiz" bgColor="white" txtColor="danger" />
 
 <div class="final-result">
        <h3>Quiz Result</h3>
        <p class="score">Your Score : {{ score?.value }}/100 </p>
        <div class="is-flex is-justify-content-end px-4"><button  @click="playAgain" class="button has-background-warning is-medium has-text-weight-semibold" >Play Again</button></div>
        <div class="qa-container">
            <div  v-for="item in result" class="qa-box" >
                <div><span>{{item.qno}}.</span> {{ item.question }}</div>
                <div v-if="item.your_answer === item.correct_answer">Your Answer : {{ item.your_answer }} <span style="color:green;">&#10003;</span></div>  
                <div v-else="">Your Answer : {{ item.your_answer }} <span>&#10060;</span></div> 
                <div>Correct Answer: {{ item.correct_answer }}</div>
            </div>
        </div>
 </div>

</template>

<script setup>

import NavBar from "@/components/layout/NavBar.vue";
import {useStoreTrivia} from "../../stores/storeTrivia.js";
import {useRouter} from "vue-router";
import {ref, computed} from "vue";
const router = useRouter();
const storeTrivia = useStoreTrivia();

const result = ref();
result.value = storeTrivia.result;
const score = ref(0);
score.value = computed(() => storeTrivia.score);



const playAgain = () => {
    storeTrivia.triviaDB = [];
    storeTrivia.result = [];
    storeTrivia.score = 0;
    router.push("/trivia-quiz");
}

</script>

<style scoped>

.final-result{
    background: #fff;
    height: 100vh;
}

h3{
    color: #fff;
    background: #3bc436;
    padding:20px;
    font-size: 28px;
    font-weight: bolder;
    text-align: center;

}

.score{
    text-align: center;
    padding:20px 0px;
    font-size: 21px;
    color: rgb(0, 68, 255);
    font-weight: 600;
}

.qa-container{
    display: flex;
    flex-direction: column;
    padding:20px;
}

.qa-box{
    padding:40px 0px;
}

.qa-box div{
        font-size: 18px;
        font-weight: bolder;
}

</style>