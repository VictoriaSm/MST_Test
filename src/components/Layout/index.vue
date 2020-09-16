<template>
    <div class="Layout">
        <Header />
        <div class="Layout__body">
            <transition 
                appear
                v-on:before-enter="beforeEnter"
                v-on:enter="enter" 
                v-on:leave="leave">
                <router-view></router-view>
            </transition>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from '../Header/index.vue';
    import Footer from '../Footer/index.vue';
    import { gsap } from "gsap";

    import './styles.scss';

    export default {
        name: 'Layout',
        components: {
            Header,
            Footer
        },
        methods: {
            beforeEnter(el) {
                gsap.set(el, { opacity: 0 });
            },
            enter(el, done) {
                gsap.to(el, { opacity: 1, duration: 0.3, onComplete: done });
            },
            leave(el, done) {
                el.style = 'position: absolute; width: 100%; top: 0; left: 0;'
                gsap.to(el, { opacity: 0, duration: 0.3, onComplete: done });
            }  
        }
    }
</script>