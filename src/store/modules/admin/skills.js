const stateModel = () => ({
  skills: [],
});

const gettersModel = {
  skills: (state) => state.skills,
};

const actions = {
  setSkills({ commit }, skills) {
    commit("setSkills", skills);
  },
};

const mutations = {
  setSkills(state, skills) {
    state.skills = skills;
  },
};

export default {
  namespaced: true,
  state: stateModel,
  getters: gettersModel,
  actions,
  mutations,
};
