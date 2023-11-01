<template>
<div class="card">
   <header class="card-header">
    <p class="card-header-title">
      {{ props?.movie?.Title }}
    </p>
  </header>
   
  <div class="card-content">
    <div class="content">
      <div class="card-image">
         <figure class="image is-16by9"><img :src="props.movie.Poster" alt=""></figure>
      </div>
      <div class="p-4">
         <p class="movie-detail">Movie Name : {{ props.movie.Title }}({{ props.movie.Year }})</p>
         <p class="movie-detail">Released : {{ props.movie.Released }}</p>
         <p class="movie-detail">Genre : {{ props.movie.Genre }}</p>
         <p class="movie-detail">Actors : {{ props.movie.Actors }}</p>
         <p class="movie-detail">Directed By : {{ props.movie.Director }}</p>
         <p class="movie-detail">IMDB Rating : {{ props.movie.imdbRating }}</p>
         <p class="movie-detail">Plot : {{ props.movie.Plot }}</p>
         <p class="movie-detail">BoxOffice Collection : {{ props.movie.BoxOffice }}</p>
         <p class="movie-detail">Awards : {{ props.movie.Awards }}</p>
         <p class="movie-detail">Languages : {{ props.movie.Language }}</p>
      </div>
    </div>
  </div>

     
   </div>

</template>


<script setup>

const props = defineProps({
    movie:{
        type: Object, 
        required:true
        }
})

</script>

<style scoped>


.card{
  box-shadow: 1px 1px 70px 2px #000;
}

.content figure{
  margin-left:0px !important;
  margin-right:0px !important;
}

.card-content{
  padding:0px !important;
}

.card-content:last-child{
  border-bottom-left-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
}

.card-image:first-child img{
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
  height:400px;
}

.card-image{
  height:400px;
}

</style>