<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col justify="center" align="center">
        <h1>Name of App</h1>
        <v-img
          :src="require('assets/Images/img.jpg')"
          lazy-src="https://picsum.photos/id/11/100/60"
          max-width="400"
          max-height="400"
          class="mt-2"
        >
        </v-img>
        <h2 class="mt-4">Welcome</h2>
        <p class="mt-2">
          Fast and easy way to record and track attendance of your employees.
        </p>
        <div class="buttons">
          <v-btn
            dark
            rounded
            color="purple"
            class="pa-5"
            nuxt
            to="/login"
            max-width="200px"
          >
            ورود | ثبت‌نام
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {}
</script>
<style>
.buttons {
  margin-top: 30%;
}
p {
  font-weight: 3rem;
}
.v-btn.v-size--default {
  width: 189px;
}
</style>
