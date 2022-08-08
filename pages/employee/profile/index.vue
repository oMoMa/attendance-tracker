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
          <div class="text-h6 white--text">
            <v-icon color="white" x-large class="ml-4">
              mdi-account-circle</v-icon
            >
            {{ fullname }}
          </div>
        </v-container>
      </v-sheet>
    </v-sheet>
    <v-container class="mt-n16">
      <v-card max-width="400px" class="rounded-lg mx-auto">
        <v-list max-width="400px">
          <v-list-item
            v-for="item in listItems"
            :key="item.title"
            ripple
            nuxt
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <div class="pa-2 mt-4">
            <v-btn outlined block color="red" @click="$auth.logout()">
              خروج از حساب کاربری
            </v-btn>
          </div>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'employeeDefault',
  data() {
    return {
      listItems: [
        {
          title: 'مشخصات فردی',
          subtitle: 'نمایش و ویرایش مشخصات فردی',
          icon: 'mdi-account',
          to: '/employee/profile/edit',
        },
        {
          title: 'شیفت کاری',
          subtitle: 'مشاهده، ویرایش',
          icon: 'mdi-clipboard-text-clock',
          to: '/employee/profile/work-schedule',
        },
      ],
    }
  },

  async fetch() {},

  computed: {
    fullname() {
      return this.$auth.user.fname + ' ' + this.$auth.user.lname
    },
  },
}
</script>
