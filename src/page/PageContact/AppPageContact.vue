<template>
    <main class="main">
        <h1 class="visually-hidden">Finsweet web-site for verstaem.online</h1>
        <div class="case">
            <div class="contact">
                <div class="contact__header">
                    <p class="text-uppercase contact__sub-text">Contact us</p>
                    <h2 class="title title_lg contact__header-title"> Let’s Start a Conversation</h2>
                    <p class="text contact__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                </div>
                <div class="information contact__info">
                    <div class="information__working-hours">
                        <p class="information__text">Working hours</p>
                        <p class="information__text-bg">Monday To Friday</p>
                        <p class="information__text-bg">9:00 AM to 8:00 PM</p>
                        <p class="text information__sub-text">Our Support Team is available 24/7</p>
                    </div>
                    <div class="information__connection">
                        <p class="information__text">Contact Us</p>
                        <p class="information__text-bg">020 7993 2905</p>
                        <p class="text information__sub-text">hello@finsweet.com</p>
                    </div>
                </div>
                <form class="form" action="#" enctype="multipart/form-data" method="POST">
                    <div class="form__name-block form__control">
                        <div class="form__item ">
                            <input class= "form__input" id="full_name" required type="text" placeholder="Full Name">
                        </div>
                        <div class="form__item">
                            <input class="form__input" id="your_email" required type="text" placeholder="Your Email">
                        </div>
                        <div class="form__item">
                            <select class="form__input form__select" id="query_related">
                                <option class="form__select-option" value="Query Related" selected>Query Related</option>
                                <option class="form__select-option" value="Unrelated">Unrelated</option>
                            </select>
                        </div>
                        <div class="form__item">
                            <textarea class="form__input" id="message" rows="5" cols="33" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <button class="btn btn-yellow form__btn" name="submit" type="submit" aria-label="Send Message">Send Message</button>
                </form>
            </div>
        </div>

    </main>
</template>

<script setup>
    const props = defineProps( {
        pState: Object,
        pDispatch: Function
    });

</script>
