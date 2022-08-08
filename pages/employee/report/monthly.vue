<template>
  <div>
    <v-row justify="center">
      <v-col cols="6">
        <v-btn max-width="fit-content" id="daily-leave" color="primary" block>
          انتخاب بازه
        </v-btn>
      </v-col>
    </v-row>
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
export default {
  components: {
    DatePicker,
  },

  data() {
    return {
      range: '',
      report: [],
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
          this.report = res.data.response
        })
    }
  },
}
</script>
