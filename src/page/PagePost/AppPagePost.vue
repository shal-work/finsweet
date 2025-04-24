<template>
    <main class="main">
        <h1 class="visually-hidden">Finsweet web-site for verstaem.online</h1>
        <div class="case">
            <AppPostHeader/>
            <AppPostContent/>
            <AppPostRead :pState="pState"/>
        </div>
    </main>
</template>


<script setup>
    import AppPostHeader from '@/page/PagePost/PostHeader/AppPostHeader.vue'
    import AppPostContent from '@/page/PagePost/PostContent/AppPostContent.vue'
    import AppPostRead from '@/page/PagePost/PostRead/AppPostRead.vue'


    const props = defineProps( {
        pState: Object,
        pDispatch: Function
    });

    const pState = props.pState


</script>
