<template>
     <NavBar name="Github Profile Viewer" bgColor="white" txtColor="black" />
     <div v-if="result !== null && result !== undefined"  class="is-flex is-justify-content-center">
        <UserRepoCard :profile="result.profile"  :repos="result.repo"  />
    </div>
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue';
import UserRepoCard from '@/components/github-profile/UserRepoCard.vue'
import {reactive, watchEffect} from "vue";
import {useRoute} from 'vue-router';
import axios from 'axios';

const route = useRoute();
const result = reactive({ profile:{},
                        repo:{}
                        });


const fetchProfileRepos = async() => {
   const response = await axios.get(`https://api.github.com/users/${route.params.login}/repos`);
   result.repo = response.data;
   console.log("repo response :",response.data);
}


const fetchProfile = async () => {
   const response = await axios.get(`https://api.github.com/users/${route.params.login}`);
   result.profile = response.data;
   console.log("profile resp :",response.data);
   fetchProfileRepos();
}



watchEffect(()=>{
 fetchProfile();
})



</script>