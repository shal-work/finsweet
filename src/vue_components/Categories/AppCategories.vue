<template>
    <section class="categories">
        <div class="categories__conteiner">
            <div class="categories__item categories__active">
                <picture class="pictogram  categories__pictogram">
                    <source type="image/webp" srcset="@/assets/img/ico_business_24.webp">
                    <img class="pictogram__ico" src="@/assets/img/ico_business_24.png" alt="ico_business" width="24" height="24"> 
                </picture>
                <h3 class="title title_sm categories__title">Business</h3>
                <button type="button" aria-label="Choose Business" class="btn-area"></button>
            </div>
            <div class="categories__item">
                <picture class="pictogram categories__pictogram">
                    <source type="image/webp" srcset="@/assets/img/ico_startup_24.webp">
                    <img class="pictogram__ico" src="@/assets/img/ico_startup_24.png" alt="ico_startup" width="24" height="24"> 
                </picture>
                <h3 class="title title_sm categories__title">Startup</h3>
                <button type="button" aria-label="Choose Startup" class="btn-area"></button>
            </div>
            <div class="categories__item" >
                <picture class="pictogram categories__pictogram">
                    <source type="image/webp" srcset="@/assets/img/ico_economy_24.webp">
                    <img class="pictogram__ico" src="@/assets/img/ico_economy_24.png" alt="ico_economy" width="24" height="24"> 
                </picture>
                <h3 class="title title_sm categories__title">Economy</h3>
                <button type="button" aria-label="Choose Economy" class="btn-area"></button>
            </div>
            <div class="categories__item">
                <picture class="pictogram categories__pictogram">
                    <source type="image/webp" srcset="@/assets/img/ico_technology_24.webp">
                    <img class="pictogram__ico" src="@/assets/img/ico_technology_24.png" alt="ico_technology" width="24" height="24"> 
                </picture>
                <h3 class="title title_sm categories__title">Technology</h3>
                <button type="button" aria-label="Choose Technology" class="btn-area" ></button>
            </div>
        </div>
    </section>
</template>


<script setup>
    


</script>
