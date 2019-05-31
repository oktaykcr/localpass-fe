<template>
  <div>
    <b-container>
      <PasswordTable :items="password.items" :editButtonCallback="onClickEdit"  :removeButtonCallback="onClickRemove" />
      <div>
        <b-button variant="success" @click="onClickAdd" class="circular">
          <i class="fas fa-plus-circle fa-lg"></i>
        </b-button>
      </div>
      <div v-if="isFormShowing">
        <PasswordEdit v-if="passwordForm === 'add'" type="add"/>
        <PasswordEdit v-else type="edit"/>
      </div>
    </b-container>
  </div>
</template>

<script>
import PasswordTable from "../components/password/PasswordTable";
import PasswordEdit from "../components/password/PasswordEdit";

export default {
  name: "password",
  components: {
    PasswordTable,
    PasswordEdit
  },
  data() {
    return {
      passwordForm: 'add',
      isFormShowing: false,
      password: {
        items: []
      }
    }
  },
  methods: {
    onClickAdd() {
        this.passwordForm = "add";
        this.isFormShowing = true;
    },
    onClickEdit(index) {
        this.$store.dispatch('setPassword', this.password.items[index]);
        this.passwordForm = "edit";
        this.isFormShowing = true;
    },
    onClickRemove(index) {
      //remove from backend server
    }
  },
  created() {
    this.$http.get('list').then(
        response => {
          console.log(response.body.data);
          
         this.password.items = response.body.data;
        }, () => {
          console.log("ERROR!");
        }
      );
  }
};
</script>

<style scoped>
.circular {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 5%;
    border-radius: 50%;
    height: 5%;
    width: 5%;
}
</style>

