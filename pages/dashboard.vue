<template>
  <div style="height: 100%">
    <div
      v-if="!$fetchState.pending"
      class="d-flex flex-column justify-center align-center"
      style="height: 100%"
    >
      <div class="farsi-digits d-flex flex-column align-center">
        <div id="clock">
          {{ String(currentTime.getHours()).padStart(2, '0') }}:{{
            String(currentTime.getMinutes()).padStart(2, '0')
          }}
        </div>
        <div id="date" class="text-caption">
          {{ today }}
        </div>
      </div>
      <v-btn
        dark
        class="mt-4 rounded-circle"
        :class="checkInStatus ? 'checkout-gradient' : 'checkin-gradient'"
        width="200px"
        height="200px"
        x-large
        @click="scannerDialog = true"
      >
        <div class="d-flex flex-column">
          <v-icon x-large>mdi-gesture-tap</v-icon>
          <span>
            {{ checkInBtnText }}
          </span>
        </div>
      </v-btn>
    </div>
    <v-dialog
      v-if="scannerDialog"
      v-model="scannerDialog"
      max-width="600px"
      :fullscreen="$vuetify.breakpoint.mobile"
    >
      <div id="scanner-wrapper">
        <qrcode-stream :camera="camera" @decode="onDecode">
          <div
            class="d-flex flex-column justify-space-between"
            style="height: 100%"
          >
            <div class="d-flex justify-end pa-4">
              <v-btn
                dark
                icon
                width="32px"
                height="32px"
                @click="scannerDialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
            <div
              class="text-center white--text pa-2 text-caption"
              style="background: rgba(255, 255, 255, 0.2)"
            >
              دوربین را به سمت کد بگیرید
            </div>
          </div>
        </qrcode-stream>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import moment from 'jalali-moment'
import { QrcodeStream } from 'vue-qrcode-reader'
export default {
  components: {
    QrcodeStream,
  },

  data() {
    return {
      camera: 'auto',
      scannerDialog: false,
      checkInStatus: false,
      checkInData: null,
      currentTime: new Date(),
      today: '',
    }
  },

  async fetch() {
    await this.$axios.get('employee/checkedInStatus').then((res) => {
      if (res.data.response == null) this.checkInStatus = false
      else {
        this.checkInStatus = true
        this.checkInData = res.data.response
      }
    })
  },

  computed: {
    checkInBtnText() {
      return this.checkInStatus ? 'خروج' : 'ورود'
    },
  },

  created() {
    this.calculateTime()
    setInterval(this.calculateTime, 5000)
  },

  methods: {
    async onDecode(string) {
      if (this.checkInStatus === false) {
        await this.$axios
          .post('/employee/checkIn', { code: string })
          .then((res) => {
            this.checkInStatus = true
            this.checkInData = res.data.response
            this.scannerDialog = false
          })
      } else {
        await this.$axios
          .post('/employee/checkOut', { code: string })
          .then((res) => {
            this.checkInStatus = false
            this.checkInData = res.data.response
            this.scannerDialog = false
          })
      }
    },

    calculateTime() {
      this.currentTime = new Date()
      this.today = moment().locale('fa').format('dddd، DD MMMM')
    },
  },
}
</script>

<style>
@media screen and (orientation: landscape) {
  #scanner-wrapper {
    aspect-ratio: 16/9;
  }
}
@media screen and (orientation: portrait) {
  #scanner-wrapper {
    aspect-ratio: 9/16;
  }
}

.checkin-gradient {
  background: linear-gradient(45deg, #efd5ff 0%, #515ada 100%);
}

.checkout-gradient {
  background: linear-gradient(45deg, #d53369 0%, #daae51 100%);
}

#clock {
  font-size: 24px;
  font-weight: 700;
}

#date {
  opacity: 50%;
  font-size: 16px;
}
</style>
