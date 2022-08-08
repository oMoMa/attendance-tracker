<template>
  <div v-if="workplace" class="d-flex flex-column align-center">
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
              mdi-account-circle
            </v-icon>
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
            :to="`/employer/workplace/${workplace.id}` + item.to"
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
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      workplace: null,
      listItems: [
        {
          title: 'نمایش QR Code',
          subtitle: 'برای ورود و خروج کارمندان',
          icon: 'mdi-qrcode',
          to: `/code`,
        },
        {
          title: 'مدیریت پرسنل',
          subtitle: 'مشاهده، ویرایش ورود و خروج',
          icon: 'mdi-account-group',
          to: `/employees`,
        },
        {
          title: 'شیفت کاری',
          subtitle: 'مشاهده، ویرایش',
          icon: 'mdi-clipboard-text-clock',
          to: `/shift`,
        },
        {
          title: 'مدیریت درخواست مرخصی',
          subtitle: 'رد یا قبول کردن درخواست ها',
          icon: 'mdi-list-box',
          to: '/requests',
        },
        {
          title: 'تردد',
          subtitle: 'مشاهده ورود و خروج ها',
          icon: 'mdi-swap-horizontal',
          to: '/records',
        },
      ],
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
  },

  computed: {
    ...mapState('workplace', ['workplaces']),

    fullname() {
      return this.$auth.user.fname + ' ' + this.$auth.user.lname
    },
  },
}
</script>
