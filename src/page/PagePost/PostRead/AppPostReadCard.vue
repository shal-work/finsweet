<template>
    <div class="post-read__item post">
        <div class="post-read__picture">
            <picture >
            <source type="image/webp" :srcset="require('@/assets/img/' + picture + '.webp')">
            <img class="post__img" :src="require('@/assets/img/' + picture + '.png')" :alt=picture width="490" height="318">
        </picture>
        </div>
        <p class="post__user post__color-black post-read__user">
            <span class="post__name post__color-purple">
                John Doe
            </span>
            <span class="post__date post__color-black">
                May 23, 2022
            </span>
        </p>
        <div class="post-read___text">
            <h2 class="title post-read__title-blog">
                {{title}}
            </h2>
            <p class="text">
                {{text}}
            </p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps( {
                post:  Object,
            });

    const picture = props.post.picture;
    const title = props.post.title;
    const text = props.post.text;
    
</script>
