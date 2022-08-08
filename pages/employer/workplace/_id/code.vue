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
          <div v-if="workplace" class="text-h6">
            {{ workplace.name }}
          </div>
        </v-container>
      </v-sheet>
    </v-sheet>

    <qr-code-generator class="mt-n10" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import QrCodeGenerator from '../../../../components/QrCodeGenerator.vue'
export default {
  components: { QrCodeGenerator },
  data() {
    return {
      workplace: null,
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
  },
}
</script>
