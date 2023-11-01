
<template>
    <NavBar name="Movie Search App" bgColor="danger" txtColor="white" />
    <div class="movies-search">
        <input class="input is-medium" type="text" placeholder="Search Movie..." v-model="searchTerm"  >
    </div>
    

    <div class="movie-result">

        <div v-if="result === 0" class="animate-text">Please type movie name to search..</div>

        <div v-else-if="result" class="card-grid-item">
            <MovieCard :movie="result" />
        </div>
    </div>
</template>



<script setup>
/* api key :  a7821f3454f97a37cae012a6ab25c19a
https://api.themoviedb.org/3/search/movie?api_key=a7821f3454f97a37cae012a6ab25c19a&query=
*/
import NavBar from "@/components/layout/NavBar.vue";
import MovieCard from "../../components/movies/MovieCard.vue";
import { computed, ref, watchEffect, onMounted, watch } from "vue";
import axios from "axios";

const searchTerm = ref("");
const result = ref()


const checkIfBlank = (response) =>{
    if(response.data.Error)
    {
        return 0
    }
    else
    {
        return response.data
    }
}


const fetchMovie = async () => {
   const response = await axios.get(`https://www.omdbapi.com/?t=${searchTerm.value}&page=1&apikey=dbee93e2`);
   console.log("response :",response);
   result.value = checkIfBlank(response);
   
}




onMounted(()=>{
    fetchMovie();
})

watch(searchTerm,(newVal,oldVal)=>{
    if(newVal !== oldVal && newVal.length>1)
    {
        fetchMovie();
    }
})


</script>

<style scoped>


.animate-text
{
   text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #161618 0%,
    #6a5086 29%,
    #ff1361 67%,
    #d6d370 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
      font-size: 16px;
      font-weight: bold;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

</style>