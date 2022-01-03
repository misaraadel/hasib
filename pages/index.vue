<template>
<div>
  <home-intro />
  <home-about />
  <home-services />
  <home-packages />
</div>
</template>

<script>
import { mapState } from "vuex"

export default {
  layout: `home`,
  scrollToTop: true,

  components: {
    homeIntro: () => import(`@/components/home/home-intro`),
    homeAbout: () => import(`@/components/home/home-about`),
    homeServices: () => import(`@/components/home/home-services`),
    homePackages: () => import(`@/components/home/home-packages`),
  },

  head() { return { title: '' } }
}
</script>
