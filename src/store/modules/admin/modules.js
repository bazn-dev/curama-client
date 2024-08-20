const stateModel = () => ({
  modules: [],
});

const gettersModel = {
  modules: (state) => state.modules,
};

const actions = {
  setModules({ commit }, modules) {
    commit("setModules", modules);
  },
};

const mutations = {
  setModules(state, modules) {
    state.modules = modules;
  },
};

export default {
  namespaced: true,
  state: stateModel,
  getters: gettersModel,
  actions,
  mutations,
};
