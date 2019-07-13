<template>
  <div>
    <v-toolbar color="white" flat>
      <v-toolbar-title class="grey--text text--darken-4">Password {{type.charAt(0).toUpperCase() + type.slice(1)}}</v-toolbar-title>
    </v-toolbar>
    <v-form @reset="onReset">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field id="name" label="Password Name" v-model="passwordChanged.name" required></v-text-field>
            <v-text-field id="email" label="Email" v-model="passwordChanged.email" required></v-text-field>
          </v-flex>

          <v-flex xs6>
            <v-text-field
              id="username"
              label="Username"
              v-model="passwordChanged.username"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs6>
            <v-text-field
              id="password"
              label="Password"
              v-model="passwordChanged.password"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-textarea
              id="description"
              label="Description"
              v-model="passwordChanged.description"
              rows="3"
              max-rows="6"
            ></v-textarea>
          </v-flex>

          <v-btn color="primary" @click="onSubmit">{{type.charAt(0).toUpperCase() + type.slice(1)}}</v-btn>
          <v-spacer></v-spacer>
          <v-btn class="float-right" type="reset" color="warning">Reset</v-btn>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>


<script>
import { type } from "os";
export default {
  data() {
    return {
      password: {
        name: "",
        username: "",
        password: "",
        email: "",
        description: ""
      }
    };
  },
  props: {
    type: String
  },
  methods: {
    onSubmit() {
      if (this.type == "add") {
        this.$http.post("password/save", this.password).then(
          response => {
            this.$store.dispatch('addToPasswordList', response.body)
          },
          () => {
           this.$store.dispatch('enableError', "Password couldn't save!")
          }
        );
      }

      if (this.type == "edit") {
        this.$http.put("password/update", this.password).then(
          response => {

          },
          () => {
            this.$store.dispatch('enableError', "Password couldn't edit!")
          }
        );
      }
    },
    onReset(evt) {
      evt.preventDefault();
      this.$store.dispatch("resetPassword");
    }
  },
  computed: {
    passwordChanged() {
      if (this.type == "edit") {
        return (this.password = this.$store.getters.getPassword);
      } else {
        this.$store.dispatch("resetPassword");
        this.password = {
          name: "",
          username: "",
          password: "",
          email: "",
          description: ""
        };
        return this.password;
      }
    }
  }
};
</script>


