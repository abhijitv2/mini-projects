<template>
    <div class="weather-app-wrapper">
    <NavBar name="Weather App" bgColor="info" txtColor="white" />

    <div class="weather-app-container">
        <div class="weather-search">
            <input class="input is-primary is-medium" type="text" placeholder="Enter location name..." v-model="cityname">
            <button class="button is-primary search" @click="searchWeather"><font-awesome-icon icon="magnifying-glass"
                    class="ms-2" style="color:#575757; padding:10px;" /></button>
        </div>

        <div class="weather-result" v-if="weatherData">
            <div class="place">
                <div class="place-name">{{ weatherData?.resolvedAddress }}</div>
                <div class="place-name"><span class="tooltip"><font-awesome-icon icon="sun" class="ms-2"
                            style="color:#f0db66;" /><span class="tooltiptext">Sunrise</span></span> {{
                                weatherData?.currentConditions?.sunrise }}
                </div>
            </div>
            <div class="temp-condition">
                <div class="temp">{{ weatherData?.currentConditions?.temp }}&deg;C</div>
                <div class="condition">{{ weatherData?.currentConditions?.conditions }}</div>
            </div>
            <div class="weather-details">
                <div class="detail">
                    <div class="points"><span class="tooltip"><font-awesome-icon icon="droplet" class="ms-2"
                                style="color:#6689c9;" /><span class="tooltiptext">Humidity</span></span> {{
                                    weatherData?.currentConditions?.humidity }}%</div>
                    <div class="points"><span class="tooltip"><font-awesome-icon icon="wind" class="ms-2"
                                style="color:#9ce0f5;" /><span class="tooltiptext">Wind Speed</span></span>{{
                                    weatherData?.currentConditions?.windspeed }} Km/hr</div>
                    <div class="points"><span class="tooltip"><font-awesome-icon icon="newspaper" class="ms-2"
                                style="color:#b6b6b6;" /><span class="tooltiptext">News</span></span>"{{
                                    weatherData?.description }}"</div>
                </div>
                <div class="detail">
                    <font-awesome-icon :icon=weatherIcon class="fa-6x" style="color:#61b0bb;" />
                </div>
            </div>
        </div>

        <progress v-if="!weatherData" class="progress is-large is-success mt-4" max="100" />
    </div>


    <div class="modal is-active p-2" v-if="modals.openModal">
        <div class="modal-background"></div>
        <div class="modal-card" ref="modalCardRef">
            <header class="modal-card-head has-background-warning">
                <p class="modal-card-title"><font-awesome-icon icon="triangle-exclamation" class="ms-2"
                            style="color:#444444;" /></p>
                <button class="delete" aria-label="close" @click="modals.openModal=false"></button>
            </header>
            <section class="modal-card-body">
               Sorry! Location not found. Please try some other city.
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end">
                <button class="button is-warning" @click="modals.openModal=false">Ok</button>                
            </footer>
        </div>
    </div>
</div>
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue';
import { useStoreWeather } from '@/stores/storeWeather.js';
import { onMounted, ref, reactive } from "vue";
import axios from 'axios';
import { onClickOutside } from '@vueuse/core'

let weatherResult = ref(null);
let api_key = '6Q7YKYCXX35SLVXW8NZGLYN4Q';
// let searchCity = ref('mumbai');
let base_url = 'https://weather.visualcrossing.com';
let storeWeather = useStoreWeather();
const weatherData = ref('');
const cityname = ref('mumbai');
const weatherIcon = ref('');
const modalCardRef = ref(null);

const searchWeather = () => {
    axios.get(`${base_url}/VisualCrossingWebServices/rest/services/timeline/${cityname.value}/next4days?unitGroup=metric&key=${api_key}`).then(res => {
        weatherData.value = res.data;
        weatherIcon.value = displayWeatherIcon(weatherData.value?.currentConditions?.conditions)
    }).catch((err)=>{ if(err.response.status == 400){ modals.openModal=true}})

}



onMounted(() => {
    axios.get(`${base_url}/VisualCrossingWebServices/rest/services/timeline/${cityname.value}/next4days?unitGroup=metric&key=${api_key}`).then((res) => {
        weatherData.value = res.data;
        if (weatherData !== undefined)
            weatherIcon.value = displayWeatherIcon(weatherData.value?.currentConditions?.conditions)
    });

})


const displayWeatherIcon = (condition) => {
    if (condition.includes('Rain, Partially cloudy'))
        return "cloud-sun-rain";
    if (condition.includes('Rain, Overcast'))
        return "cloud-rain";
    if (condition.includes('Partially cloudy'))
        return "cloud-sun";
    if (condition.includes('Clear'))
        return "sun";
    if (condition.includes('Rain'))
        return "cloud-rain";

}


const modals = reactive({
  openModal: false
})

onClickOutside(modalCardRef, ()=> {modals.openModal =false})

</script>


<style scoped>
.weather-app-wrapper{
    background: #0a323e;
    padding-bottom:50px;
}
</style>