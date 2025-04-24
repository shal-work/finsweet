<template>
    <section class="testimonials">
        <div class="testimonials__block">
            <p class="text text-uppercase testimonials__subtext">testimonials</p>
            <h3 class="title testimonials__title">What people say about our blog</h3>
            <p class="text testimonials__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div class="testimonials__slider" @touchmove="moveDrag" @touchstart="startDrag" @touchend="endDrag"  :class="{'fadeIn': isfadeIn}">
            <p class="testimonials__messages" :style="{'transform': `translateX(${trans}px)`}" :class="{'transformInMinus': isTransformInMinus, 'fadeOut': isfadeOut, 'transformInPlus': isTransformInPlus, }">{{currentPost.message}}</p>
            <div class="testimonials__row">
                <div class="nickname">
                    <picture class="nickname__photo">
                        <source type="image/webp" :srcset="require('@/assets/img/' + currentPost.photo + '_84.webp')" media="(max-width: 767px)">
                        <source type="image/png" :srcset="require('@/assets/img/' + currentPost.photo + '_84.png')" media="(max-width: 767px)">
                        <source type="image/webp" :srcset="require('@/assets/img/' + currentPost.photo + '_48.webp')" >
                        <img class="nickname__img" :src="require('@/assets/img/' + currentPost.photo + '_48.png')"  :alt=currentPost.photo width="48" height="72"> 
                    </picture>
                     
                    <div class="nickname__info">
                        <p class="nickname__name">{{ currentPost.name }}</p>
                        <p class="text text_color-medium-grey">{{ currentPost.city }}, {{ currentPost.country }}</p>
                    </div>
                </div>
                <div class="control">
                    <button v-if="!isActivePrev" type="button" aria-label="Prev" class="testimonials__btn testimonials__prev"  @click="clickPrev">
                        <svg  width="23" height="14" viewBox="0 0 23 16" :class="{'testimonials__arrow-active': isActivePrev, 'testimonials__arrow-disable': !isActivePrev}">
                            <use  xlink:href="@/assets/img/spriteArrows.svg#left-arrow-disabled"></use>
                        </svg>
                    </button>

                    <button v-if="isActivePrev" type="button" aria-label="Next" class="testimonials__btn testimonials__prev testimonials__btn-active"  @click="clickPrev">
                        <svg  width="26" height="14" viewBox="0 0 28 16"  :class="{'testimonials__arrow-active': isActivePrev, 'testimonials__arrow-disable': !isActivePrev}">
                            <use  xlink:href="@/assets/img/spriteArrows.svg#left-arrow-active"></use>
                        </svg>
                    </button>

                    <button v-if="isActiveNext" type="button" aria-label="Next" class="testimonials__btn testimonials__next testimonials__btn-active" @click="clickNext(true)">
                        <svg width="26" height="14" viewBox="0 0 28 16" :class="{'testimonials__arrow-active': isActiveNext, 'testimonials__arrow-disable': !isActiveNext}">
                            <use xlink:href="@/assets/img/spriteArrows.svg#right-arrow-active"></use>
                        </svg>
                    </button>
                    <button v-if="!isActiveNext" type="button" aria-label="Prev" class="testimonials__btn testimonials__next" @click="clickNext(true)">
                        <svg width="26" height="14" viewBox="0 0 28 16" :class="{'testimonials__arrow-active': isActiveNext, 'testimonials__arrow-disable': !isActiveNext}">
                            <use xlink:href="@/assets/img/spriteArrows.svg#right-arrow-disabled"></use>
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from "vue";

    const props = defineProps( {
        pState: Object
    });
    const isActiveNext = ref(false);
    const isActivePrev = ref(false);
    const isfadeIn = ref(false);
    const isTransformInMinus = ref(false);
    const isTransformInPlus = ref(false);
    const isfadeOut = ref(false);

    const trans = ref(0);
    let allUsers = props.pState.users.items;
    const index = ref(1);
    const currentPost = ref({
        id: allUsers[0].id,
        name: allUsers[0].name,
        photo: allUsers[0].photo,
        nick: allUsers[0].nick,
        country: allUsers[0].country,
        city: allUsers[0].city,
        message: allUsers[0].message
    });

    const amount = props.pState.users.amountUsers;

    isActiveNext.value = true;
    isActivePrev.value = false;
    
    const clickPrev = (isVar)=> {
        
        index.value == 1 ? index.value : index.value--;
        handheldCurrent(index.value);
        handheldIndex();

        if (isVar) {
            isTransformInMinus.value = false;
            const funIsfadeOut = () => {
                isfadeOut.value = true;
                setTimeout(funTransformOut, 100);
            }
            const funIsfadeIn = () => {
                isfadeOut.value = false;
            }
            const funTransformIn = () => {
                isTransformInPlus.value = true;
                setTimeout(funIsfadeOut, 100);
            }
            const funTransformOut = () => {
                isTransformInPlus.value = false;
                setTimeout(funIsfadeIn, 500);
            }
            if (index.value < amount)  {
                setTimeout(funTransformIn, 12);
            }
        } else {
            setTimeout(function () { 
                index.value == 1 ? isfadeIn.value = false  : isfadeIn.value = true;
            }, 12); 
        }
    }
    const clickNext = (isVar)=> {
        index.value >= amount ? index.value : index.value++;
        handheldCurrent(index.value);
        handheldIndex();
        isfadeIn.value = false;
        isTransformInPlus.value = false;
        if (isVar) {
            const funIsfadeOut = () => {
                isfadeOut.value = true;
                setTimeout(funTransformOut, 100);
            }
            const funIsfadeIn = () => {
                isfadeOut.value = false;
            }

            const funTransformIn = () => {
                isTransformInMinus.value = true;
                setTimeout(funIsfadeOut, 100);
            }
            const funTransformOut = () => {
                isTransformInMinus.value = false;
                setTimeout(funIsfadeIn, 500);
            }
            if (index.value < amount)  {
                setTimeout(funTransformIn, 12);
            }
        } else {
            setTimeout(function () { 
                index.value >= amount ? isfadeIn.value = false  : isfadeIn.value = true;
            }, 12);
        }

    } 

    const handheldCurrent = (val) => {
        let foundObject = allUsers.filter(itm => itm.id == val)[0];
        currentPost.value.id = foundObject.id;
        currentPost.value.name = foundObject.name;
        currentPost.value.photo = foundObject.photo;
        currentPost.value.nick = foundObject.nick;
        currentPost.value.country = foundObject.country;
        currentPost.value.city = foundObject.city;
        currentPost.value.message = foundObject.message;
    };

    const handheldIndex = () => {
        if (index.value > 1 && index.value < amount) {
            isActiveNext.value = true;
            isActivePrev.value = true;
            
        } else if (index.value == 1) {
            isActiveNext.value = true;
            isActivePrev.value = false;
        } else if (index.value >= amount) {
            isActiveNext.value = false;
            isActivePrev.value = true;
        }
    }

    let shiftX = 0;
    const startDrag = (event) => {
        shiftX = event.touches[0].clientX;
    }
    const moveDrag = (event) => {
        trans.value = event.touches[0].clientX - shiftX;
        isfadeIn.value = false;
    }

    const endDrag = (event) => {
        const direction = (event.changedTouches[0].clientX >= shiftX) ? 'prev' : 'next';
        let diffPos = Math.abs(event.changedTouches[0].clientX - shiftX);
        
        trans.value = 0;
        if (diffPos > 150) {
            trans.value = 0;
            if (direction === 'prev') {
                clickPrev(false);
            } else {
                clickNext(false);
            }
        }
        isfadeIn.value = false;

    }

</script>
