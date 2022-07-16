<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col>
        <v-img
          :src="require('assets/Images/img.jpg')"
          lazy-src="https://picsum.photos/id/11/100/60"
          max-width="300"
          max-height="300"
          class="mx-auto"
        >
        </v-img>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <p>welcome</p>
    </v-row>
    <v-row justify="center" align="center">
      <v-btn depressed color="primary"> Login </v-btn>
      <v-btn depressed color="primary"> Signin </v-btn>
    </v-row>
  </v-container>
</template>
