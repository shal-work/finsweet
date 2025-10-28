<template>
    <footer class="footer container">
        <div class="footer__container">
            <div class="footer__header">
                <div class="logo footer__logo">
                    <a class="logo__link" href="#">
                        <!-- <img class="logo__link-img" src="@/assets/img/logo.png" alt="Logo Finsweet" width="140" height="29"> -->
                        <picture>
                            <source type="image/webp" srcset="@/assets/img/logo.webp">
                            <img class="logo__link-img"  src="@/assets/img/logo.png" alt="Logo Finsweet" width="140" height="29">
                        </picture>
                    </a>
                </div>
                <nav class="nav footer__nav" data-toggle-id="dropdown">
                    <AppMenu :isBtn = "false"/>
                </nav>
            </div>
            <div class="footer__subcontainer">
                <div class="footer__subcontent">
                    <h2 class="title footer__title">
                        Subscribe to our news letter to get latest updates and news
                    </h2>
                    <div class="footer__control">
                        <input class="footer__input" type="text" placeholder="Enter Your Email">
                        <a href="#" class="btn btn-yellow ">Subscribe</a>
                    </div>
                </div>
            </div>
            <div class="footer__block">
                <div class="footer__copyright">
                    <p class="footer__text">Finstreet 118 2561 Fintown</p>
                    <p class="footer__text">Hello@finsweet.com  020 7993 2905</p>
                </div>
                <div class="footer__block">
                    <AppSocialIcon/>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import AppMenu from '@/vue_components/Menu/AppMenu' 
    import AppSocialIcon from '@/vue_components/SocialIcon/AppSocialIcon' 
</script>
