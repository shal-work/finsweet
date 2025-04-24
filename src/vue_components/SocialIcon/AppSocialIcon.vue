<template>
    <ul class="social">
        <li class="social__icon">
            <a href="#Facebook/запрещен_в_РФ" class="icon" aria-label="Ссылка на Facebook запрещенный в РФ">
                <svg class="icon zoom-hover" :class="colorValue">
                    <use xlink:href="@/assets/img/spriteSocial.svg#Facebook"></use>
                </svg>
            </a>
        </li>
        <li class="social__icon">
            <a href="#Twitter/запрещен_в_РФ" class="icon" aria-label="Ссылка на Twitter запрещенный в РФ">
                <svg class="icon zoom-hover " :class="colorValue">
                    <use xlink:href="@/assets/img/spriteSocial.svg#Twitter"></use>
                </svg>
            </a>
        </li>
        <li class="social__icon">
            <a href="#Instagram/запрещен_в_РФ" class="icon" aria-label="Ссылка на Instagram запрещенный в РФ">
                <svg class="icon zoom-hover" :class="colorValue">
                    <use xlink:href="@/assets/img/spriteSocial.svg#Instagram"></use>
                </svg>
            </a>
        </li>
        <li class="social__icon">
            <a href="#Linkedin/запрещен_в_РФ" class="icon" aria-label="Ссылка на Linkedin запрещенный в РФ">
                <svg class="icon zoom-hover" :class="colorValue">
                    <use xlink:href="@/assets/img/spriteSocial.svg#Linkedin"></use>
                </svg>
            </a>
        </li>
    </ul>

   
</template>

<script setup>
    const props = defineProps( {
        color: String
    });
    const colorValue = props.color;
</script>
