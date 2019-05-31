<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-table id="password-table" :items="filteredTable" :per-page="perPage" :current-page="currentPage" :fields="fields">
          <template slot="actions" slot-scope="data">
            <b-button @click="editButtonCallback(data.index)" class="edit-button" size="sm" variant="outline-warning"><i class="fas fa-edit text"></i></b-button>
            <b-button @click="removeButtonCallback(data.index)" class="remove-button" size="sm"  variant="outline-danger"><i class="far fa-trash-alt"></i></b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4"></b-col>
      <b-col cols="4">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="password-table"
        ></b-pagination>
      </b-col>
      <b-col cols="4">
        <select class="w-25 float-right" v-model="perPage">
          <option>5</option>
          <option>10</option>
          <option>50</option>
        </select>
      </b-col>
    </b-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      fields: ['id', 'name', 'username', 'password', 'email', 'description', 'actions']
    };
  },
  props: {
    items: Array,
    editButtonCallback: Function,
    removeButtonCallback: Function
  },
  computed: {
    rows() {
      return this.items.length;
    },
    filteredTable() {
      return this.items.filter(value => {
        return value.name.toLowerCase().indexOf(this.$store.state.searchInputValue.toLowerCase()) > -1;
      });
    }
  }
};
</script>

<style scoped>

@media all and (max-width: 854px) {
  .edit-button {
    margin-bottom: 10%;
  }
}


@media all and (min-width: 854px) {
  .edit-button {
    margin-right: 10%;
  }
}



</style>


