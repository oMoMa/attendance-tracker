<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="#A685E2" class="white--text">
            <div class="pt-5 pb-5">
              <v-col justify="center" align="center">
                <big class="headline">{{ dict[workDays[4]] }}</big>
              </v-col>
              <v-row justify="center" align="center" no-gutters>
                <v-col sm="5" md="6">
                  <big class="pr-5"
                    >از {{ startime[1] }} : {{ startime[0] }}</big
                  >
                </v-col>
                <v-col justify="center" align="center" sm="5" md="6">
                  <big class="pr-9">تا {{ endtime[1] }} : {{ endtime[0] }}</big>
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
                <big class="headline">{{ dict[workDays[0]] }}</big>
              </v-col>
              <v-row justify="center" align="center" no-gutters>
                <v-col sm="5" md="6">
                  <big class="pr-5"
                    >از {{ startime[1] }} : {{ startime[0] }}</big
                  >
                </v-col>
                <v-col justify="center" align="center" sm="5" md="6">
                  <big class="pr-9">تا {{ endtime[1] }} : {{ endtime[0] }}</big>
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
                <big class="headline">{{ dict[workDays[1]] }}</big>
              </v-col>
              <v-row justify="center" align="center" no-gutters>
                <v-col sm="5" md="6">
                  <big class="pr-5"
                    >از {{ startime[1] }} : {{ startime[0] }}</big
                  >
                </v-col>
                <v-col justify="center" align="center" sm="5" md="6">
                  <big class="pr-9">تا {{ endtime[1] }} : {{ endtime[0] }}</big>
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
                <big class="headline">{{ dict[workDays[2]] }}</big>
              </v-col>
              <v-row justify="center" align="center" no-gutters>
                <v-col sm="5" md="6">
                  <big class="pr-5"
                    >از {{ startime[1] }} : {{ startime[0] }}</big
                  >
                </v-col>
                <v-col justify="center" align="center" sm="5" md="6">
                  <big class="pr-9">تا {{ endtime[1] }} : {{ endtime[0] }}</big>
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
                <big class="headline">{{ dict[workDays[3]] }}</big>
              </v-col>
              <v-row justify="center" align="center" no-gutters>
                <v-col sm="5" md="6">
                  <big class="pr-5"
                    >از {{ startime[1] }} : {{ startime[0] }}</big
                  >
                </v-col>
                <v-col justify="center" align="center" sm="5" md="6">
                  <big class="pr-9">تا {{ endtime[1] }} : {{ endtime[0] }}</big>
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
  data() {
    return {
      workDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Saturday'],
      startime: ['09', '00', '00'],
      endtime: ['17', '00', '00'],
      dict: {
        Sunday: 'یکشنبه',
        Monday: 'دوشنبه',
        Tuesday: 'سه شنبه',
        Wednesday: 'چهارشنبه',
        Saturday: 'شنبه',
        Thursday: 'پنجشنبه',
        Friday: 'جمعه',
      },
    }
  },

  async fetch() {
    await this.$axios.get('/employee/mySchedule').then((res) => {
      this.workDays = res.data.response.workDays
      this.startime = res.data.response.workSchedule.startTime.split(':', 3)
      this.endtime = res.data.response.workSchedule.endTime.split(':', 3)
    })
  },
}
</script>

