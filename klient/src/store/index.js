//import createPersistedState from 'vuex-persistedstate';

import Vue from 'vue';
import Vuex from 'vuex';
import authentics from './authentics';

Vue.use(Vuex);

//import {mapMutation,mapActions} from 'vuex';

export default new Vuex.Store({
  strict:true,
  state: {
    baseUrl:'/api',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authentics,
  },
  /* plugins:{
    [createPersistedState()]
  }, */
})
