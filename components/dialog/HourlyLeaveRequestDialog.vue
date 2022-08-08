<template>
  <v-dialog
    :value="value"
    :fullscreen="$vuetify.breakpoint.mobile"
    max-width="400"
    @input="$emit('input', $event)"
  >
    <v-card>
      <v-card-title>
        درخواست مرخصی ساعتی <v-spacer></v-spacer>
        <v-btn small icon @click="$emit('input', false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <div class="pa-4">
        <v-row>
          <v-col cols="6" class="d-flex">
            <v-btn id="hourly-leave-from" max-width="100%" color="primary">
              زمان شروع
            </v-btn>
          </v-col>
          <v-col cols="6" class="d-flex">
            <v-btn id="hourly-leave-to" max-width="100%" color="primary">
              زمان پایان
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="farsi-digits mt-4">
          <v-col cols="12" md="6">
            از
            <span v-if="leaveTimeFrom">
              {{
                moment(leaveTimeFrom)
                  .locale('fa')
                  .format('hh:mm dddd، DD-MM-YYYY')
              }}
            </span>
          </v-col>
          <v-col cols="12" md="6">
            تا
            <span v-if="leaveTimeTo">
              {{
                moment(leaveTimeFrom.split(' ')[0] + ' ' + leaveTimeTo)
                  .locale('fa')
                  .format('hh:mm dddd، DD-MM-YYYY')
              }}
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
      v-model="leaveTimeFrom"
      locale="fa"
      type="datetime"
      format="YYYY-MM-DD hh:mm:ss"
      custom-input="#hourly-leave-from"
      :color="$vuetify.theme.themes.light.primary"
      class="farsi-digits"
    ></date-picker>
    <date-picker
      v-if="leaveTimeFrom"
      v-model="leaveTimeTo"
      locale="fa"
      type="time"
      format="hh:mm:ss"
      :min="minimumTimeTo"
      custom-input="#hourly-leave-to"
      :color="$vuetify.theme.themes.light.primary"
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
      leaveTimeFrom: '',
      leaveTimeTo: '',
      description: null,
      errors: [],
    }
  },

  computed: {
    minimumTimeTo() {
      return this.leaveTimeFrom.split(' ')[1].slice(0, 5)
    },
  },

  methods: {
    moment,

    validated() {
      this.errors = []
      if (this.description === null || this.description === '') {
        this.errors.push('فیلد توضیحات لازم است')
        return false
      }
      if (this.leaveTimeFrom === '' || this.leaveTimeTo === '') {
        this.errors.push('بازه زمانی را انتخاب کنید')
        return false
      }
      return true
    },

    async sendRequest() {
      if (this.validated()) {
        await this.$axios
          .post('/employee/leaveRequest', {
            description: this.description,
            startDateTime: this.leaveTimeFrom,
            endDateTime:
              this.leaveTimeFrom.split(' ')[0] + ' ' + this.leaveTimeTo,
            type: 'hourly',
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
