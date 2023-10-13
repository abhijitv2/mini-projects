import { defineStore } from "pinia"

export const useStoreWeather = defineStore('storeWeather', {
    state: () => {
        return {
            weatherCondition: []
        }
    },
    actions: {
       addWeatherDetail(data){
            this.weatherCondition.push(data);
       }
    },
    getters: {
        // getTaskContent: (state) => {
        //     return (id) => { return state.tasks.filter((item) => { return item.id === id })[0].content }
        // }
    }
})

