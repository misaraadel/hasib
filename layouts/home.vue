<template>
<div class="h-screen min-h-screen">
  <home-header />

  <nuxt />

  <home-footer />
</div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  components: {
    homeHeader: () => import(`@/components/home/home-header`),
    homeFooter: () => import(`@/components/home/home-footer`)
  },

  mounted() {
    if (process.browser) { Cookies.set(`_source`, this.$route.query._source) }

    this.$store.dispatch(`home/resources`)
  },

  head() {
    return {
      titleTemplate: `%s - ${this.$t(`app.title`)}`,
      htmlAttrs: { lang: this.$i18n.locale, dir: this.$t(`app.dir`) },
      bodyAttrs: { class: `${this.$t(`app.dir`)} font-body` },
      meta: [
        { hid: 'description', name: 'description', content: this.$t(`app.description`) }
      ],
    }
  }
}
</script>
