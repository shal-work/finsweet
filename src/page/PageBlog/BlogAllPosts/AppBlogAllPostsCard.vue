<template>
    <div class="all-posts__content post">
        <div class="all-posts__picture-btn">
            <picture class="all-posts__picture">
                <source type="image/webp" :srcset="require('@/assets/img/' + picture + '.webp')">
                <img class="post__img" :src="require('@/assets/img/' + picture + '.png')" :alt=picture width="490" height="318">
            </picture>
            <RouterLink :to="href" class="btn-area" aria-label="Blog Post"></RouterLink>
        </div>

        <div class="all-posts__text">
            <p class="text text-uppercase post__subtitle post__color-purple">{{ subtitle }}</p>
            <h2 class="title post__title-blog">
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
    const subtitle = props.post.subtitle;
    const text = props.post.text;
    let href = '';
    switch (props.post.href) {
        case 'post':
            href = '/blog/post';
        break;
        case 'business':
            href = '/blog/business';
        break;
    }
</script>
