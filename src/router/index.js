import { createRouter, createWebHashHistory } from "vue-router";
import ViewDashboard from "@/views/task-manager/ViewDashboard.vue";
import ViewEditTask from "@/views/task-manager/ViewEditTask.vue";
import ViewAllTasks from "@/views/task-manager//ViewAllTasks.vue";
import Home from "@/components/layout/Home.vue";
import ViewWeather from  "@/views/weather/ViewWeather.vue";
import ViewNotes from "@/views/noteballs/ViewNotes.vue";
import ViewEditNote from "@/views/noteballs/ViewEditNote.vue";
import ViewMovie from "@/views/movie-search/ViewMovie.vue";
import ViewGithubProfile from "@/views/github-profile-search/ViewGithubProfile.vue";
import ViewGithubProfileRepos from "@/views/github-profile-search/ViewGithubProfileRepos.vue";
import ViewTrivia from "@/views/trivia/ViewTrivia.vue";
import ViewQuestion from "@/views/trivia/ViewQuestion.vue";
import ViewResult from "@/views/trivia/ViewResult.vue";
import ViewProductList from "@/views/ecommerce/ViewProductList.vue";
import ViewCart from "@/views/ecommerce/ViewCart.vue";
import ViewSingleProduct from "@/components/products/ViewSingleProduct.vue";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [{ name: 'home', path: '/', component: Home },
    {name:'note-app', path:'/note-taking-app', component: ViewNotes},
    {name:'editNote', path:'/editNote/:id', component: ViewEditNote},
    { name: 'dashboard', path: '/task-manager', component: ViewDashboard },
    { name: 'editTask', path: '/editTask/:id', component: ViewEditTask },
    {name:'allTasks', path:'/all-tasks', component: ViewAllTasks },
    {name:'weatherApp', path:'/weather-app', component: ViewWeather },
    {name:'movieApp', path:'/movie-search-app', component: ViewMovie },
    {name:'githubProfileSearchApp', path:'/github-profile-viewer', component: ViewGithubProfile},
    {name:'viewGithubProfile', path:'/github-profile-viewer/:login', component: ViewGithubProfileRepos},
    {name:'triviaQuiz', path:'/trivia-quiz', component:ViewTrivia },
    {name:'triviaQuestion', path:'/trivia-quiz/question', component: ViewQuestion},
    {name:'triviaResult', path:'/trivia-quiz/result', component: ViewResult},
    {name:'ecommerceProductList', path:'/ecommerce-product-list', component: ViewProductList},
    {name:'ecommerceViewCart', path:'/ecommerce-product-list/cart', component: ViewCart},
    {name:'ecommerceViewSingleProduct', path:'/ecommerce-product-list/product/:id', component: ViewSingleProduct},
    ]
})

