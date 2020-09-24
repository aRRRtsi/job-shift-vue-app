const state = {
  travelExp: '',
  travelExps: [
    {
      id: 0,
      distance: 81,
      price: 0.2,
      date: Date.now(),
    },
    {
      id: 1,
      distance: 55,
      price: 0.2,
      date: Date.now(),
    },
    {
      id: 2,
      distance: 23,
      price: 0.2,
      date: Date.now(),
    },
  ],
};

const getters = {
  newTravelExp: (state) => state.travelExps,
  allTravelExps: (state) => state.travelExps,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
