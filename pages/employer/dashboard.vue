<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" lg="3">
        <v-dialog>
          <template #activator="{ on }">
            <v-card
              v-ripple
              height="150px"
              color="grey lighten-2"
              elevation="2"
              class="d-flex justify-center align-center rounded-xl"
              v-on="on"
            >
              <span>افزودن محیط کاری</span>
            </v-card>
          </template>

          <template #default="dialog">
            <v-card>
              <v-card-title> نام محیط کاری </v-card-title>
              <div class="pa-4">
                <v-text-field
                  v-model="newWorkplace"
                  color="trietary"
                  type="text"
                  outlined
                  placeholder="نام"
                  label="نام"
                >
                </v-text-field>
              </div>
              <v-card-actions>
                <v-btn
                  color="trietary darken-1"
                  class="mx-auto"
                  @click="
                    addWorkplace()
                    dialog.value = false
                  "
                >
                  افزودن
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
      <v-col v-for="item in workplaces" :key="item.id" cols="12" md="4" lg="3">
        <v-card
          v-ripple
          height="150px"
          elevation="2"
          class="d-flex justify-center align-center rounded-xl"
          nuxt
          :to="`/employer/workplace/${item.id}`"
        >
          <span class="text-button">{{ item.name }}</span>
        </v-card>
      </v-col>
    </v-row>

    <!-- <v-btn @click="$auth.logout()">logout</v-btn> -->
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      newWorkplace: null,
    }
  },

  async fetch() {
    await this.$store.dispatch('workplace/fetchWorkplaces')
  },

  computed: {
    ...mapState('workplace', ['workplaces']),
  },

  methods: {
    async addWorkplace() {
      await this.$axios
        .post('/employer/workplace/add', { name: this.newWorkplace })
        .then(() => {
          this.$fetch()
        })
    },
  },
}
</script>
