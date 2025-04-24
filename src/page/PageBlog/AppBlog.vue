<template>
    <main class="main">
        <h1 class="visually-hidden">Finsweet web-site for verstaem.online</h1>
        <AppBlogHeader/>
        <div class="case">
            <AppBlogAllPosts :pState="pState"/>
            <Choose :pState="pState" :isPageHome = "false"/>
            <AppJoining/>
        </div>
    </main>
</template>


<script setup>
    import AppBlogHeader from '@/page/PageBlog/BlogHeader/AppBlogHeader'
    import AppBlogAllPosts from '@/page/PageBlog/BlogAllPosts/AppBlogAllPosts.vue'
    import Choose from '@/vue_components/Choose/AppChoose.vue'
    import AppJoining from '@/vue_components/Joining/AppJoining.vue'

    const props = defineProps( {
        pState: Object,
        pDispatch: Function
    });

    const pState = props.pState;

</script>
