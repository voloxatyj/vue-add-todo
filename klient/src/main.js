import {sync} from 'vuex-router-sync';
import Vuetify from 'vuetify';

import Vue from 'vue';
import App from './App.vue';
import Panel from './components/Panel.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuetify);
sync(store,router);

Vue.component('Panel',Panel);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
