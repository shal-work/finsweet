<template>
    <div class="post-read">
        <h2 class="title post-read__title">What to read next</h2>

        <div class="post-read__container">
            <AppPostReadCard v-for="item in allPost.slice(0, 3)" 
                    :key="item.id" 
                    :post="item"/>
        </div>
    </div>
</template>


<script setup>
    import AppPostReadCard from '@/page/PagePost/PostRead/AppPostReadCard.vue'

    const props = defineProps( {
        pState: Object
    });



    let allPost = props.pState.pageAllPost.items;
 

</script>
