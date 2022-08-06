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
                    <big>{{ $props.workDay[0] }}</big>
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
                    <big>{{ $props.workDay[1] }}</big>
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
                    <big>{{ $props.workDay[2] }}</big>
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
                    <big>{{ $props.workDay[3] }}</big>
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
                    <big>{{ $props.workDay[4] }}</big>
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
    workDay: {
      type: Array,
      default() {
        return [{ message: 'hello' }]
      },
    },
  },
  data() {
    return {
      workDays: null,
    }
  },

  async fetch() {
    await this.$axios.get('/employee/mySchedule').then((res) => {
      this.workDays = res.data.response.workDays

      for (let i = 0; i < 5; i++) {
        if (this.workDays[i] === 'Sunday') {
          this.$props.workDay[1] = 'یکشنبه'
        }
        if (this.workDays[i] === 'Monday') {
          this.$props.workDay[2] = 'دوشنبه'
        }
        if (this.workDays[i] === 'Tuesday') {
          this.$props.workDay[3] = 'سه شنبه'
        }
        if (this.workDays[i] === 'Wednesday') {
          this.$props.workDay[4] = 'چهارشنبه'
        }
        if (this.workDays[i] === 'Saturday') {
          this.$props.workDay[0] = 'شنبه'
        }
      }
    })
    for (let i = 0; i < 5; i++) {
      console.log(this.$props.workDay[i])
    }
    // this.$props.overTimeHours = this.presence.split(':', 3)
  },
}
</script>

<style scoped>
.v-application .mb-6 {
  margin-bottom: 0px;
}
</style>