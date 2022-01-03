export default function ({ store, app, route, $axios }) {
  $axios.setHeader('X-Requested-With', 'XMLHttpRequest')
  $axios.setHeader('Accept', 'application/json')

  $axios.onResponse((response) => {
    store.commit('isloading', false)

    if (response && response.data.message) {
      if (response.data.done) {
        app.$toast.success(response.data.message).goAway(2000)
      } else {
        app.$toast.show(response.data.message)
      }
    }
  })

  $axios.onError((error) => {
    store.commit('isloading', false)
    if (error) {
      if (error.response) {
        if (error.response.status === 422) {
          store.commit('errors', error.response.data.errors)

          setTimeout(() => {
            const error = document.querySelectorAll('p.v-error')[0]

            if (error && process.browser) {
              const input = error.parentElement.querySelector('input')
              input.focus()
              const y = input.getBoundingClientRect().top + window.scrollY
              window.scroll({ top: y - 150, behavior: 'smooth' })
            }
          })
        } else if (error.response.data.message) {
          app.$toast.error(error.response.data.message)
        }
      }
    }
  })

  $axios.onRequest((request) => {
    if (!request.data) { request.data = {} }

    if (app.i18n.locale !== 'ar') { request.data._locale = app.i18n.locale }

    if (!request.data.silent) { store.commit('isloading', true) }

    store.commit('errors', {})
  })
}
