<template>
  <div class="d-flex flex-column align-center">
    <v-sheet
      elevation="3"
      color="secondary"
      class="pb-8"
      width="100%"
      height="300px"
    >
      <v-sheet
        elevation="2"
        height="200px"
        color="primary"
        class="d-flex align-center"
        width="100%"
      >
        <v-container>
          <div v-if="workplace" class="text-h6 white--text">
            {{ workplace.name }}
          </div>
        </v-container>
      </v-sheet>
    </v-sheet>
    <v-container class="mt-n16">
      <v-card max-width="400px" width="100%" class="pa-2 rounded-lg mx-auto">
        <v-dialog max-width="300px">
          <template #activator="{ on }">
            <div class="pa-2">
              <v-btn dark color="blue lighten-2" block v-on="on">افزودن</v-btn>
            </div>
          </template>
          <template #default="dialog">
            <v-card>
              <v-card-title> افزودن شیفت </v-card-title>
              <div class="pa-4">
                <v-text-field
                  v-model="newScheduleName"
                  outlined
                  label="نام"
                ></v-text-field>
                <v-row>
                  <v-col cols="12">
                    <v-btn
                      id="range-btn-from"
                      color="primary"
                      block
                      class="mt-4"
                    >
                      از
                    </v-btn>
                  </v-col>
                  <v-col cols="12">
                    <v-btn id="range-btn-to" color="primary" block class="mt-4">
                      تا
                    </v-btn>
                  </v-col>
                </v-row>

                <date-time-picker
                  v-model="startTime"
                  locale="fa"
                  type="time"
                  format="hh:mm:ss"
                  custom-input="#range-btn-from"
                  :color="$vuetify.theme.themes.light.primary"
                  class="farsi-digits"
                />
                <date-time-picker
                  v-model="endTime"
                  locale="fa"
                  type="time"
                  format="hh:mm:ss"
                  custom-input="#range-btn-to"
                  :color="$vuetify.theme.themes.light.primary"
                  class="farsi-digits"
                />
              </div>
              <v-card-actions>
                <v-btn
                  class="mx-auto"
                  @click="
                    addSchedule()
                    dialog.value = false
                  "
                >
                  ثبت
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
        <v-row v-for="item in workSchedules" :key="item.id">
          <v-col cols="12">
            <v-card color="trietary darken-2" class="white--text">
              <div class="pt-5 pb-5">
                <v-col justify="center" align="center">
                  <big class="headline">{{ item.title }}</big>
                </v-col>
                <v-row justify="center" align="center" no-gutters>
                  <v-col sm="5" md="6">
                    <big class="pr-5">
                      از {{ item.startTime.slice(0, 5) }}
                    </big>
                  </v-col>
                  <v-col justify="center" align="center" sm="5" md="6">
                    <big class="pr-9">تا {{ item.endTime.slice(0, 5) }} </big>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import DateTimePicker from 'vue-persian-datetime-picker'
export default {
  components: { DateTimePicker },

  data() {
    return {
      workSchedules: [],
      workplace: null,
      newScheduleName: '',
      startTime: '',
      endTime: '',
    }
  },

  async fetch() {
    if (this.workplace === null || this.workplaces.length > 0) {
      await this.$store.dispatch('workplace/fetchWorkplaces')
    }
    const workplaceId = this.$route.params.id
    this.workplace = this.workplaces.find(
      (el) => el.id === parseInt(workplaceId)
    )

    await this.$axios
      .get(
        `/employer/workplace/${this.$route.params.id}/schedules?page=0&size=999`
      )
      .then((res) => {
        this.workSchedules = res.data.response.workSchedules
      })
  },

  computed: mapState('workplace', ['workplaces']),

  methods: {
    async addSchedule() {
      await this.$axios
        .post(`/employer/workplace/${this.$route.params.id}/addWorkSchedule`, {
          startTime: this.startTime,
          endTime: this.endTime,
          title: this.newScheduleName,
        })
        .then(() => {
          this.$fetch()
        })
    },
  },
}
</script>
