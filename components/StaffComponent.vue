
<template>
  <div>
    <v-row class="mt-5">
      <v-col sm="12">
        <v-select
          justify="center"
          align="center"
          class="form-control-select mt-5"
          :items="items"
          label="کارکنان حاضر"
          solo
          @input="changedLabel"
        ></v-select>
        <span>{{ selected }}</span>
      </v-col>
    </v-row>

    <v-card>
      <v-simple-table class="mt-3">
        <template #default>
          <!-- <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead> -->
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td justify="center" align="center" class="pa-2">
                <v-avatar class="mr-8">
                  <img alt="Avatar" :src="require('assets/Images/t.jpg')" />
                </v-avatar>
              </td>
              <td justify="center" align="center" class="pa-2">
                {{ user.name }}
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
      users: [
        {
          id: 1,
          name: 'Evan You',
        },
        {
          id: 2,
          name: 'Jeff Bezos',
        },
        {
          id: 3,
          name: 'StackOverflow',
        },
        {
          id: 4,
          name: 'Steve Jobs',
        },
        {
          id: 5,
          name: 'Youtube',
        },
        {
          id: 1,
          name: 'Evan You',
        },
        {
          id: 2,
          name: 'Jeff Bezos',
        },
        {
          id: 3,
          name: 'StackOverflow',
        },
        {
          id: 4,
          name: 'Steve Jobs',
        },
        {
          id: 5,
          name: 'Youtube',
        },
        {
          id: 1,
          name: 'Evan You',
        },
        {
          id: 2,
          name: 'Jeff Bezos',
        },
        {
          id: 3,
          name: 'StackOverflow',
        },
        {
          id: 4,
          name: 'Steve Jobs',
        },
        {
          id: 5,
          name: 'Youtube',
        },
      ],
    }
  },
  methods: {
    changedLabel(event) {
      this.selected = event

      if (event === 'همه کارکنان') {
        console.log(event)
      }
      if (event === 'همه کارکنان') {
        console.log(event)
      }
    },
  },
}
</script>