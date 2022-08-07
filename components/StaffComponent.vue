<template>
  <v-data-table
    :headers="headers"
    :items="users"
    hide-default-header
    hide-default-footer
    class="elevation-1"
  ></v-data-table>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'users',
          align: 'start',
          value: 'name',
        },
      ],
      users: [
        {
          name: 'Evan You',
        },
        {
          name: 'Jeff Bezos',
        },
        {
          name: 'StackOverflow',
        },
        {
          name: 'Steve Jobs',
        },
        {
          name: 'Youtube',
        },
      ],
    }
  },
}
</script>