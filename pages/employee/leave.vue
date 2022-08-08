<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-btn
          block
          color="secondary darken-1"
          @click="dailyLeaveDialog = true"
        >
          درخواست مرخصی روزانه
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn
          block
          color="secondary darken-1"
          @click="hourlyLeaveDialog = true"
        >
          درخواست مرخصی ساعتی
        </v-btn>
      </v-col>
    </v-row>
    <v-data-table
      :items="requests"
      :headers="tableHeaders"
      :server-items-length="tableTotalItems"
      class="farsi-digits mt-8"
    >
      <template #[`item.type`]="{ item }"> {{ dict[item.type] }} </template>
      <template #[`item.startDateTime`]="{ item }">
        {{ moment(item.startDateTime).locale('fa').format('hh:mm YYYY/MM/DD') }}
      </template>

      <template #[`item.endDateTime`]="{ item }">
        {{ moment(item.endDateTime).locale('fa').format('hh:mm YYYY/MM/DD') }}
      </template>

      <template #[`item.status`]="{ item }">
        {{ requestStatus(item) }}
      </template>
    </v-data-table>

    <daily-leave-request-dialog v-model="dailyLeaveDialog" />
    <hourly-leave-request-dialog v-model="hourlyLeaveDialog" />
  </v-container>
</template>

<script>
import moment from 'jalali-moment'
import DailyLeaveRequestDialog from '../../components/dialog/DailyLeaveRequestDialog.vue'
import HourlyLeaveRequestDialog from '../../components/dialog/HourlyLeaveRequestDialog.vue'
import dict from '~/assets/dict.js'
export default {
  components: { DailyLeaveRequestDialog, HourlyLeaveRequestDialog },
  layout: 'employeeDefault',
  data() {
    return {
      dailyLeaveDialog: false,
      hourlyLeaveDialog: false,
      requests: [],
      tableHeaders: [
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
      ],
      tableTotalItems: null,
      dict,
    }
  },

  async fetch() {
    await this.$axios.get('/employee/leaves?size=999&page=0').then((res) => {
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
  },
}
</script>
