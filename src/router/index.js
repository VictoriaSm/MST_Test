import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'About',
        component: require('../pages/About/index.vue').default
    },
    {
        path: '/features',
        name: 'Features',
        component: require('../pages/Features/index.vue').default
    },
    {
        path: '/penthouses',
        name: 'Penthouses',
        component: require('../pages/Penthouses/index.vue').default
    },
    {
        path: '/choose-flat',
        name: 'ChooseFlat',
        component: require('../pages/ChooseFlat/index.vue').default
    }
];

export default function () {
    return new VueRouter({
        mode: 'history',
        routes
    });
};