const stateModel = () => ({
  classes: [],
});

const gettersModel = {
  classes: (state) => state.classes,
};

const actions = {
  setClasses({ commit }, classes) {
    commit("setClasses", classes);
  },
};

const mutations = {
  setClasses(state, classes) {
    console.log(classes);
    state.classes = classes;
  },
};

export default {
  namespaced: true,
  state: stateModel,
  getters: gettersModel,
  actions,
  mutations,
};
