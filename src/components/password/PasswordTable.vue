<template>
  <v-data-table :items="filteredTable" :headers="headers" :loading="loading" class="elevation-1">
    <template v-slot:items="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.username }}</td>
      <td>{{ props.item.password }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.description }}</td>
      <td>
        <v-icon small class="mr-2" @click="editButtonCallback(props.item)">edit</v-icon>
        <v-icon small @click="removeButtonCallback(props.item)">delete</v-icon>
      </td>
    </template>
    <template v-slot:footer>
      <td :colspan="headers.length">
        <v-text-field  label="Search" prepend-icon="search" single-line @input="onSearchTyping"></v-text-field>
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      headers: [
        { text: "Id", align: "left", value: "id" },
        { text: "Name", align: "left", value: "name" },
        { text: "Username", align: "left", value: "username" },
        { text: "Password", align: "left", value: "password" },
        { text: "Email", align: "left", value: "email" },
        { text: "Description", align: "left", value: "description" },
        { text: "Actions", align: "left", value: "actions" }
      ]
    };
  },
  props: {
    items: Array,
    editButtonCallback: Function,
    removeButtonCallback: Function,
    loading: Boolean
  },
  computed: {
    filteredTable() {
      return this.items.filter(value => {
        return (
          value.name
            .toLowerCase()
            .indexOf(this.$store.getters.getSearchInputValue.toLowerCase()) > -1
        );
      });
    }
  },
  methods: {
    onSearchTyping(value) {
        this.$store.dispatch('handleSearchInputValue', value);
    }
  }
};
</script>

<style>
</style>


