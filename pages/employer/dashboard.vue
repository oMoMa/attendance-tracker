<template>
  <div>
    hi

    <v-btn @click="$auth.logout()">logout</v-btn>
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
