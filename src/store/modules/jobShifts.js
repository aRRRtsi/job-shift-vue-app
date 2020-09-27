const state = {
  jobShift: '',
  jobShifts: [
    {
      id: 0,
      hours: 8,
      date: new Date(2020, 0, 30),
    },
    {
      id: 1,
      hours: 5,
      date: new Date(2020, 2, 22),
    },
    {
      id: 2,
      hours: 2,
      date: new Date(2020, 4, 5),
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
