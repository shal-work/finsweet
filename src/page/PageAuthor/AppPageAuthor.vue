<template>

    <main class="main">
        <h1 class="visually-hidden">Finsweet web-site for verstaem.online</h1>

        <div class="author">
            <div class="author__header">
                <div class="author__block">
                    <picture class="author__picture">
                        <source type="image/webp" srcset="@/assets/img/author_377.webp" media="(max-width: 412px)" >
                        <source type="image/png" srcset="@/assets/img/author_377.png" media="(max-width: 412px)">
                        <source type="image/webp" srcset="@/assets/img/author_251.webp">
                        <img src="@/assets/img/author_251.png" alt='author' width="251" height="294">
                    </picture>
                    <div class="post author__header-post">
                        <div class="author__block-text">
                            <h2 class="title title_lg author__header-title">Hey there, I’m Andrew Jonhson and welcome to my Blog</h2>
                            <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                        <div class="author__social">
                            <AppSocialIcon color="color-dark"/>
                        </div>
                    </div>
                    <div class="decor author__decor">
                        <div class="decor__yellow"></div>
                        <div class="decor__purple"></div>
                    </div>
                </div>
            </div>

            <div class="case">
                <div class="author__my-posts">
                    <h2 class="title title_lg author__title">My Posts</h2>
                    <div class="post author__post">
                        <div class="author__post-picture">
                            <picture class="author__picture">
                                <source type="image/webp" srcset="@/assets/img/featured_post_1_412.webp">
                                <img class="author__img" src="@/assets/img/featured_post_1_412.png" alt='startup' width="490" height="318">
                            </picture>
                        </div>

                        <div class="author__post-text">
                            <p class="text text-uppercase post__subtitle post__color-purple">BUSINESS</p>
                            <h2 class="title post__title-blog">Font sizes in UI design: The complete guide to follow</h2>
                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div class="post author__post">
                        <div class="author__post-picture">
                            <picture class="author__picture">
                                <source type="image/webp" srcset="@/assets/img/my_post_412.webp">
                                <img class="author__img" src="@/assets/img/my_post_412.png" alt='startup' width="490" height="318">
                            </picture>
                        </div>

                        <div class="author__post-text">
                            <p class="text text-uppercase post__subtitle post__color-purple">ECONOMY</p>
                            <h2 class="title post__title-blog">How to build rapport with your web design clients</h2>
                            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<script setup>
    import AppSocialIcon from '@/vue_components/SocialIcon/AppSocialIcon' 

    const props = defineProps( {
        pState: Object,
        pDispatch: Function
    });

</script>
