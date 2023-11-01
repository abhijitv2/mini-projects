<template>
    <div class="mini-projects">

        <div class="app-card" @click="$router.push('/note-taking-app')">
            <div class="app-card-image1">
                <img src="../../assets/images/note.jpg" />
            </div>
            <div class="app-card-detail1">
                <h5 class="app-name1">Note Taking App</h5>
                <p class="app-desc1">This app allows you to create new notes, edit and delete them.</p>
            </div>
        </div>

        <div class="app-card" @click="$router.push('/task-manager')">
            <div class="app-card-image2">
            </div>
            <div class="app-card-detail2">
                <h5 class="app-name2">Task Manager App</h5>
                <p class="app-desc2">Allows you to create new task, edit and mark them as completed</p>
            </div>
        </div>

        <div class="app-card" @click="$router.push('/weather-app')">
            <div class="app-card-image3">
            </div>
            <div class="app-card-detail3">
                <h5 class="app-name2">Weather App</h5>
                <p class="app-desc2">Know the weather condition of any city.</p>
            </div>
        </div>

        <div class="app-card" @click="$router.push('/trivia-quiz')">
            <div class="app-card-image4">
            </div>
            <div class="app-card-detail4">
                <h5 class="app-name2">Trivia Quiz</h5>
                <p class="app-desc2">Play Quiz and Test your Knowledge</p>
            </div>
        </div>


        <div class="app-card" @click="$router.push('/github-profile-viewer')">
            <div class="app-card-image5">
            </div>
            <div class="app-card-detail5">
                <h5 class="app-name2">Github Profile Viewer</h5>
                <p class="app-desc2">Search and View any Github profile</p>
            </div>
        </div>

        <div class="app-card" @click="$router.push('/movie-search-app')">
            <div class="app-card-image6">
            </div>
            <div class="app-card-detail6">
                <h5 class="app-name2">Movie Search App</h5>
                <p class="app-desc2">Search and View your favorite Movie details</p>
            </div>
        </div>


        <div class="app-card" @click="$router.push('/ecommerce-product-list')">
            <div class="app-card-image7">
            </div>
            <div class="app-card-detail7">
                <h5 class="app-name2">Ecommerce Product List</h5>
                <p class="app-desc2">Search and View your favorite Movie details</p>
            </div>
        </div>





    </div>
</template>

<script setup>
</script>