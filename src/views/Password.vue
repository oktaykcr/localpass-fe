<template>
  <v-layout class="mt-5">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <PasswordTable
          :items="passwordList"
          :editButtonCallback="onClickEdit"
          :removeButtonCallback="onClickRemove"
          :loading="loading"
        />
        <PasswordEdit :type="passwordForm" />
        <v-card-actions style="height: 50px; position: relative">
          <v-btn absolute dark fab right bottom color="pink" @click="onClickAdd">
            <v-icon>add</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import PasswordTable from "../components/password/PasswordTable"
import PasswordEdit from "../components/password/PasswordEdit"

export default {
  name: "password",
  components: {
    PasswordTable,
    PasswordEdit
  },
  data() {
    return {
      passwordForm: "add",
      loading: false
    };
  },
  methods: {
    onClickAdd() {
      this.passwordForm = "add";
      this.$store.dispatch('showDialog', true)
    },
    onClickEdit(passwordObj) {
      this.$store.dispatch("setPassword", passwordObj);
      this.passwordForm = "edit";
      this.$store.dispatch('showDialog', true)
    },
    onClickRemove(passwordObj) {
      this.$http.delete("password/delete", {params: {id: passwordObj.id}}).then(
        response => {
          if(response.data === true) {
            this.$store.dispatch('deletePassword', passwordObj)
            this.$store.dispatch('enableSuccessMessage', "Password is deleted successfully")
          } else {
            this.$store.dispatch('enableError', "Password couldn't delete!")
          }
        }
      );
    }
  },
  computed: {
    passwordList() {
      return this.$store.getters.getPasswordList
    }
  },
  created() {
    this.loading = true
    this.$http.get("password/list", {params: { username: this.$store.getters.username }}).then(
        response => {
          this.$store.dispatch("setPasswordList", response.body.data)
          this.loading = false
        },
        () => {
          this.$store.dispatch('enableError', "Couldn't get passwords from server!")
          this.loading = false
        }
    );
  }
};
</script>

<style scoped>
</style>

