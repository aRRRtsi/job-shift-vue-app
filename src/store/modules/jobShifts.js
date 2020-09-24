const state = {
  jobShift: '',
  jobShifts: [
    {
      id: 0,
      hours: 8,
      date: Date.now(),
    },
    {
      id: 1,
      hours: 5,
      date: Date.now(),
    },
    {
      id: 2,
      hours: 2,
      date: Date.now(),
    },
  ],
};

const getters = {
  newJobShift: (state) => state.jobShifts,
  allJobShifts: (state) => state.jobShifts,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
