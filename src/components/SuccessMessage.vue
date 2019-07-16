<template>
    <v-snackbar
      v-model="success"
      right="right"
      :timeout="0"
    >
      {{ text }}
      <v-btn
        color="pink"
        flat
        @click="close"
      >
        Close
      </v-btn>
    </v-snackbar>
</template>

<script>
export default {
    computed: {
      success() {
        return this.$store.getters.success
      },
      text() {
        return this.$store.getters.text
      }
    },
    methods: {
        close() {
            this.$store.dispatch('disableSuccessMessage')
        }
    }
  }
</script>


