<template>
    <section class="all-posts">
        <div class="all-posts__header">
                <h2 class="title">
                    All posts
                </h2>
            </div>
            <AppBlogAllPostsCard v-for="item in allPost" 
                    :key="item.id" 
                    :post="item"/>

            <div class="all-posts__control control">
                <button  type="button" aria-label="Prev" class="all-posts__prev all-posts__btn zoom-hover"  @click="clickPrev">
                    Prev
                </button>
                <button  type="button" aria-label="Next" class="all-posts__next all-posts__btn zoom-hover all-posts__btn-active"  @click="clickPrev">
                    Next
                </button>
            </div>       

    </section>
</template>


<script setup>
    import AppBlogAllPostsCard from '@/page/PageBlog/BlogAllPosts/AppBlogAllPostsCard.vue'

    const props = defineProps( {
        pState: Object
    });


    let allPost = props.pState.pageAllPost.items;
 
</script>
