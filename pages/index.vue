<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <welcome-component />
    </v-col>
  </v-row>
</template>
<script>
import WelcomeComponent from '../components/WelcomeComponent.vue'
export default {
  components: { WelcomeComponent },
  auth: false,
}
</script>
