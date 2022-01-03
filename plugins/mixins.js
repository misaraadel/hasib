import Vue from 'vue'
import { mapGetters } from 'vuex'
import callAction from '@/components/core/call-action'
import vError from '@/components/v-error'
import Cookies from "js-cookie";

const Mix = {
  install(Vue, options) {
    Vue.component('call-action', callAction)
    Vue.component('v-error', vError)

    Vue.mixin({
      data() {
        return {
          number: '920022480'
        }
      },

      computed: {
        ...mapGetters({ isloading: 'isloading', errors: 'errors' }),

        locale() { return this.$i18n.locale },

        isrtl() { return this.$t(`app.dir`) === 'rtl' }
      },

      methods: {
        replaceQuery() {
          const query = Object.assign({}, this.$route.query)
          query.nan = undefined
          return this.$router.replace({ query }).catch(() => {})
        },

        register() {
          const register = new CustomEvent('event:register')
          document.dispatchEvent(register)

          Cookies.remove(`_source`)
        },

        callus(number, sub) {
          let event = 'event:call'

          if (sub) event = `${event}:${sub}`

          const call = new CustomEvent(event)
          document.dispatchEvent(call)

          window.open(`tel:${number}`)
        },

        whatsapp(number, sub) {
          let event = 'event:whatsapp'

          if (sub) event = `${event}:${sub}`

          const whatsapp = new CustomEvent(event)
          document.dispatchEvent(whatsapp)

          window.open(`https://wa.me/${number}`)
        },

        mapbranch(url) {
          const map = new CustomEvent('event:map:branch')
          document.dispatchEvent(map)

          window.open(url)
        },

        scrollTo(element, offset = 0) {
          const to = document.querySelectorAll(element)[0]
          if (to) {
            const y = to.getBoundingClientRect().top + window.scrollY
            window.scroll({ top: y - offset, behavior: 'smooth' })
          }
        }
      }
    })
  }
}

Vue.use(Mix)
