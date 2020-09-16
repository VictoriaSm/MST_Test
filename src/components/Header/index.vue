<template>
    <header class="Header">
        <Container>
            <div class="Header__inner">
                <div class="Header__logo-wrap">
                    <div class="Header__logo"></div>
                    <p class="Header__logo-text">Первомайская</p>
                </div>
                <nav>
                    <ul class="Header__menu" ref="menu">
                        <li v-for="(item, index) in menu" :key="`header-menu-${index}`"
                            class="Header__menu-item"
                            :class="{'Header__menu-item_active': item.routeName === $route.name}"
                            :ref="item.routeName === $route.name ? 'menuItemActive' : 'menuItem'"
                            @mouseenter="hoverHandler"
                            @mouseleave="blurHandler">
                            <router-link :to="{name: item.routeName}">{{ item.title }}</router-link>
                        </li>
                    </ul>
                    <div class="Header__menu-slider" ref="slider"></div>
                </nav>
                <div class="Header__right">
                    <a href="tel:8 888 888 88 88" class="Header__phone">8 888 888 88 88</a>
                    <img class="Header__burger" src="icons/logo.svg" alt="logo">
                </div>
            </div>
        </Container>
    </header>
</template>

<script>
    import './styles.scss';

    export default {
        name: 'Header',
        data() {
            return {
                menu: [
                    {
                        title: 'О комплексе',
                        routeName: 'About'
                    },
                    {
                        title: 'Особенности',
                        routeName: 'Features'
                    },
                    {
                        title: 'Пентхаусы',
                        routeName: 'Penthouses'
                    },
                    {
                        title: 'Выбрать квартиру',
                        routeName: 'ChooseFlat'
                    }
                ],
                activeTab: this.$route.name
            }
        },
        methods: {
            hoverHandler(e) {
                const activeWidth = this.$refs.menuItemActive[0].clientWidth,
                    activePos = this.$refs.menuItemActive[0].getBoundingClientRect().left,
                    currentWidth = e.target.clientWidth,
                    currentPos = e.target.getBoundingClientRect().left;

                if ( currentPos === activePos ) return;

                if ( currentPos > activePos ) {
                    let widthEl = currentPos - activePos + currentWidth;
                    this.$refs.slider.style.width = `${widthEl + 13}px`;
                } else {
                    let widthEl = activePos - currentPos + activeWidth;
                    this.$refs.slider.style = `width: ${widthEl + 13}px; margin-left: ${currentPos - 6}px;`;
                }
            },
            blurHandler() {
                const activeWidth = this.$refs.menuItemActive[0].clientWidth,
                    activePos = this.$refs.menuItemActive[0].getBoundingClientRect().left;

                this.$refs.slider.style = `width: ${activeWidth + 13}px; margin-left: ${activePos - 6}px;`;
            }
        },
        watch: {
            '$route.name' (newVal) {
                this.$nextTick(() => {
                    const activeWidth = this.$refs.menuItemActive[0].clientWidth,
                        activePos = this.$refs.menuItemActive[0].getBoundingClientRect().left;

                    this.$refs.slider.style = `width: ${activeWidth + 13}px; margin-left: ${activePos - 6}px;`;
                });
            }
        },
        mounted() {
            this.$nextTick(() => {
                const activeWidth = this.$refs.menuItemActive[0].clientWidth,
                    activePos = this.$refs.menuItemActive[0].getBoundingClientRect().left;

                this.$refs.slider.style = `width: ${activeWidth + 13}px; margin-left: ${activePos - 6}px;`;
            });
        },
    }
</script>