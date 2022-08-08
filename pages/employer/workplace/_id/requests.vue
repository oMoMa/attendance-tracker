<template>
  <v-container>
    <v-card elevation="3" class="rounded-lg">
      <v-card-title>
        درخواست ها
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
        :items="requests"
        :headers="tableHeaders"
        :server-items-length="tableTotalItems"
        :search="search"
        class="farsi-digits mt-8"
      >
        <template #[`item.name`]="{ item }">
          {{ fullname(item.employee) }}
        </template>
        <template #[`item.type`]="{ item }"> {{ dict[item.type] }} </template>
        <template #[`item.startDateTime`]="{ item }">
          {{
            moment(item.startDateTime).locale('fa').format('hh:mm YYYY/MM/DD')
          }}
        </template>

        <template #[`item.endDateTime`]="{ item }">
          {{ moment(item.endDateTime).locale('fa').format('hh:mm YYYY/MM/DD') }}
        </template>

        <template #[`item.status`]="{ item }">
          {{ requestStatus(item) }}
        </template>

        <template #[`item.actions`]="{ item }">
          <v-btn small dark color="green" @click="accept(item)">
            <v-icon>mdi-check</v-icon>
          </v-btn>
          <v-btn small dark color="red" @click="reject(item)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import moment from 'jalali-moment'
import dict from '~/assets/dict.js'

export default {
  data() {
    return {
      search: '',
      requests: [],
      tableHeaders: [
        {
          text: 'نام کارمند',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        {
          text: 'نوع درخواست',
          align: 'start',
          sortable: true,
          value: 'type',
        },
        {
          text: 'زمان شروع',
          align: 'start',
          sortable: true,
          value: 'startDateTime',
        },
        {
          text: 'زمان پایان',
          align: 'start',
          sortable: true,
          value: 'endDateTime',
        },

        {
          text: 'توضیحات',
          align: 'start',
          sortable: true,
          value: 'description',
        },
        {
          text: 'وضعیت',
          align: 'start',
          sortable: true,
          value: 'status',
        },
        { text: 'عملیات', value: 'actions', sortable: false },
      ],
      tableTotalItems: null,
      dict,
    }
  },

  async fetch() {
    await this.$axios
      .get(
        `/employer/workplace/${this.$route.params.id}/leaveRequests?page=0&size=999`
      )
      .then((res) => {
        this.requests = res.data.response.leaves
        this.tableTotalItems = res.data.count
      })
  },

  methods: {
    moment,

    requestStatus(req) {
      if (req.read_receipt) {
        if (req.status) return 'تایید شد'
        else return 'رد شد'
      } else return 'در حال بررسی'
    },

    fullname(person) {
      return person.fname + ' ' + person.lname
    },

    async accept(item) {
      await this.$axios.patch(`/employer/leave/${item.id}/approve`).then(() => {
        this.$fetch()
      })
    },

    async reject(item) {
      await this.$axios.patch(`/employer/leave/${item.id}/decline`).then(() => {
        this.$fetch()
      })
    },
  },
}
</script>
