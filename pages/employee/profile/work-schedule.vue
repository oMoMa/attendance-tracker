<template>
  <div class="d-flex flex-column align-center">
    <v-sheet
      elevation="3"
      color="secondary"
      class="pb-8"
      width="100%"
      height="300px"
    >
      <v-sheet
        elevation="2"
        height="200px"
        color="primary"
        class="d-flex align-center"
        width="100%"
      >
        <v-container>
          <div class="text-h6 white--text">
            <v-icon color="white" x-large class="ml-4">
              mdi-account-circle</v-icon
            >
            {{ fullname }}
          </div>
        </v-container>
      </v-sheet>
    </v-sheet>
    <v-container class="mt-n16">
      <v-card max-width="400px" class="rounded-lg mx-auto">
        <shift-component />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ShiftComponent from '../../../components/ShiftComponent.vue'
export default {
  components: { ShiftComponent },
  layout: 'employeeDefault',
  data() {
    return {}
  },

  computed: {
    fullname() {
      return this.$auth.user.fname + ' ' + this.$auth.user.lname
    },
  },
}
</script>
