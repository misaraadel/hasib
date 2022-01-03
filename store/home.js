export const state = () => ({
  loading: false,

  nav: false,

  resources: {},

  offer: null,

})

export const mutations = {
  loading: (state, loading) => { state.loading = loading },

  nav: (state, bool) => { state.nav = bool },

  resources: (state, resources) => { state.resources = resources },

  offer: (state, offer) => { state.offer = offer },
}

export const actions = {
  resources({ commit }, payload) {
    return this.$axios.$post(`home/resources`, payload).then(ok => {
      commit('resources', ok.data)
    }).catch(() => false)
  },

  offer({ commit }, payload) {
    return this.$axios.$post('home/offer', payload).then((ok) => {
      commit('offer', ok.data)
      return true
    }).catch(() => { return false })
  },

  register({ commit }, payload) {
    return this.$axios.$post(`lead/register`, payload).then(ok => {
      return ok
    }).catch(() => false)
  },


}
