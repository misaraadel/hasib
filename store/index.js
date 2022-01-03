export const strict = false

export const state = () => ({
  isloading: false,

  locales: ['ar', 'en'],
  locale: 'ar',

  refresh: false,
  doneId: null,
  toastId: null,

  toast: { type: null, message: null },

  errorId: null,
  error: { type: 'warning', message: null },
  errors: {}
})

export const getters = {
  isloading: (state) => { return state.isloading },

  errors: (state) => { return state.errors }
}

export const mutations = {
  isloading: (state, bool) => { state.isloading = bool },

  toast: (state, response) => {
    if (response.data.done) {
      state.doneId = Math.floor(Math.random() * 999) + 1
      return false
    }
    if (response.data.message) {
      state.toast.message = response.data.message
      state.toastId = Math.floor(Math.random() * 999) + 1
    }
  },

  error: (state, error) => {
    state.error = { type: 'warning', message: null }
    if (error) {
      if (error.response && error.response.data) {
        const data = error.response.data
        if (error.response.status === 422) {
          state.error.message = Object.values(data.errors)[0][0]
        } else if (data.message) { state.error.message = data.message }
        state.errorId = Math.floor(Math.random() * 999) + 1
      }
    }
  },

  clearToasts: (state) => {
    state.refresh = false
    state.toast = { type: null, message: null }
    state.error = { type: 'warning', message: null }
  },

  errors: (state, errors) => {
    state.errors = errors
  }
}
