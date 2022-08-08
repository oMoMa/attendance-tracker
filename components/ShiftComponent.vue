<template>
  <v-card max-width="400px" class="rounded-lg">
    <v-card-title>{{ name }}</v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card color="trietary darken-2" class="white--text">
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
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card color="trietary darken-2" class="white--text">
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
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card color="trietary darken-2" class="white--text">
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
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card color="trietary darken-2" class="white--text">
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
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card color="trietary darken-2" class="white--text">
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
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      workDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Saturday'],
      startime: ['09', '00', '00'],
      endtime: ['17', '00', '00'],
      name: '',
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
      this.name = res.data.response.workSchedule.title
    })
  },
}
</script>
