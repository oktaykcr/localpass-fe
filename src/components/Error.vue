<template>
    <v-alert
      :value="error"
      type="error"
      outline
      class="mt-3"
    >
      {{message}}
    </v-alert>
</template>

<script>
export default {
    computed: {
      error() {
        return this.$store.getters.error
      },
      message() {
        return this.$store.getters.message
      }
    }
}
</script>

<style scoped>

</style>
