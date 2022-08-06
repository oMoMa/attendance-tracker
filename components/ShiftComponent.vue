<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="#A685E2" class="white--text">
            <div class="pt-5 pb-5">
              <v-col justify="center" align="center">
                <big class="headline">{{ $props.workDay[0] }}</big>
              </v-col>
              <v-row justify="center" align="center" no-gutters>
                <v-col sm="5" md="6">
                  <big class="pr-5"
                    >از {{ $props.start[1] }} : {{ $props.start[0] }}</big
                  >
                </v-col>
                <v-col justify="center" align="center" sm="5" md="6">
                  <big class="pr-9"
                    >تا {{ $props.start[1] }} : {{ $props.start[0] }}</big
                  >
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="#A685E2" class="white--text">
            <div class="pt-5 pb-5">
              <v-col justify="center" align="center">
                <big class="headline">{{ $props.workDay[1] }}</big>
              </v-col>
              <v-row justify="center" align="center" no-gutters>
                <v-col sm="5" md="6">
                  <big class="pr-5"
                    >از {{ $props.start[1] }} : {{ $props.start[0] }}</big
                  >
                </v-col>
                <v-col justify="center" align="center" sm="5" md="6">
                  <big class="pr-9"
                    >تا {{ $props.end[1] }} : {{ $props.end[0] }}</big
                  >
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="#A685E2" class="white--text">
            <div class="pt-5 pb-5">
              <v-col justify="center" align="center">
                <big class="headline">{{ $props.workDay[2] }}</big>
              </v-col>
              <v-row justify="center" align="center" no-gutters>
                <v-col sm="5" md="6">
                  <big class="pr-5"
                    >از {{ $props.start[1] }} : {{ $props.start[0] }}</big
                  >
                </v-col>
                <v-col justify="center" align="center" sm="5" md="6">
                  <big class="pr-9"
                    >تا {{ $props.end[1] }} : {{ $props.end[0] }}</big
                  >
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="#A685E2" class="white--text">
            <div class="pt-5 pb-5">
              <v-col justify="center" align="center">
                <big class="headline">{{ $props.workDay[3] }}</big>
              </v-col>
              <v-row justify="center" align="center" no-gutters>
                <v-col sm="5" md="6">
                  <big class="pr-5"
                    >از {{ $props.start[1] }} : {{ $props.start[0] }}</big
                  >
                </v-col>
                <v-col justify="center" align="center" sm="5" md="6">
                  <big class="pr-9"
                    >تا {{ $props.end[1] }} : {{ $props.end[0] }}</big
                  >
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="#A685E2" class="white--text">
            <div class="pt-5 pb-5">
              <v-col justify="center" align="center">
                <big class="headline">{{ $props.workDay[4] }}</big>
              </v-col>
              <v-row justify="center" align="center" no-gutters>
                <v-col sm="5" md="6">
                  <big class="pr-5"
                    >از {{ $props.start[1] }} : {{ $props.start[0] }}</big
                  >
                </v-col>
                <v-col justify="center" align="center" sm="5" md="6">
                  <big class="pr-9"
                    >تا {{ $props.end[1] }} : {{ $props.end[0] }}</big
                  >
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    workDay: {
      type: Array,
      default() {
        return [{ message: 'No Day' }]
      },
      start: {
        type: String,
        default: '',
      },
      end: {
        type: String,
        default: '',
      },
    },
  },
  data() {
    return {
      workDays: null,
      startime: null,
      endtime: null,
    }
  },

  async fetch() {
    await this.$axios.get('/employee/mySchedule').then((res) => {
      this.workDays = res.data.response.workDays
      this.startime = res.data.response.workSchedule.startTime
      this.endtime = res.data.response.workSchedule.endTime

      this.$props.start = this.startime.split(':', 3)
      this.$props.end = this.endtime.split(':', 3)
      console.log(this.$props.start)

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

    // console.log(res.data.response.startTime)
    for (let i = 0; i < 5; i++) {
      // console.log(this.$props.workDay[i])
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