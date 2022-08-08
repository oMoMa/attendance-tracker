<template>
  <v-app>
    <v-main>
      <Nuxt />
      <v-snackbar v-model="snackbar" app timeout="4000">
        {{ errorMessage }}
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('snackbar', { errorMessage: 'message' }),

    snackbar: {
      get() {
        return this.$store.state.snackbar.value
      },

      set(value) {
        this.$store.commit('snackbar/setValue', value)
      },
    },
  },
}
</script>
