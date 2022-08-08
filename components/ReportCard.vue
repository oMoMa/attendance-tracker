<template>
  <div class="mt-10">
    <v-container fluid grid-list-lg>
      <v-row>
        <v-col cols="12">
          <v-card color="#D9F8C4" class="black--text">
            <div class="pt-5 pb-5">
              <v-row justify="center" align="center" no-gutters>
                <v-col sm="5" md="6">
                  <div class="headline pr-5">حضور</div>
                </v-col>
                <v-col justify="center" align="center" sm="5" md="6">
                  <big>
                    <span>{{ report.presence[0] }}</span
                    ><span> ساعت و </span><span>{{ report.presence[1] }}</span
                    ><span> دقیقه </span>
                  </big>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card color="#F9F9C5" class="black--text">
            <div class="pt-5 pb-5">
              <v-row justify="center" align="center" no-gutters>
                <v-col sm="5" md="6" class="pl-8">
                  <div class="headline pr-5">غیبت</div>
                </v-col>
                <v-col justify="center" align="center" sm="5" md="6">
                  <big>
                    <span>{{ report.absence[0] }}</span>
                    <span> ساعت و </span><span>{{ report.absence[1] }}</span>
                    <span> دقیقه </span>
                  </big>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card color="#FAD9A1" class="black--text">
            <div class="pt-5 pb-5">
              <v-row justify="center" align="center" no-gutters>
                <v-col sm="5" md="6">
                  <div class="headline pr-5">تاخیر</div>
                </v-col>
                <v-col justify="center" align="center" sm="5" md="6">
                  <big>
                    <span>{{ report.delay[0] }}</span>
                    <span> ساعت و </span><span>{{ report.delay[1] }}</span>
                    <span> دقیقه </span>
                  </big>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card color="#F37878" class="black--text">
            <div class="pt-5 pb-5">
              <v-row justify="center" align="center" no-gutters>
                <v-col sm="5" md="6">
                  <div class="headline pr-5">اضافه کار</div>
                </v-col>
                <v-col justify="center" align="center" sm="5" md="6">
                  <big>
                    <span>{{ report.overTime[0] }}</span>
                    <span> ساعت و </span><span>{{ report.overTime[1] }}</span>
                    <span> دقیقه </span>
                  </big>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    report: {
      type: Object,
      default() {
        return {
          presence: ['00', '00', '00'],
          absence: ['00', '00', '00'],
          delay: ['00', '00', '00'],
          overTime: ['00', '00', '00'],
        }
      },
      validate(v) {
        return v.length === 3
      },
    },
  },
}
</script>
