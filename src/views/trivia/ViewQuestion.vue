<template>
  
    <NavBar name="Trivia Quiz" bgColor="white" txtColor="danger" />
    <div v-if="qa?.length > 0" class="parent-container">
       
        <div class="question-box">
            <div class="question">
                <p>{{count+1}}. {{ qa[count]?.question}}</p>
            </div>
            <div v-for="option in qa[count]?.options" class="answers">

                <input type="radio" :id='option' :name="answer" :value='option' v-model="checkedOption[count]" :checked="option === checkedOption[count]" > 
                <label for="option" class="opt"> {{option}}</label><br>               
            </div>
        </div>

        <div class="nav-buttons">
            <button class="button is-info" @click="loadPrevQuestion">Prev</button>
            <div></div>
            <button v-if="count < 4" class="button is-info" @click="loadNextQuestion">Next</button>
            <button v-if="count === 4" type="button" @click="confirmSubmitQuiz" class="button is-warning is-text-white has-text-weight-semibold	">Submit</button>
        </div>
       
       <div v-if="showModal===true">
            <Modal :modalFlag="modalFlag"  @closeModal="closeModal" @submitQuiz="submitQuiz"/>
       </div>

    </div>
    <div v-else="">
        <p>No Questions available at the moment!</p>
    </div>
    
    </template>
    
    
    <script setup>
            import {useStoreTrivia} from "../../stores/storeTrivia.js"
            import NavBar from "@/components/layout/NavBar.vue";
            import Modal from "@/components/trivia/ViewModal.vue";
            import {ref} from 'vue';
            import {useRouter} from "vue-router";
            
            const router = useRouter();
            const storeTrivia = useStoreTrivia();
            const count = ref(0);
            const checkedOption = ref(["","","","",""]);
            const db= ref([]);
            const qa= ref([]);
            const resultArray = ref([]);
            const score = ref(0);
            const showModal = ref(false);
            const modalFlag = ref(0);
            const answeredArray = ref([{id:1, answer:""},{id:2, answer:""},{id:3, answer:""},{id:4, answer:""},{id:5, answer:""}]);
            db.value = storeTrivia.triviaDB;


            const shuffleOptions = (db) => {

                            let newArray = [];

                            for(let i=0; i<db.value.length; i++)
                            {

                                let options = db.value[i].incorrect_answers;
                                options.push(db.value[i].answer);
                                                
                                let currentIndex = options.length,  randomIndex;
                                            
                                while (currentIndex > 0) {
                                    randomIndex = Math.floor(Math.random() * currentIndex);
                                    currentIndex--;
                                    [options[currentIndex], options[randomIndex]] = [options[randomIndex], options[currentIndex]];
                                }

                                let obj = {
                                                id: db.value[i].id,
                                                question: db.value[i].question,
                                                correct_answer: db.value[i].answer,
                                                options: options,
                                                selected_answer: ""
                                            }

                                newArray.unshift(obj);

                            }

                            return newArray;

                    }


            if(db.value.length> 0)
            {
              qa.value = shuffleOptions(db)
            }

        
            const loadNextQuestion = () => {
                let obj ={
                    id: qa.value[count.value]?.id,
                    answer: checkedOption.value[count.value]
                }
                
                answeredArray.value[count.value] = obj;
              
                     
                if(count.value < 4 )
                {
                    count.value += 1;
                   
                }
                else
                {
                    count.value = 4;
                    return;
                }             
            }

            const loadPrevQuestion = () => {

                let obj ={
                    id: qa.value[count.value]?.id,
                    answer: checkedOption.value[count.value]
                }

                answeredArray.value[count.value] = obj;

                if(count.value >= 1 && count.value <=5)
                {
                   // checkedOption.value="";
                    count.value -= 1;                    
                }
                else
                {
                    count.value = 0;
                }
            }



            const confirmSubmitQuiz = () => {

                let obj ={
                    id: qa.value[4]?.id,
                    answer: checkedOption.value[4]
                }

                answeredArray.value[4] = obj;

                const validation = answeredArray.value.some(item => item.answer === "")
                if(validation === true)
                {
                    modalFlag.value = 1;
                    showModal.value = true;
                }
                else
                {
                    modalFlag.value = 2;
                    showModal.value = true;
                }               
            }


            const submitQuiz = () => {
                resultArray.value.length = 0;
                let cnt = 0;
                    answeredArray.value.map((item1)=>{
                        
                        qa.value.map((item2)=>{
                            if(item1.id === item2.id)
                            {
                                let obj={
                                    id: Math.floor(Math.random()*(999-100+1)+100),
                                    qno:  ++cnt,
                                    question: item2.question,
                                    your_answer: item1.answer,
                                    correct_answer: item2.correct_answer
                                }
                                
                                resultArray.value.push(obj);
                                if(item1.answer === item2.correct_answer)
                                {
                                    
                                    score.value += 20;
                                }
                               
                            }
                        })       
                       
                    });

                    console.log("final array : ", resultArray.value)
                    console.log("final score : ", score.value)
                    storeTrivia.storeResult(resultArray.value);
                    storeTrivia.setScore(score.value);
                    showModal.value = false;
                
                    router.push('/trivia-quiz/result');

            }


            const closeModal = () =>{
                showModal.value = false;
            }     
           
    </script>

    <style scoped>

        .question-box{
            background: #fff;
            padding: 40px;
            display: flex;
            flex-direction: column;
            gap: 40px;
            margin:40px auto 0px auto;
            width: 800px;
            height:450px;
        }

        .question p{
            font-weight:bolder;
            font-size:21px;
        }

        .answers{

        }

        .opt{
            padding-left:10px;
            font-weight:bold;
        }

        .parent-container{
            display:flex;
            flex-direction: column;
            justify-content:center;
            gap:30px;
        }

        .nav-buttons{
            display:flex;
            justify-content: space-around;
        }



    </style>