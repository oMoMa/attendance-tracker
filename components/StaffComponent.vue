<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-flex xs12>
        <v-row justify="center" align="center" class="mb-6 pt-5 pb-5">
          <v-col justify="center" align="center" sm="5" md="6">
            <v-btn class="mr-8"> همه کارکنان </v-btn>
          </v-col>
          <v-col justify="center" align="center" sm="5" md="6">
            <v-btn class="ml-8"> کارکنان حاضر</v-btn>
          </v-col>
        </v-row>
        <ul v-for="user in users" :key="user.id" class="mb-2">
          <v-card color="#898AA6" class="white--text">
            <div class="pt-5 pb-5">
              <v-row justify="center" align="center" no-gutters>
                <v-col justify="center" align="center" sm="5" md="6">
                  <span class="mr-10">{{ user.name }}</span></v-col
                >
                <v-col justify="center" align="center" sm="5" md="6">
                  <v-avatar class="mr-15">
                    <img alt="Avatar" :src="require('assets/Images/t.jpg')" />
                  </v-avatar>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </ul>
      </v-flex>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Adrian Schubert',
          avatar:
            'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png',
        },
        {
          id: 2,
          name: 'Violet Gates',
        },
        {
          id: 3,
          name: 'Steve Jobs',
          avatar: "require('assets/Images/t.jpg')",
        },
        {
          id: 4,
          name: 'Yassine Smith',
          avatar: "require('assets/Images/t.jpg')",
        },
        {
          id: 5,
          name: 'Senior Saez',
          avatar: "require('assets/Images/t.jpg')",
        },
      ],
    }
  },
}
</script>
<style scoped>
.v-btn.v-size--default {
  width: 200px;
  height: 60px;
}
.v-application ul,
.v-application ol {
  padding-left: 0px;
}
.v-application .mb-6 {
  margin-bottom: 0px !important;
}
</style>