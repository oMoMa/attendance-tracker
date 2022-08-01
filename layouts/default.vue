<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
    <bottom-nav />
  </v-app>
</template>

<script>
import BottomNav from '../components/UI/BottomNav.vue'
export default {
  components: {
    BottomNav,
  },
}
</script>
