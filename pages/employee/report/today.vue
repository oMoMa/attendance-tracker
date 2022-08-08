<template>
  <div>
    <report-card :report="report" class="mt-8" />
  </div>
</template>

<script>
import ReportCard from '../../../components/ReportCard.vue'
export default {
  components: {
    ReportCard,
  },

  layout: 'employeeDefault',

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
      await this.$axios.get('/employee//dailyAttendance').then((res) => {
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
