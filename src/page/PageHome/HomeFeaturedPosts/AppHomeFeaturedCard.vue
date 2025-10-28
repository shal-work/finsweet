<template>
        <div class="featured-posts__content post">
            <picture class="featured-posts__picture">
                <source type="image/webp" :srcset="require('@/assets/img/' + picture + '_612.webp')">
                <img class="post__img" :src="require('@/assets/img/' + picture + '_612.png')" :alt=picture width="669" height="352">
            </picture>
            <p class="post__user post__color-black featured-posts__margin-bottom">
                <span class="post__name post__color-purple">
                    {{name}}
                </span>
                <span class="post__date post__color-black">
                    {{date}}
                </span>
            </p>
            <h2 class="title post__title featured-posts__margin-bottom">
                {{title}}
            </h2>
            <p class="text featured-posts__margin-bottom">
                {{text}}
            </p>
            <a :href = href class="btn btn-yellow featured-posts__margin-top">Read More</a>
        </div>
</template>


<script setup>
    const props = defineProps( {
                post:  Object
            });
    const picture = props.post.picture;
    const name = props.post.name;
    const date = props.post.date;
    const title = props.post.title;
    const text = props.post.text;
    const href = props.post.href;
</script>
