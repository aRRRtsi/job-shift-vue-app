const state = {
  job: '',
  jobs: [
    {
      id: 0,
      date: Date.now(),
      content: 'Tein aika paljon hommia.',
    },
    {
      id: 1,
      date: Date.now(),
      content: 'Tein aika paljon hommia..',
    },
    {
      id: 2,
      date: Date.now(),
      content: 'Tein aika paljon hommia..',
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
