export const state = () => ({
  qrCode: '',
})

export const mutations = {
  setQrCode(state, payload) {
    state.qrCode = payload
  },
}

export const getters = {}

export const actions = {
  async generateNewCode(context, id) {
    await this.$axios
      .post(`/employer/workplace/${id}/updateQRCode`)
      .then((res) => {
        context.commit('setQrCode', res.data.response)
      })
  },
}
