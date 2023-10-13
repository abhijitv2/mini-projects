<template>
    <div class="profile-card">
        <div class="profile-pic">
            <img :src="props?.profile?.avatar_url" alt="profile pic" />
        </div>
        <div class="profile-data has-background-white">
            <div>{{ props.profile.name }}</div>
            <div>{{ props.profile.location }}</div>
            <RouterLink :to="`github-profile-viewer/${props.profile.login}`" class="has-background-link has-text-white p-2 mt-2 is-flex is-justify-content-center" >View Profile</RouterLink>
        </div>
    </div>
</template>


<script setup>

const props = defineProps({
    profile:{
        type:Object,
        required: true
    }
})
</script>