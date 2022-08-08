<template>
  <v-dialog
    :value="value"
    :fullscreen="$vuetify.breakpoint.mobile"
    max-width="400"
    @input="$emit('input', $event)"
  >
    <v-card>
      <v-card-title>
        درخواست مرخصی روزانه <v-spacer></v-spacer>
        <v-btn small icon @click="$emit('input', false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <div class="pa-4">
        <v-btn id="daily-leave" color="primary" block>انتخاب بازه</v-btn>
        <v-row class="farsi-digits mt-4">
          <v-col cols="6">
            از
            <span v-if="leaveTime.length > 0">
              {{ moment(leaveTime[0]).locale('fa').format('dddd، DD-MM-YYYY') }}
            </span>
          </v-col>
          <v-col cols="6">
            تا
            <span v-if="leaveTime.length === 2">
              {{ moment(leaveTime[1]).locale('fa').format('dddd، DD-MM-YYYY') }}
            </span>
          </v-col>
        </v-row>
        <v-textarea
          v-model="description"
          type="text"
          outlined
          no-resize
          class="mt-4"
          placeholder="توضیحات"
          label="توضیحات"
          :error-messages="errors"
        />
        <v-btn block @click="sendRequest"> ارسال درخواست </v-btn>
      </div>
    </v-card>
    <date-picker
      v-model="leaveTime"
      locale="fa"
      format="YYYY-MM-DD"
      custom-input="#daily-leave"
      :color="$vuetify.theme.themes.light.primary"
      range
      class="farsi-digits"
    ></date-picker>
  </v-dialog>
</template>

<script>
import PersianDatePicker from 'vue-persian-datetime-picker'
import moment from 'jalali-moment'
export default {
  components: { datePicker: PersianDatePicker },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      leaveTime: [],
      description: null,
      errors: [],
    }
  },

  methods: {
    moment,

    validated() {
      this.errors = []
      if (this.description === null || this.description === '') {
        this.errors.push('فیلد توضیحات لازم است')
        return false
      }
      if (this.leaveTime.length !== 2) {
        this.errors.push('بازه زمانی را انتخاب کنید')
        return false
      }
      return true
    },

    async sendRequest() {
      if (this.validated()) {
        const res = await this.$axios.get('/employee/mySchedule')
        const schedule = res.data.response.workSchedule
        await this.$axios
          .post('/employee/leaveRequest', {
            description: this.description,
            startDateTime: this.leaveTime[0] + ' ' + schedule.startTime,
            endDateTime: this.leaveTime[1] + ' ' + schedule.endTime,
            type: 'daily',
          })
          .then((res) => {
            this.$store.dispatch(
              'snackbar/updateSnackbar',
              'درخواست شما ارسال شد و نتیجه آن پس از بررسی به شما اعلام می‌شود'
            )

            this.$emit('input', false)
          })
          .catch((error) => {
            this.$store.dispatch(
              'snackbar/updateSnackbar',
              error.message + ' ' + error.response.data.response
            )

            this.$emit('input', false)
          })
      }
    },
  },
}
</script>
