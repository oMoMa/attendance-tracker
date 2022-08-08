<template>
  <div>
    <div class="d-flex justify-center mt-8">
      <v-btn
        id="daily-leave"
        max-width="fit-content"
        color="primary"
        class="mx-auto"
      >
        انتخاب بازه
      </v-btn>
    </div>

    <report-card :report="report" />
    <date-picker
      v-model="range"
      locale="fa"
      format="YYYY-MM-DD"
      custom-input="#daily-leave"
      :color="$vuetify.theme.themes.light.primary"
      range
      class="farsi-digits"
      @change="$fetch()"
    ></date-picker>
  </div>
</template>

<script>
import DatePicker from 'vue-persian-datetime-picker'
import ReportCard from '../../../components/ReportCard.vue'
export default {
  components: {
    DatePicker,
    ReportCard,
  },

  data() {
    return {
      range: '',
      report: {
        presence: ['00', '00', '00'],
        absence: ['00', '00', '00'],
        delay: ['00', '00', '00'],
        overTime: ['00', '00', '00'],
      },
    }
  },

  async fetch() {
    if (this.range !== '') {
      await this.$axios
        .post('/employee/getAttendanceBydate', {
          startDate: this.range[0],
          endDate: this.range[1],
        })
        .then((res) => {
          const response = res.data.response
          Object.keys(response).forEach((key) => {
            response[key] = response[key].split(':')
          })
          this.report = response
        })
    }
  },
}
</script>
