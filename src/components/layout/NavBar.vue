<template>
    <nav class="navbar" :class="`has-background-${props.bgColor}`" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 font-weight-700 spaced-text" :class="`has-text-${txtColor}`">{{ props.name }}</div>
                <button class="is-pulled-right button is-dark is-align-self-center" @click="goToHome" >Home</button>
                <a role="button"  class="navbar-burger"  aria-label="menu" aria-expanded="false" ref="navbarBurgerRef"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            
        </div>

    </nav>
</template>


<script setup>
import {useRouter} from 'vue-router';
const router = useRouter();

const props = defineProps({
    name:{
        type:String,
        required:true,
        default:"Mini Project"
    },
    bgColor:{
        type:String,
        default:"black"
    },
    txtColor:{
        type:String,
        default:"white"
    }
})

const goToHome = () =>{
    router.push({ name: "home" });
}

</script>