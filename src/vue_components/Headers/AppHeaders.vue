<template>
    <header class="header container">
        <div class="logo">
            <a class="logo__link" href="#">
                <!-- <img class="logo__link-img" src="@/assets/img/logo.png" alt="Logo Finsweet" width="140" height="29"> -->
                <picture>
                    <source type="image/webp" srcset="@/assets/img/logo_210.webp" media="(max-width: 720px)">
                    <source type="image/png" srcset="@/assets/img/logo_210.png" media="(max-width: 720px)">
                    <source type="image/webp" srcset="@/assets/img/logo.webp">
                    <img class="logo__link-img"  src="@/assets/img/logo.png" alt="Logo Finsweet" width="140" height="29">
                </picture>
                <!-- <img class="logo__link-img"  srcset="@/assets/img/logo_210.png 210w, @/assets/img/logo.png 140w" sizes="(max-width: 720px) 210px" src="@/assets/img/logo.png" alt="Logo Finsweet" width="140" height="29"> -->
            </a>
        </div>

        <nav class="nav header__nav" data-toggle-id="dropdown">
            <div class="header__menu">
                <AppMenu :isBtn = "true"/>
            </div>
        </nav>
        <div class="header__burger">
            <div class="icon-bar"></div>
        </div>
    </header>
</template>

<script setup>
    import AppMenu from '@/vue_components/Menu/AppMenu' 
</script>
