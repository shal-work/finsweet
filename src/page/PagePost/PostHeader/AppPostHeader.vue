<template>
    <div class="post-header">
        <div class="nickname post-header__nickname">
            <div class="nickname__photo post-header__photo">
                <picture >
                    <source type="image/webp" srcset="@/assets/img/floyd_miles_84.webp" media="(max-width: 412px)">
                    <source type="image/png" srcset="@/assets/img/floyd_miles_84.png" media="(max-width: 412px)">
                    <source type="image/webp" srcset="@/assets/img/floyd_miles_48.webp">
                    <img class="nickname__img" src="@/assets/img/floyd_miles_48.png"  alt="currentPost.photo" width="48" height="72"> 
                </picture>
            </div>

            <div class="nickname__info">
                <p class="nickname__name nickname__name_color-purple post-header__name">Andrew Jonson</p>
                <p class="text text_color-medium-grey post-header__text">Posted on 27th January 2022</p>
            </div>
        </div>
        <h2 class="title post-header__title">
            Step-by-step guide to choosing great font pairs
        </h2>
        <div class="post-header__category">
            <picture class="pictogram post-header__pictogram">
                <source type="image/webp" srcset="@/assets/img/ico_startup_36.webp">
                <img class="post-header__ico" src="@/assets/img/ico_startup_36.png" alt="ico_startup" width="24" height="24"> 
            </picture>
            <h3 class="title post-header__title-category">Startup</h3>
        </div>
    </div>
</template>
