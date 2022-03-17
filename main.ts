import Vue from 'vue';

import router from '@/config/router';

import { App } from '@/containers/index';

// fontawesome
import '@fortawesome/fontawesome-free/css/all.css';
// if not comment, still render svg
// import '@fortawesome/fontawesome-free/js/all.js';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoReplaceSvg = false;

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';

// Vue config
Vue.config.productionTip = false;

// install bootstrap ui support
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
