<template>
  <div class="d-flex align-center justify-center" style="height: 100%">
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <v-card
          v-ripple
          height="200px"
          max-width="300px"
          color="primary"
          class="d-flex align-center justify-center mx-auto rounded-xl"
          rounded
          nuxt
          to="/employee/report/today"
        >
          <span class="text-h3 white--text"> امروز </span>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          v-ripple
          height="200px"
          max-width="300px"
          color="secondary"
          class="d-flex align-center justify-center mx-auto rounded-xl"
          nuxt
          to="/employee/report/monthly"
        >
          <span class="text-h3 white--text"> بازه </span>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'employeeDefault',
}
</script>

<style></style>
