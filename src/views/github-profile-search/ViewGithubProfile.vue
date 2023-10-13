<template>
  <NavBar name="Github Profile Viewer" bgColor="white" txtColor="black" />
  <div class="github-profile-search">
    
            <input class="input is-medium" type="text" placeholder="Enter profile name..." v-model="searchTerm">
            <button class="button is-link search" @click="fetchProfile"><font-awesome-icon icon="magnifying-glass"
                    class="ms-2 " style="color:#ffffff; padding:10px;" /></button>
       
    </div>

    <div v-if="result !== null && result !== undefined"  class="is-flex is-justify-content-center">
        <ProfileCard :profile="result"  />
    </div>
</template>


<script setup >
import NavBar from '@/components/layout/NavBar.vue';
import ProfileCard from '@/components/github-profile/ProfileCard.vue';
import {ref} from "vue";
import axios from 'axios';


const searchTerm = ref("");
const result = ref();



const fetchProfile = async () => {
   const response = await axios.get(`https://api.github.com/users/${searchTerm.value}`);
   
   result.value = response.data;
   console.log("response :",response.data);
   
}


</script>