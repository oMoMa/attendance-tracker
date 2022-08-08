<template>
  <v-container>
    <v-card elevation="3" class="rounded-lg">
      <v-card-title>
        تردد
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="جستجو"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :items="records"
        :headers="tableHeaders"
        :server-items-length="tableTotalItems"
        :search="search"
        class="farsi-digits mt-8"
      >
        <template #[`item.name`]="{ item }">
          {{ fullname(item.employee) }}
        </template>
        <template #[`item.checkInTime`]="{ item }">
          {{ item.checkInTime || 'حضور نزده' }}
        </template>

        <template #[`item.checkOutTime`]="{ item }">
          {{ item.checkOutTime || 'خارج نشده' }}
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      records: [],
      tableHeaders: [
        {
          text: 'نام کارمند',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        {
          text: 'زمان ورود',
          align: 'start',
          sortable: true,
          value: 'checkInTime',
        },
        {
          text: 'زمان خروج',
          align: 'start',
          sortable: true,
          value: 'checkOutTime',
        },
        {
          text: 'شروع شیفت',
          align: 'start',
          sortable: true,
          value: 'startTime',
        },
        {
          text: 'پایان شیفت',
          align: 'start',
          sortable: true,
          value: 'endTime',
        },
      ],
      tableTotalItems: null,
    }
  },

  async fetch() {
    await this.$axios
      .get(
        `/employer/workplace/${this.$route.params.id}/recentAttendance?page=0&size=999`
      )
      .then((res) => {
        this.records = res.data.response.history
        this.tableTotalItems = res.data.count
      })
  },

  methods: {
    fullname(person) {
      return person.fname + ' ' + person.lname
    },
  },
}
</script>
