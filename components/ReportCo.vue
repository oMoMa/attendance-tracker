<template>
  <div>
    <v-card class="ma-3">
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="#D9F8C4" class="white--text">
              <div class="pt-5 pb-5">
                <v-row justify="center" align="center" no-gutters>
                  <v-col sm="5" md="6">
                    <div class="headline pr-5">حضور</div>
                  </v-col>
                  <v-col justify="center" align="center" sm="5" md="6">
                    <big>
                      <span>{{ presenceHours[0] }}</span
                      ><span> ساعت و </span><span>{{ presenceHours[1] }}</span
                      ><span> دقیقه </span>
                    </big>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-card class="ma-3">
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="#F9F9C5" class="white--text">
              <div class="pt-5 pb-5">
                <v-row justify="center" align="center" no-gutters>
                  <v-col sm="5" md="6" class="pl-8">
                    <div class="headline pr-5">غیبت</div>
                  </v-col>
                  <v-col justify="center" align="center" sm="5" md="6">
                    <big>
                      <span>{{ absenceHours[0] }}</span>
                      <span> ساعت و </span><span>{{ absenceHours[1] }}</span>
                      <span> دقیقه </span>
                    </big>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-card class="ma-3">
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="#FAD9A1" class="white--text">
              <div class="pt-5 pb-5">
                <v-row justify="center" align="center" no-gutters>
                  <v-col sm="5" md="6">
                    <div class="headline pr-5">تاخیر</div>
                  </v-col>
                  <v-col justify="center" align="center" sm="5" md="6">
                    <big>
                      <span>{{ delayHours[0] }}</span>
                      <span> ساعت و </span><span>{{ delayHours[1] }}</span>
                      <span> دقیقه </span>
                    </big>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-card class="ma-3">
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="#F37878" class="white--text">
              <div class="pt-5 pb-5">
                <v-row justify="center" align="center" no-gutters>
                  <v-col sm="5" md="6">
                    <div class="headline pr-5">اضافه کار</div>
                  </v-col>
                  <v-col justify="center" align="center" sm="5" md="6">
                    <big>
                      <span>{{ overTimeHours[0] }}</span>
                      <span> ساعت و </span><span>{{ overTimeHours[1] }}</span>
                      <span> دقیقه </span>
                    </big>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    absenceHours: {
      type: String,
      default: '00',
    },
    delayHours: {
      type: String,
      default: '00',
    },
    presenceHours: {
      type: String,
      default: '00',
    },
    overTimeHours: {
      type: String,
      default: '00',
    },
  },
  data() {
    return {
      absence: null,
      delay: null,
      presence: null,
      overTime: null,
    }
  },

  async fetch() {
    await this.$axios.get('/employee/dailyAttendance').then((res) => {
      this.absence = res.data.response.absence
      this.delay = res.data.response.delay
      this.presence = res.data.response.presence
      this.overTime = res.data.response.overTime
    })

    this.$props.absenceHours = this.absence.split(':', 3)
    this.$props.delayHours = this.delay.split(':', 3)
    this.$props.presenceHours = this.presence.split(':', 3)
    this.$props.overTimeHours = this.presence.split(':', 3)
  },
}
</script>

<style scoped>
.v-application .mb-6 {
  margin-bottom: 0px;
}
</style>