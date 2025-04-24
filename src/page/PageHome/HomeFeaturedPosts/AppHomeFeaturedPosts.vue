<template>
    <section class="featured-posts">
        <div class="featured-posts__left" v-if="isResize">
            <div class="featured-posts__header">
                <h2 class="title featured-posts__title">
                    Featured Post
                </h2>
            </div>
            <AppHomeFeaturedCard 
                :post="currentPost" 
                :key="currentPost.id"/>
        </div>

        <div class="featured-posts__left" v-else>
            <div class="featured-posts__header">
                <h2 class="title featured-posts__title-header">
                    Featured Post
                </h2>
                <button type="button" aria-label="Выбор" class="featured-posts__link underline-anime" @click="clickView">
                    {{ buttonText }}
                </button>
            </div>

            <template v-if="isClickView">
                <AppHomeFeaturedCard v-for="item in listPostPart" 
                    :key ="item.id" 
                    :post ="item"/>
            </template>
            <template v-else>
                <AppHomeFeaturedCard v-for="item in allPost" 
                    :key="item.id" 
                    :post="item"/>
            </template>
        </div>

        <div class="featured-posts__right" v-if="isResize">
            <div class="featured-posts__header">
                <h2 class="title featured-posts__title">
                    All Posts
                </h2>
                <button type="button" aria-label="Выбор" class="featured-posts__link underline-anime" @click="clickView">
                    {{ buttonText }}
                </button>
            </div>
            <div class="featured-posts__list" v-if="isClickView" >
                <AppHomePostList v-for="(item, index) in listPostPart"  
                    :key="forceRenderKey + index" :post="item"
                    :index="index" 
                    :currentNumberPost="currentNumberPost"
                    @omSelect="selectPart" />
            </div>
            <div class="featured-posts__list" v-else>
                <AppHomePostList v-for="(item, index) in allPost" 
                    :key="forceRenderKey + index" 
                    :post="item" :index="index"
                    :currentNumberPost="currentNumberPost"
                    @omSelect="selectAll" />
            </div>
        </div>
    </section>
</template>


<script setup>
    import AppHomeFeaturedCard from '@/page/PageHome/HomeFeaturedPosts/AppHomeFeaturedCard.vue'
    import AppHomePostList from '@/page/PageHome/HomeFeaturedPosts/AppHomePostList.vue'
    import { activPostCreator } from '@/redux/featured-posts-reduser'
    import { ref } from "vue";

    const props = defineProps( {
        pState: Object,
        pDispatch: Function
    });

    const isClickView = ref(true);
    let allPost = props.pState.featuredPosts.items;
    //начальное количество постов
    const numberInitialPosts = 4;
    const listPost = allPost.slice(0, numberInitialPosts);
    const listPostPart = listPost;
    const listPostAll = allPost;

    const currentNumberPost = ref(0);
    const forceRenderKey = ref(0);
    const buttonText = ref('View All');

    const currentPost = ref({
        id: listPostPart[0].id,
        picture: listPostPart[0].picture,
        name: listPostPart[0].name,
        date: listPostPart[0].date,
        title: listPostPart[0].title,
        text: listPostPart[0].text,
        href: listPostPart[0].href,
        active: listPostPart[0].active,
    });

    function handheldCurrent(val) {
        if (isClickView.value) {
            let foundObject = listPostPart.filter(itm => itm.id == val)[0];
            currentPost.value.id = foundObject.id;
            currentPost.value.picture = foundObject.picture;
            currentPost.value.name = foundObject.name;
            currentPost.value.date = foundObject.date;
            currentPost.value.title = foundObject.title;
            currentPost.value.text = foundObject.text;
            currentPost.value.href = foundObject.href;
            currentPost.value.active = foundObject.active;
        } else {
            let foundObject = listPostAll.filter(itm => itm.id == val)[0];
            currentPost.value.id = foundObject.id;
            currentPost.value.picture = foundObject.picture;
            currentPost.value.name = foundObject.name;
            currentPost.value.date = foundObject.date;
            currentPost.value.title = foundObject.title;
            currentPost.value.text = foundObject.text;
            currentPost.value.href = foundObject.href;
            currentPost.value.active = foundObject.active;
        }
    };

    const selectPart = (val) => {
        props.pDispatch(activPostCreator(val + 1));
        handheldCurrent(val + 1);
        forceRenderKey.value = (Date.now());
        currentNumberPost.value = val;
        
    }
    const selectAll = (val) => {
        props.pDispatch(activPostCreator(val + 1));
        handheldCurrent(val + 1);
        forceRenderKey.value = (Date.now());
        currentNumberPost.value = val;
    }

    const clickView = () => {
        isClickView.value = !isClickView.value;
        allPost = props.pState.featuredPosts.items;
        buttonText.value = isClickView.value ? 'View All' : 'View Part';
    }

    const isResize = ref(true);

    window.addEventListener('DOMContentLoaded', (e) => {
        isResize.value = e.currentTarget.innerWidth > 767 ? true : false;
    });
    window.addEventListener('resize', (e) => {
        isResize.value = e.currentTarget.innerWidth > 767 ? true : false;
    });

</script>
