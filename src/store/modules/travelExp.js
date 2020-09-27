const state = {
  travelExp: '',
  travelExps: [
    {
      id: 0,
      distance: 81,
      price: Math.floor(81 * 0.2),
      date: new Date(2020, 0, 31),
    },
    {
      id: 1,
      distance: 55,
      price: Math.floor(55 * 0.2),
      date: new Date(2020, 3, 2),
    },
    {
      id: 2,
      distance: 23,
      price: Math.floor(23 * 0.2),
      date: new Date(2020, 5, 22),
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
