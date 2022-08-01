<template>
  <v-bottom-navigation
    v-model="bottomNavValue"
    app
    color="primary"
    background-color="background"
    grow
  >
    <v-btn icon value="dashboard" nuxt to="/dashboard">
      <span>خانه</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn icon>
      <span>آمار حضور</span>
      <v-icon>mdi-chart-bar</v-icon>
    </v-btn>
    <v-btn icon value="profile" nuxt to="/profile">
      <span>حساب کاربری</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return { bottomNavValue: 'dashboard' }
  },
}
</script>
