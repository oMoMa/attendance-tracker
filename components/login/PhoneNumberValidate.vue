<template>
  <v-form ref="form" lazy-validation @submit.prevent="validateNumber">
    <v-text-field
      v-model="phoneNumber"
      type="tel"
      outlined
      validate-on-blur
      label="شماره تلفن"
      :rules="[rules.required, rules.formatCheck]"
      @keypress.enter.stop="validateNumber"
    />
    <v-btn block class="mt-4" @click="validateNumber"> ارسال کد تایید </v-btn>
  </v-form>
</template>

<script>
export default {
  emits: ['next'],

  data() {
    return {
      phoneNumber: '',
      rules: {
        required: (v) => !!v || 'لطفا شماره تلفن خود را وارد نمایید',
        formatCheck: (v) =>
          /^(((98)|(\+98)|(0098)|0)(90|91|92|93|94|95|96|97|98|99){1}[0-9]{8})+$/.test(
            v
          ) || 'لطفا یک شماره موبایل درست وارد کنید',
      },
    }
  },

  methods: {
    async validateNumber() {
      if (this.$refs.form.validate()) {
        await this.$axios
          .post('/employee/sendOTP', { input: this.phoneNumber })
          .then((res) => {
            if (res.data.response === 'otpSent')
              this.$emit('next', this.phoneNumber)
          })
      }
    },
  },
}
</script>
