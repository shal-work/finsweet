<template>
    <ul class="menu reset">
        <li class="menu__item">
            <RouterLink to="/" class="menu__link text-nobreak underline-anime" aria-label="Page Home">Home</RouterLink>
        </li>
        <li class="menu__item">
            <RouterLink to="/blog" class="menu__link text-nobreak underline-anime" aria-label="Page Blog">Blog</RouterLink>
        </li>
        <li class="menu__item">
            <RouterLink to="/about" class="menu__link text-nobreak underline-anime" aria-label="Page Blog">About Us</RouterLink>
        </li>
        <li class="menu__item">
            <RouterLink to="/contact" class="menu__link text-nobreak underline-anime" aria-label="Page Blog">Contact us</RouterLink>
        </li>
        <li class="menu__item">
            <RouterLink to="/policy" class="menu__link text-nobreak underline-anime" aria-label="Page Blog" :class="{'menu__policy': props.isBtn}">Privacy Policy</RouterLink>
        </li>
        <li v-if="props.isBtn">
            <a href="#" class="header__btn btn btn-light text-nobreak">Subscribe</a>
        </li>
    </ul>
</template>

<script setup>
    const props = defineProps( {
        isBtn: Boolean,
    });
    
</script>
