export const state = () => ({
  message: null,
  value: false,
})

export const mutations = {
  setMessage(state, newValue) {
    state.message = newValue
  },

  setValue(state, value) {
    state.value = value
  },
}

export const getters = {}

export const actions = {
  updateSnackbar({ commit }, message) {
    commit('setMessage', message)
    commit('setValue', true)
  },
}
