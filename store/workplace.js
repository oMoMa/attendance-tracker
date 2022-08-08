export const state = () => ({
  workplaces: [],
})

export const mutations = {
  setWorkplaces(state, payload) {
    state.workplaces = payload
  },
}

export const getters = {}

export const actions = {
  async fetchWorkplaces({ commit }) {
    await this.$axios.get('/employer/workplaces').then((res) => {
      commit('setWorkplaces', res.data.response)
    })
  },
}
