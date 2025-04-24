<template>
    <div class="list-authors__card">
        <div class="list-authors__picture">
            <picture>
                <source type="image/webp" :srcset="require('@/assets/img/' + user.photo + '_128.webp')">
                <img class="list-authors__img" :src="require('@/assets/img/' + user.photo + '_128.png')" :alt=user.photo width="128" height="192">
            </picture>
            <RouterLink to="/author" class="btn-area" aria-label="Page Author"></RouterLink>
        </div>
        <p class="title list-authors__name">{{ user.namme }}</p>
        <p class="text list-authors__writer">Content Writer {{ user.nick }}</p>
        <div class="list-authors__social">
            <AppSocialIcon color="color-dark"/>
        </div>
    </div>
</template>

<script setup>
    import AppSocialIcon from '@/vue_components/SocialIcon/AppSocialIcon' 
     const props = defineProps( {
        user: Object
    });
    let user = props.user;
</script>
