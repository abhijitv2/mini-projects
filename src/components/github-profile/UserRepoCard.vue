<template>
<div class="profile-container container is-max-widescreen">
    <div class="profile-section mb-6 p-4">
        <div class="profile-photo">
            <img :src="props?.profile?.avatar_url" alt="profile pic"  />
        </div>
        <div>
            <div class="has-text-weight-semibold">{{ props.profile.name }}</div>
            <div>{{ props.profile.location }}</div>
            
            <div class="pt-4 pr">Public Repositories: {{ props.profile.public_repos }}</div>
            <div class="pr">Followers: {{ props.profile.followers }} <span class="ml-4">Following: {{ props.profile.following }}</span></div>
            <div class="pr">Public Repositories: {{ props.profile.public_repos }}</div>
        </div>
    </div>
    <div class="repo-section p-4 ml-4">
        <p class="has-text-weight-bold is-size-4">Repositories</p>
            <div v-for="repo in props?.repos" class="p-2">
                <ul>
                    <li class="pb-4">
                    <p class="has-text-weight-semibold"> {{ repo.name }}</p>
                    <div>Link: <a  :href='repo.clone_url' target="_blank">{{ repo.clone_url }}</a></div>
                    </li>
                </ul>
            </div>
    </div>
</div>
</template>

<script setup>

const props = defineProps({
    profile:{
        type:Object,
        required:true,
    },
    repos:{
        type:Object,
        required:true,
    }

})

</script>


<style scoped>
.profile-container{
    background: #fff;
}

.profile-section{
    display: flex;
    gap:20px;
}

.profile-photo img{
border-radius: 8px;
width:200px;
height:200px;
}

ul li{
    list-style-type:disc;
}

.pr{
    font-size: 14px;
    padding-bottom: 10px;
}
</style>