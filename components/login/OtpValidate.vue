<template>
  <div>
    <v-otp-input
      v-model="code"
      length="4"
      type="number"
      style="direction: ltr"
      @finish="$nextTick(() => $refs.loginBtn.$el.focus())"
    />
    <v-btn ref="loginBtn" block class="mt-4" @click="$emit('login', code)">
      ورود
    </v-btn>
  </div>
</template>

<script>
export default {
  emits: ['login'],
  data() {
    return {
      code: null,
    }
  },
}
</script>
