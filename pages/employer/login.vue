<template>
  <div class="d-flex align-center justify-center" style="height: 100%">
    <v-card width="400px" max-width="400px">
      <v-card-title>ورود</v-card-title>
      <v-stepper v-model="stepNumber" flat>
        <v-stepper-items>
          <v-stepper-content step="1">
            <phone-number-validate
              @next="
                stepNumber = 2
                phone = $event
              "
            />
          </v-stepper-content>

          <v-stepper-content step="2">
            <otp-validate @login="login($event)" />
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
  </div>
</template>

<script>
import PhoneNumberValidate from '../../components/login/PhoneNumberValidate.vue'
import OtpValidate from '../../components/login/OtpValidate.vue'
export default {
  components: { PhoneNumberValidate, OtpValidate },
  layout: 'login',

  auth: false,

  data() {
    return {
      stepNumber: 1,
      phone: null,
    }
  },

  methods: {
    login(code) {
      this.$auth
        .loginWith('localEmployer', {
          data: {
            input: this.phone,
            code,
          },
        })
        .then(() => {
          this.$router.push({ path: '/employer/dashboard' })
        })
    },
  },
}
</script>
