<template>
    <section class="list-authors">
        <h2 class="title list-authors__title">List of Authors</h2>
        <div class="list-authors__cards">
            <AppHomeListAuthorsCard v-for="item in allUsers"
                :key="item.id" 
                :user="item"
            />
        </div>
        <div class="logo-component">
            <div class="logo-component__text">
                <p class="text logo-component__subtext">We are</p>
                <p class="title logo-component__title">Featured in</p>
            </div>
            <div class="logo-component__wrapper">
                <picture class="logo-component__item">
                    <source type="image/webp" srcset="@/assets/img/logoipsum1.webp">
                    <img class="logo-component__ico" src="@/assets/img/logoipsum1.png" alt="logoipsum1" width="140" height="32"> 
                </picture>
                <picture class="logo-component__item">
                    <source type="image/webp" srcset="@/assets/img/logoipsum2.webp">
                    <img class="logo-component__ico" src="@/assets/img/logoipsum2.png" alt="logoipsum2" width="118" height="28"> 
                </picture>
                <picture class="logo-component__item">
                    <source type="image/webp" srcset="@/assets/img/logoipsum3.webp">
                    <img class="logo-component__ico" src="@/assets/img/logoipsum3.png" alt="logoipsum3" width="118" height="28"> 
                </picture>
                <picture class="logo-component__item">
                    <source type="image/webp" srcset="@/assets/img/logoipsum3.webp">
                    <img class="logo-component__ico" src="@/assets/img/logoipsum4.png" alt="logoipsum4" width="118" height="28"> 
                </picture>
                <picture class="logo-component__item">
                    <source type="image/webp" srcset="@/assets/img/logoipsum5.webp">
                    <img class="logo-component__ico" src="@/assets/img/logoipsum5.png" alt="logoipsum5" width="118" height="28"> 
                </picture>
            </div>
        </div>
    </section>
</template>

<script setup>
    import AppHomeListAuthorsCard from '@/vue_components/ListAuthors/AppListAuthorsCard.vue'

    const props = defineProps( {
        pState: Object
    });
    let allUsers = props.pState.users.items;

</script>
