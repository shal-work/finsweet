<template>
    <main class="main">
        <h1 class="visually-hidden">Finsweet web-site for verstaem.online</h1>
        <div class="category">
            <div class="category__header">
                <h2 class="title category__title">Business</h2>
                <p class="text category__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore.</p>
                <p class="text category__subtitle text-uppercase">Blog > Business</p>
            </div>
            <div class="case">
                <div class="category__content">
                    <div class="category__left">
                        <div class="category__content-item post">
                            <div class="category__picture-btn">
                                <picture class="category__picture">
                                    <source type="image/webp" srcset="@/assets/img/startup1_490.webp">
                                    <img class="post__img" src="@/assets/img/startup1_490.png"
                                        alt='startup' width="490" height="318">
                                </picture>
                            </div>
                            <div class="category__content-text">
                                <p class="text text-uppercase post__subtitle post__color-purple">Startup</p>
                                <h2 class="title post__title-blog">Design tips for designers that cover everything you
                                    need</h2>
                                <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div class="category__content-item post">
                            <div class="category__picture-btn">
                                <picture class="category__picture">
                                    <source type="image/webp" srcset="@/assets/img/startup1_490.webp">
                                    <img class="post__img" src="@/assets/img/startup1_490.png"
                                        alt='startup' width="490" height="318">
                                </picture>
                            </div>
                            <div class="category__content-text">
                                <p class="text text-uppercase post__subtitle post__color-purple">Startup</p>
                                <h2 class="title post__title-blog">Step-by-step guide to choosing great font pairs</h2>
                                <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div class="category__content-item post">
                            <div class="category__picture-btn">
                                <picture class="category__picture">
                                    <source type="image/webp" srcset="@/assets/img/startup1_490.webp">
                                    <img class="post__img" src="@/assets/img/startup1_490.png"
                                        alt='startup' width="490" height="318">
                                </picture>
                            </div>
                            <div class="category__content-text">
                                <p class="text text-uppercase post__subtitle post__color-purple">Startup</p>
                                <h2 class="title post__title-blog">Design tips for designers that cover everything you
                                    need</h2>
                                <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                    </div>
                    <div class="category__right">
                        <div class="category__block">
                            <h2 class="title category__title">Categories</h2>
                            <AppCategories/>
                        </div>
                        <h2 class="title category__title">All Tags</h2>
                        <div class="tags">
                            <div class="tags__item">
                                <p class="text tags__text tags__item50">Business</p>
                                <p class="text tags__text tags__item50">Experience</p>
                            </div>
                            <div class="tags__item">
                                <p class="text tags__text tags__item30">Screen</p>
                                <p class="text tags__text tags__item70">Technology</p>
                            </div>
                            <div class="tags__item">
                                <p class="text tags__text tags__item70">Marketing</p>
                                <p class="text tags__text tags__item30">Life</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<script setup>

import AppCategories from '@/vue_components/Categories/AppCategories.vue'

    const props = defineProps( {
        pState: Object,
        pDispatch: Function
    });

</script>
