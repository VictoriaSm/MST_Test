import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';

import './styles/style.scss';

import App from './components/App/index.vue';

import './globalComponents';

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router: router(),
    render: h => h(App),
});