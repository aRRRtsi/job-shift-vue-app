const state = {
  job: '',
  jobs: [
    {
      id: 0,
      date: new Date(2020, 0, 31),
      content: 'Tein aika paljon hommia.',
    },
    {
      id: 1,
      date: new Date(2020, 2, 1),
      content: 'Tein paljon hommia lisää.',
    },
    {
      id: 2,
      date: new Date(2020, 3, 17),
      content: 'En jaksanu tehä iha niin paljo kuitenkaa.',
    },
  ],
};

const getters = {
  newJob: (state) => state.jobs,
  allJobs: (state) => state.jobs,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
