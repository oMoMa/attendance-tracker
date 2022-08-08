<template>
  <v-container class="white">
    <v-row no-gutters>
      <v-col justify="center" align="center">
        <h1>اپلیکیشن حضور و غیاب</h1>
        <v-img
          :src="require('assets/Images/21404.png')"
          max-width="400"
          max-height="400"
          class="mt-2"
        >
        </v-img>
        <h2 class="mt-4"></h2>
        <p class="mt-2">
          با نرم افزار حضور و غیاب آنلاین بدون نیاز به هیچ گونه دستگاه و سخت
          افزاری میتوانید به راحتی تردد و حضور و غیاب پرسنل خود را کنترل کنید
        </p>
        <v-row>
          <v-col cols="12" md="6">
            <v-btn
              dark
              rounded
              color="secondary"
              class="pa-5"
              nuxt
              to="/employee/login"
              max-width="200px"
            >
              ورود | ثبت‌نام کارمند
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-btn
              dark
              rounded
              color="primary"
              class="pa-5"
              nuxt
              to="/employer/login"
              max-width="200px"
            >
              ورود | ثبت‌نام کارفرما
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {}
</script>
<style>
p {
  font-weight: 3rem;
}
.v-btn.v-size--default {
  width: 189px;
}
</style>
