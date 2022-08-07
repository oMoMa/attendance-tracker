
<template>
  <div>
    <v-row class="mt-5">
      <v-col sm="12">
        <v-select
          justify="center"
          align="center"
          class="form-control-select mt-5"
          v-model="selected"
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
          <!-- <thead>
            <tr>
              <th class="text-center">عکس</th>
              <th class="text-center">نام</th>
            </tr>
          </thead> -->
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td justify="center" align="center" class="pa-2">
                <v-avatar>
                  <img alt="Avatar" :src="require('assets/Images/t.jpg')" />
                </v-avatar>
              </td>
              <td
                justify="center"
                align="center"
                class="pa-2"
                align-start
                text-right
              >
                {{ user.fname }} {{ user.lname }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
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
      await this.$axios.get('/employees').then((res) => {
        this.users = res.data
      })
    }
    // if (this.selected === 'کارکنان حاضر') {
    //   await this.$axios
    //     .get('/employer/workplace/:id/presentEmloyeess')
    //     .then((res) => {
    //       this.users = res.data
    //     })
    // }
  },
}
</script>