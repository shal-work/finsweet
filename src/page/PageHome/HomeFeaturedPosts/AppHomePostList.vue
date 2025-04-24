<template>
    <div class="featured-posts__item post" :class="{active: isActive }" @click="selectPost">
        <p class="post__user post__color-black">
            <span class="post__name post__color-purple">
                {{name}}
            </span>
            <span class="post__date post__color-black">
                {{date}}
            </span>
        </p>
        <h2 class="title post__title-list">
                {{title}}
        </h2>
        <button type="button" :aria-label="'Пост ' + name"  class="btn-area"></button>
    </div>
</template>



<script setup>
  import { ref } from "vue";

    const props = defineProps(['post', 'index', 'currentNumberPost'])
    const emit = defineEmits(['omSelect'])

    const isActive = ref(false);
    const name = props.post.name;
    const date = props.post.date;
    const title = props.post.title;
    if (props.currentNumberPost === props.index) {
        isActive.value = true;
    }
    const selectPost = ()=> {
        emit('omSelect', props.index);
    }
</script>
