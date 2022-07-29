<template>
  <v-container>
    <v-btn @click="$auth.logout()" class="mx-auto">logout</v-btn>
    <v-btn
      dark
      color="purple lighten-2"
      @click="scannerDialog = true"
      class="mx-auto mt-4"
    >
      {{ checkInBtnText }}
    </v-btn>
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
    <v-snackbar v-model="snackbar">{{ message }}</v-snackbar>
  </v-container>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
export default {
  components: {
    QrcodeStream,
  },

  data() {
    return {
      camera: 'auto',
      snackbar: false,
      message: null,
      scannerDialog: false,
      checkInStatus: false,
      checkInData: null,
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
  },

  computed: {
    checkInBtnText() {
      return this.checkInStatus ? 'خروج' : 'حضور'
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
</style>
