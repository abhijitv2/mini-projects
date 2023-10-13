import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import {router} from "@/router/index.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {

    faPen, faTrash, faCircleCheck, faDroplet, faWind,

    faCheck, faArrowUpRightFromSquare, faCloud, faTriangleExclamation,

    faArrowsRotate, faMagnifyingGlass, faSun, faNewspaper, faCloudSunRain, faCloudRain, faCloudSun

} from "@fortawesome/free-solid-svg-icons";

library.add(faPen, faTrash, faSun, faDroplet, faWind, faNewspaper, faMagnifyingGlass, faCloudSunRain, faCloudRain, faCloudSun, faCircleCheck, faCheck, faTriangleExclamation,

    faArrowUpRightFromSquare,

    faCloud, faArrowsRotate,

    faMagnifyingGlass);

 

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(createPinia())

app.use(router)

app.use(FontAwesomeIcon)

app.mount('#app')
