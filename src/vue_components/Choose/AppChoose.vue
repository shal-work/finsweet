<template>
    <section class="choose">
        <h2 class="title choose__title">Choose A Catagory</h2>
        <div class="choose__container" >
            <div class="choose__item" :class="{choose__active: isActive[0]}">
                <picture class="pictogram">
                    <source type="image/webp" srcset="@/assets/img/ico_business_36.webp" media="(max-width: 412px)">
                    <source type="image/png" srcset="@/assets/img/ico_business_36.png" media="(max-width: 412px)">
                    <source type="image/webp" srcset="@/assets/img/ico_business_24.webp">
                    <img class="pictogram__ico" src="@/assets/img/ico_business_24.png" alt="ico_business" width="24" height="24"> 
                </picture>
                <h3 class="title title_sm">Business</h3>
                <p class="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                <button type="button" aria-label="Choose Business" class="btn-area" @click="clickView(0)"></button>
            </div>
            <div class="choose__item" :class="{choose__active: isActive[1]}">
                <picture class="pictogram">
                    <source type="image/webp" srcset="@/assets/img/ico_startup_36.webp" media="(max-width: 412px)">
                    <source type="image/png" srcset="@/assets/img/ico_startup_36.png" media="(max-width: 412px)">
                    <source type="image/webp" srcset="@/assets/img/ico_startup_24.webp">
                    <img class="pictogram__ico" src="@/assets/img/ico_startup_24.png" alt="ico_startup" width="24" height="24"> 
                </picture>
                <h3 class="title title_sm">Startup</h3>
                <p class="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                <button type="button" aria-label="Choose Startup" class="btn-area" @click="clickView(1)"></button>
            </div>
            <div class="choose__item" :class="{choose__active: isActive[2]}">
                <picture class="pictogram">
                    <source type="image/webp" srcset="@/assets/img/ico_economy_36.webp" media="(max-width: 412px)">
                    <source type="image/png" srcset="@/assets/img/ico_economy_36.png" media="(max-width: 412px)">
                    <source type="image/webp" srcset="@/assets/img/ico_economy_24.webp">
                    <img class="pictogram__ico" src="@/assets/img/ico_economy_24.png" alt="ico_economy" width="24" height="24"> 
                </picture>
                <h3 class="title title_sm">Economy</h3>
                <p class="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                <button type="button" aria-label="Choose Economy" class="btn-area" @click="clickView(2)"></button>
            </div>
            <div class="choose__item" :class="{choose__active: isActive[3]}">
                <picture class="pictogram">
                    <source type="image/webp" srcset="@/assets/img/ico_technology_36.webp" media="(max-width: 412px)">
                    <source type="image/png" srcset="@/assets/img/ico_technology_36.png" media="(max-width: 412px)">
                    <source type="image/webp" srcset="@/assets/img/ico_technology_24.webp">
                    <img class="pictogram__ico" src="@/assets/img/ico_technology_24.png" alt="ico_technology" width="24" height="24"> 
                </picture>
                <h3 class="title title_sm">Technology</h3>
                <p class="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                <button type="button" aria-label="Choose Technology" class="btn-area" @click="clickView(3)"></button>
            </div>
        </div>
        <div class="choose__special-post" v-if="props.isPageHome">
            <picture class="choose__picture-post">
                <source type="image/webp" :srcset="require('@/assets/img/' + currentCatagory.picture + '.webp')">
                <source type="image/webp" :srcset="require('@/assets/img/' + currentCatagory.picture + '_721.webp')" media="(max-width: 720px)">
                <source type="image/png" :srcset="require('@/assets/img/' + currentCatagory.picture + '_721.png')" media="(max-width: 720px)">
                <img class="choose__img" :src="require('@/assets/img/' + currentCatagory.picture + '.png')" :alt = currentCatagory.picture width="1065" height="705">
            </picture>
            <div class="choose__content-post">
                <p class="text text-uppercase choose__content-subtitle">{{ currentCatagory.subtitle }}</p>
                <h3 class="title choose__content-title title_content">{{currentCatagory.title }}</h3>
                <p class="text choose__content-text">{{ currentCatagory.text }}</p>
                <a :href=currentCatagory.href class=" btn btn-yellow ">Discover our story</a>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref } from "vue";
    const props = defineProps( {
        pState: Object,
        isPageHome: Boolean,
    });

    let allChoose = props.pState.choose.items;

    const currentCatagory = ref({
        id: allChoose[0].id,
        picture: allChoose[0].picture,
        subtitle: allChoose[0].subtitle,
        title: allChoose[0].title,
        text: allChoose[0].text,
        href: allChoose[0].href,
        active: allChoose[0].active
    });

    const isActive = ref([true, false, false, false]);
    const clickView = (n) => {
        isActive.value[0] = false;
        isActive.value[1] = false;
        isActive.value[2] = false;
        isActive.value[3] = false;
        isActive.value[n] = true;

        currentCatagory.value = {
            id: allChoose[n].id,
            picture: allChoose[n].picture,
            subtitle: allChoose[n].subtitle,
            title: allChoose[n].title,
            text: allChoose[n].text,
            href: allChoose[n].href,
            active: allChoose[n].active
        }; 
    }   




</script>
