<template>
    <section class="blog-header">
        <div class="post blog-header__wrep">
            <div class="blog-header__item">
                <p class="post__info text-uppercase post__color-black">
                    Featured Post
                </p>
                <h2 class="title post__title-blog blog-header__title">
                    Step-by-step guide to choosing great font pairs
                </h2>
                <p class="post__user post__color-black blog-header__user">
                    <span class="post__name post__color-purple">
                        John Doe
                    </span>
                    <span class="post__date post__color-black">
                        May 23, 2022
                    </span>
                </p>
                <p class="text blog-header__text">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <a href="#" class="btn btn-yellow text-nobreak">Read More</a>
            </div>
            <!-- <div class="post__picture blog-header__item"> -->
                <picture class="post__picture blog-header__item blog-header__picture">
                    <source type="image/png" srcset="@/assets/img/blog_header_515.png" media="(max-width: 1440px)">
                    <source type="image/webp" srcset="@/assets/img/blog_header_515.webp" media="(max-width: 1440px)">
                    <source type="image/webp" srcset="@/assets/img/blog_header_738.webp">
                    <source type="image/png" srcset="@/assets/img/blog_header_738.png">
                    <img class="post__img" src="@/assets/img/blog_header_515.png" alt='blog_header' width="515" height="359">
                </picture>
            <!-- </div> -->
        </div>
    </section>
</template>
