import Vue from 'vue';
import Vuex from 'vuex';

// Moduulit
import jobShifts from './modules/jobShifts';
import travelExp from './modules/travelExp';
import jobs from './modules/jobs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    jobShifts,
    travelExp,
    jobs,
  },
});
