<template>
    <section class="list-authors">
        <h2 class="title list-authors__title">List of Authors</h2>
        <div class="list-authors__cards">
            <AppHomeListAuthorsCard v-for="item in allUsers"
                :key="item.id" 
                :user="item"
            />
            <AppHomeListAuthorsCard v-for="item in allUsers"
                :key="item.id" 
                :user="item"
            />
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
