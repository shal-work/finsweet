<template>
    <main class="main">
        <h1 class="visually-hidden">Finsweet web-site for verstaem.online</h1>
        <AppHomeHero />
        <div class="case">
            <AppHomeFeaturedPosts :pState="pState" :pDispatch="pDispatch" />
            <AppAboutUs/>
            <AppChoose :pState="pState" :isPageHome="true"/>
            <AppListAuthors :pState="pState"/>
            <AppTestimonials :pState="pState"/>
            <AppJoining/>
        </div>
    </main>
</template>


<script setup>
    import AppHomeHero from '@/page/PageHome/HomeHero/AppHomeHero'
    import AppHomeFeaturedPosts from '@/page/PageHome/HomeFeaturedPosts/AppHomeFeaturedPosts'
    import AppAboutUs from '@/page/PageHome/HomeAboutUs/AppHomeAboutUs'
    import AppChoose from '@/vue_components/Choose/AppChoose.vue'
    import AppListAuthors from '@/page/PageHome/HomeListAuthors/AppHomeListAuthors.vue'
    import AppTestimonials from '@/page/PageHome/HomeTestimonials/AppHomeTestimonials.vue'
    import AppJoining from '@/vue_components/Joining/AppJoining.vue'

    const props = defineProps( {
        pState: Object,
        pDispatch: Function
    });

    const pState = props.pState;
    const pDispatch = props.pDispatch;

</script>
