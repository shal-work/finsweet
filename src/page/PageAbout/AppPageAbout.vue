<template>

    <main class="main">
        <h1 class="visually-hidden">Finsweet web-site for verstaem.online</h1>
       
        
        <div class="case">
            <AppAboutHeader/>
            <AppAboutTeam/>
            <AppAboutListAuthors :pState="pState"/>
            <AppJoining/>
        </div>

    </main>
</template>


<script setup>
    import AppAboutHeader from '@/page/PageAbout/AboutHeader/AppAboutHeader.vue'
    import AppAboutTeam from '@/page/PageAbout/AboutTeam/AppAboutTeam.vue'
    import AppAboutListAuthors from '@/page/PageAbout/AboutListAuthors/AppAboutListAuthors.vue'
    import AppJoining from '@/vue_components/Joining/AppJoining.vue'

    const props = defineProps( {
        pState: Object,
        pDispatch: Function
    });
    const pState = props.pState
</script>
