<template>
  <v-card width="fit-content" class="mx-auto rounded-lg">
    <div class="pa-4">
      <qrcode-vue :value="qrCodeString" :size="size" level="L" />
    </div>
    <v-card-actions>
      <v-btn
        :loading="$fetchState.pending"
        block
        color="blue lighten-4"
        @click="$fetch()"
      >
        تولید کد جدید
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import QrcodeVue from 'qrcode.vue'
export default {
  components: {
    QrcodeVue,
  },

  data() {
    return {
      size: 300,
    }
  },

  async fetch() {
    await this.$store.dispatch(
      'employer/generateNewCode',
      this.$route.params.id
    )
  },

  computed: {
    ...mapState('employer', { qrCodeString: 'qrCode' }),
  },
}
</script>
