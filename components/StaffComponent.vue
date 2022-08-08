<template>
  <v-container>
    <v-row class="mt-5">
      <v-col sm="12">
        <v-select
          v-model="selected"
          justify="center"
          align="center"
          class="form-control-select mt-5"
          :items="items"
          label="کارکنان حاضر"
          solo
          @input="$fetch()"
        ></v-select>
      </v-col>
    </v-row>

    <v-card>
      <v-simple-table class="mt-3">
        <template #default>
          <thead>
            <tr>
              <th class="text-right">عکس</th>
              <th class="text-right">نام</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td justify="center" align="start" class="pa-2">
                <v-avatar>
                  <img alt="Avatar" :src="require('assets/Images/t.jpg')" />
                </v-avatar>
              </td>
              <td justify="center" align="start" class="pa-2" text-right>
                {{ user.fname }} {{ user.lname }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    staff: {
      type: Array,
      default() {},
    },
  },
  data() {
    return {
      items: ['همه کارکنان', 'کارکنان حاضر'],
      selected: null,
      headers: [
        {
          text: 'users',
          align: 'start',
          value: 'name',
        },
      ],
      users: [],
    }
  },
  async fetch() {
    if (this.selected === 'همه کارکنان') {
      await this.$axios
        .get(`/employer/workplace/${this.$route.params.id}/indexEmployees`)
        .then((res) => {
          this.users = res.data.response.employees
        })
    }
    if (this.selected === 'کارکنان حاضر') {
      await this.$axios
        .get(`/employer/workplace/${this.$route.params.id}/presentEmloyees`)
        .then((res) => {
          this.users = res.data.response.presentEmployees
        })
    }
  },
}
</script>
