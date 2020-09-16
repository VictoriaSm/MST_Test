<template>
    <div class="About">
        <Container>
            <div class="About__content Row">
                <Sidebar class="Col-2" :list="tabLinks" :activeLink="tabs.new !== -1 ? tabs.new : tabs.current" :event="tabHandler" />

                <div class="Col-10-WithGap About__tab-wrap">
                    <div class="About__tab">
                        <div class="About__tab-content">
                            <div class="About__tab-text-outer">
                                <div class="About__tab-text" ref="tabContent">
                                    <h2 class="About__title">{{ tabs.list[tabs.current].title }}</h2>
                                    <p class="About__description" 
                                        ref="tabDescription"
                                        v-html="$options.filters.cropText(tabs.list[tabs.current].description, 130, '#')"></p>
                                </div>
                                <div v-if="tabs.new !== -1" class="About__tab-text About__tab-text_shadow" ref="tabContentNew">
                                    <h2 class="About__title">{{ tabs.list[tabs.new].title }}</h2>
                                    <p class="About__description" 
                                        ref="tabDescription"
                                        v-html="$options.filters.cropText(tabs.list[tabs.new].description, 130, '#')"></p>
                                </div>
                            </div>
                            
                            <div class="About__tab-navigation-outer">
                                <div class="About__tab-navigation" ref="tabNavigation">
                                    <span class="About__tab-navigation-num">{{ tabs.current + 1 }}</span>
                                    <span class="About__tab-navigation-dash">/</span>
                                    <span>{{ tabs.list.length }}</span>
                                </div>
                                <div v-if="tabs.new !== -1" 
                                    class="About__tab-navigation About__tab-navigation_shadow" ref="tabNavigationNew">
                                    <span class="About__tab-navigation-num">{{ tabs.new + 1 }}</span>
                                    <span class="About__tab-navigation-dash">/</span>
                                    <span>{{ tabs.list.length }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="About__tab-img" 
                            ref="tabImg"
                            :style="`background-image: url(${tabs.list[tabs.current].img});`">
                            <div v-if="tabs.new !== -1" 
                                ref="tabImgNew"
                                class="About__tab-img About__tab-img_shadow"
                                :class="{'About__tab-img_shadow-bottom': tabs.direction === -1}"
                                :style="`background-image: url(${tabs.list[tabs.new].img});`"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>

<script>
    import './styles.scss';
    import Sidebar from '../../components/Sidebar/index.vue';
    import { gsap } from "gsap";

    export default {
        name: 'About',
        components: {
            Sidebar
        },
        filters: {
            cropText(text, length, link) {
                if ( text.length <= length ) return text;

                var link = document.createElement('a');
                link.href = '#';
                link.className = 'About__description-link';

                const cropText = text.substring(0, length), 
                    lastSpace = cropText.lastIndexOf(' ');

                return `${cropText.substr(0, lastSpace)}<a href="${link}" class="About__description-link"></a>`;
            }
        },
        data() {
            return {
                tabs: {
                    current: 0,
                    new: -1,
                    direction: 1,
                    list: [
                        {
                            name: 'architecture',
            				title: 'Архитектура',
            				description: 'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни Оригинальнаяархитектуражилогокомплекса',
            				img: '/images/architecture.jpg'
                        },
                        {
                            name: 'improvement',
            				title: 'Благоустройство',
            				description: 'Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом',
            				img: '/images/improvement.jpg'
                        },
                        {
                            name: 'safety',
            				title: 'Безопасность',
            				description: 'Современный двор европейского уровня — территория для детей, игр на свежем воздухе и вечерних',
            				img: '/images/safety.jpg'
                        },
                        {
                            name: 'engineering',
            				title: 'Инженерия',
            				description: 'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни',
            				img: '/images/engineering.jpg'
                        },
                        {
                            name: 'infrastructure',
            				title: 'Инфраструктура',
            				description: 'Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса',
            				img: '/images/infrastructure.jpg'
                        },
                        {
                            name: 'transport-accessibility',
            				title: 'Транспортная доступность',
            				description: 'Жилой комплекс «Первомайска» расположен в престижном Академическом районе',
            				img: '/images/transport-accessibility.jpg'
                        }
                    ]
                }
            }
        },
        computed: {
            tabLinks() {
                return this.tabs.list.map(({ name, title }, index) => {
                    return { title, index }
                });
            }
        },
        methods: {
            tabHandler(index) {
                this.tabs.new = index;
            },
            changeCurrentTab() {
                this.tabs.current = this.tabs.new;
                this.$refs.tabContent.style = '';
                this.$refs.tabNavigation.style = ''
                this.tabs.new = -1;
            },
            // cropDescription(text) {
            //     const q = this.$nextTick(() => {
            //         console.log(this.$refs.tabDescription);
            //         return `${text} sklnndk`;
            //     });
            //     console.log(q);
            //     return text;
            // }
            // test() {
            //     var block = document.querySelector('.block'),
            //         text = block.innerHTML,
            //         clone = document.createElement('div');

            //     clone.style.position = 'absolute';
            //     clone.style.visibility = 'hidden';
            //     clone.style.width = block.clientWidth + 'px';
            //     clone.innerHTML = text;
            //     document.body.appendChild(clone);

            //     var l = text.length - 1;
            //     for (; l >= 0 && clone.clientHeight > block.clientHeight; --l) {
            //         clone.innerHTML = text.substring(0, l) + '...';
            //     }

            //     block.innerHTML = clone.innerHTML;
            // }
        },
        watch: {
            'tabs.new': {
                handler(newVal) {
                    if ( newVal === -1 ) return;

                    this.$nextTick(() => {
                        if ( newVal === this.tabs.current ) return;

                        const tl = gsap.timeline({ onComplete: this.changeCurrentTab }),
                            duration = 0.3;

                        this.tabs.direction = newVal < this.tabs.current ? -1 : 1;
                        const textDirection = newVal > this.tabs.current ? 75 : -75;

                        tl.fromTo(this.$refs.tabContentNew, { opacity: 0, y: textDirection }, { opacity: 1, y: 0 , duration: duration });
                        tl.fromTo(this.$refs.tabContent, { opacity: 1 }, { opacity: 0, duration: duration }, 0);
                        tl.to(this.$refs.tabImgNew, { height: this.$refs.tabImg.clientHeight, duration: duration }, 0);
                        tl.fromTo(this.$refs.tabNavigationNew, { opacity: 0 }, { opacity: 1, duration: duration }, 0);
                        tl.fromTo(this.$refs.tabNavigation, { opacity: 1 }, { opacity: 0, duration: duration }, 0);
                    });
                }
            }
        }
    }
</script>